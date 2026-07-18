import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import "dotenv/config";

// Import all services
import { initSentry, captureException, Sentry } from "./src/services/sentry";
import { getResend, sendContactConfirmation, sendContactNotification } from "./src/services/resend";
import { saveContact, getContacts } from "./src/services/supabase";
import { initializeCronJobs, stopAllCronJobs } from "./src/services/cron";
import { getDeploymentInfo } from "./src/services/azure";

// Initialize Sentry early for error tracking
initSentry();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Middleware
  app.use(express.json());

  // Note: Sentry error handling is applied via captureException in routes

  // Health check endpoint
  app.get("/api/health", (req: Request, res: Response) => {
    const info = getDeploymentInfo();
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      deployment: info,
      services: {
        sentry: !!process.env.SENTRY_DSN,
        resend: !!process.env.RESEND_API_KEY,
        supabase: !!process.env.SUPABASE_URL,
      },
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // API Routes
  // ═══════════════════════════════════════════════════════════════════════════════

  // Get all contacts (admin endpoint)
  app.get("/api/contacts", async (req: Request, res: Response) => {
    try {
      // TODO: Add authentication check
      const role = req.query.role as string | undefined;
      const contacts = await getContacts(role);
      res.json({ success: true, data: contacts });
    } catch (error) {
      captureException(error as Error, { endpoint: "/api/contacts" });
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { role, name, email, message, organisation, interest_in } = req.body;

      // Validate required fields
      if (!role || !name || !email) {
        return res.status(400).json({ error: "Missing required fields: role, name, email" });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }

      // Save to Supabase
      if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
        try {
          await saveContact({
            name,
            email,
            role,
            organisation,
            source: "website-contact-form",
            interest_in,
            message,
          });
          console.log(`[API] Contact saved: ${name} (${role})`);
        } catch (err: any) {
          console.warn("[API] Supabase save failed:", err.message);
          captureException(err, { endpoint: "/api/contact", step: "supabase-save" });
        }
      }

      // Send emails with Resend
      if (process.env.RESEND_API_KEY) {
        try {
          // Send confirmation to user
          await sendContactConfirmation(name, email, role);
          console.log(`[API] Confirmation email sent to ${email}`);

          // Send notification to PthFndR team
          await sendContactNotification(name, email, role, message, organisation, interest_in);
          console.log(`[API] Notification email sent to team`);
        } catch (err: any) {
          console.warn("[API] Resend email failed:", err.message);
          captureException(err, { endpoint: "/api/contact", step: "resend-email" });
        }
      }

      res.json({ success: true, message: "Contact submission received" });
    } catch (error) {
      console.error("[API] Contact form error:", error);
      captureException(error as Error, { endpoint: "/api/contact" });
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // Vite / Static Files
  // ═══════════════════════════════════════════════════════════════════════════════

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Error handling middleware (must be last)
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("Unhandled error:", err);
    captureException(err);
    res.status(500).json({ error: "Internal server error" });
  });

  // Start server
  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`\n${"═".repeat(80)}`);
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`${"═".repeat(80)}\n`);

    // Initialize cron jobs
    if (process.env.NODE_ENV === "production" || process.env.ENABLE_CRON === "true") {
      initializeCronJobs();
      console.log("[CRON] Jobs initialized\n");
    }
  });

  // Graceful shutdown
  process.on("SIGTERM", () => {
    console.log("\n[SERVER] SIGTERM received, shutting down gracefully...");
    stopAllCronJobs();
    server.close(() => {
      console.log("[SERVER] Server closed");
      process.exit(0);
    });
  });

  process.on("SIGINT", () => {
    console.log("\n[SERVER] SIGINT received, shutting down gracefully...");
    stopAllCronJobs();
    server.close(() => {
      console.log("[SERVER] Server closed");
      process.exit(0);
    });
  });
}

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
