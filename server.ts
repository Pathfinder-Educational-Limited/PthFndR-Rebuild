import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import "dotenv/config";

// Import all services
import { initSentry, captureException, Sentry } from "./src/services/sentry";
import { getResend, sendContactConfirmation, sendContactNotification, sendGuardianConsentRequest, sendEmail } from "./src/services/resend";
import { saveContact, getContacts, createGuardianConsentRequest, confirmGuardianConsent } from "./src/services/supabase";
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

  // Assessment (free diagnostic) lead capture
  app.post("/api/assessment", async (req: Request, res: Response) => {
    try {
      const { name, email, pattern, scores } = req.body;

      if (!name || !email || !pattern) {
        return res.status(400).json({ error: "Missing required fields: name, email, pattern" });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }

      if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
        try {
          await saveContact({
            name,
            email,
            role: "young_person",
            source: "website-assessment",
            interest_in: pattern,
            message: scores ? `Assessment scores — Identity: ${scores.identity}, Character: ${scores.character}, Competence: ${scores.competence}, Impact: ${scores.impact}` : undefined,
          });
          console.log(`[API] Assessment lead saved: ${name} (${pattern})`);
        } catch (err: any) {
          console.warn("[API] Supabase save failed:", err.message);
          captureException(err, { endpoint: "/api/assessment", step: "supabase-save" });
        }
      }

      if (process.env.RESEND_API_KEY) {
        try {
          await sendContactConfirmation(name, email, "young_person", pattern);
          console.log(`[API] Assessment confirmation email sent to ${email}`);
        } catch (err: any) {
          console.warn("[API] Resend email failed:", err.message);
          captureException(err, { endpoint: "/api/assessment", step: "resend-email" });
        }
      }

      res.json({ success: true, message: "Assessment lead received" });
    } catch (error) {
      console.error("[API] Assessment error:", error);
      captureException(error as Error, { endpoint: "/api/assessment" });
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Guardian consent request — used for anyone identifying as 13-17 on the
  // assessment (and, going forward, any other data-collecting flow: contact
  // form, opportunity applications). Stores a pending record and emails the
  // guardian a confirmation link; does NOT save/activate a contact record.
  app.post("/api/consent/request", async (req: Request, res: Response) => {
    try {
      const { minorName, minorEmail, guardianName, guardianEmail, source, payload } = req.body;

      if (!minorName || !minorEmail || !guardianName || !guardianEmail || !source) {
        return res.status(400).json({
          error: "Missing required fields: minorName, minorEmail, guardianName, guardianEmail, source",
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(minorEmail) || !emailRegex.test(guardianEmail)) {
        return res.status(400).json({ error: "Invalid email format" });
      }

      if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
        console.warn("[API] Supabase not configured — guardian consent request not persisted");
        return res.json({ success: true, message: "Consent request received (not persisted in local dev)" });
      }

      const record = await createGuardianConsentRequest({
        minor_name: minorName,
        minor_email: minorEmail,
        guardian_name: guardianName,
        guardian_email: guardianEmail,
        source,
        payload,
      });

      if (process.env.RESEND_API_KEY) {
        const baseUrl = process.env.PUBLIC_BASE_URL || `${req.protocol}://${req.get("host")}`;
        const confirmUrl = `${baseUrl}/api/consent/confirm?token=${record.token}`;
        try {
          await sendGuardianConsentRequest(guardianName, guardianEmail, minorName, confirmUrl);
          console.log(`[API] Guardian consent email sent to ${guardianEmail} for ${minorName}`);
        } catch (err: any) {
          console.warn("[API] Guardian consent email failed:", err.message);
          captureException(err, { endpoint: "/api/consent/request", step: "resend-email" });
        }
      }

      res.json({ success: true, message: "Guardian consent request sent" });
    } catch (error) {
      console.error("[API] Guardian consent request error:", error);
      captureException(error as Error, { endpoint: "/api/consent/request" });
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Guardian clicks the confirmation link in their email — this is a browser
  // navigation (GET), not a fetch call, so it responds with a simple HTML page.
  app.get("/api/consent/confirm", async (req: Request, res: Response) => {
    const token = req.query.token as string | undefined;
    const page = (title: string, body: string) => `
      <!doctype html>
      <html lang="en">
        <head><meta charset="utf-8" /><title>${title} | PthFndR</title></head>
        <body style="font-family: Arial, sans-serif; max-width: 480px; margin: 80px auto; text-align: center; color: #0C2A5C;">
          <h1>${title}</h1>
          <p>${body}</p>
        </body>
      </html>
    `;

    if (!token) {
      return res.status(400).send(page("Missing confirmation link", "This confirmation link looks incomplete. Please use the link from the email exactly as sent."));
    }

    try {
      const result = await confirmGuardianConsent(token);
      if (!result) {
        return res.status(404).send(page("Link not found", "We couldn't find this confirmation request. It may have already been used."));
      }
      if (result.status === "expired") {
        return res.status(410).send(page("Link expired", "This confirmation link has expired. Please ask your young person to submit the request again."));
      }
      return res.send(page("Thank you — confirmed", `You've confirmed consent for ${result.minor_name}. We'll be in touch with them about next steps.`));
    } catch (error) {
      console.error("[API] Guardian consent confirm error:", error);
      captureException(error as Error, { endpoint: "/api/consent/confirm" });
      return res.status(500).send(page("Something went wrong", "Please try again shortly, or reply to the original email for help."));
    }
  });

  // Opportunity application confirmation
  app.post("/api/opportunities/confirm", async (req: Request, res: Response) => {
    try {
      const { firstName, email, opportunityTitle } = req.body;
      if (!firstName || !email || !opportunityTitle) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      await sendEmail({
        from: "noreply@pthfndr.org",
        to: email,
        subject: `Your application for ${opportunityTitle} — received`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #0C2A5C;">PthFndR</h1>
            <p>Hi ${firstName},</p>
            <p>Thanks for applying to <strong>${opportunityTitle}</strong>. We've received your application and will be in touch soon.</p>
            <p>Best regards,<br><strong>The PthFndR Team</strong></p>
          </div>
        `,
        replyTo: "hello@pthfndr.org",
      });
      res.json({ success: true });
    } catch (err) {
      console.warn("[API] Opportunity confirmation email failed:", (err as Error).message);
      captureException(err as Error, { endpoint: "/api/opportunities/confirm" });
      res.status(500).json({ error: "Failed to send confirmation" });
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
