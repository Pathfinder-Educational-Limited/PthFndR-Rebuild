import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import 'dotenv/config';

// Lazy initialize SDKs
let resendClient: Resend | null = null;
function getResend() {
  if (!resendClient) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY environment variable is required");
    }
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

let supabaseClient: any = null;
function getSupabase() {
  if (!supabaseClient) {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables are required");
    }
    supabaseClient = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  }
  return supabaseClient;
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API Route for the role-based contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const { role, name, email, message, organisation, interest_in } = req.body;

      // Ensure fields are provided
      if (!role || !name || !email) {
        return res.status(400).json({ error: "Missing required fields." });
      }

      // Try to save to Supabase (if configured)
      try {
        const supabase = getSupabase();
        await supabase.from("contacts").insert([{ 
          name, 
          email, 
          role, 
          organisation, 
          source: 'website-contact-form',
          interest_in,
          message // We still save the message if the DB accepts it
        }]);
      } catch (err: any) {
        console.warn("Supabase skipped or failed:", err.message);
      }

      // Try to send email with Resend (if configured)
      try {
        const resend = getResend();

        // 1. Send notification to PthFndR team
        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: "hello@pthfndr.org", // send to PthFndR
          subject: `New Contact Submission: ${name}`,
          html: `
          <h2>New Contact Submission from ${role.replace('_', ' ')}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${organisation ? `<p><strong>Organisation:</strong> ${organisation}</p>` : ''}
          ${interest_in ? `<p><strong>Interest in:</strong> ${interest_in}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          `,
        });

        // 2. Send personalized confirmation to user based on role
        let userSubject = `Thanks for reaching out to PthFndR!`;
        let userHtml = `<p>Hi ${name},</p><p>We received your message and will be in touch soon.</p><p>Best,<br>The PthFndR Team</p>`;

        if (role === 'young_person') {
          userSubject = "Here's your Find Your Path link";
          userHtml = `<p>Hi ${name},</p><p>Thanks for your interest. Here's your link to the Find Your Path assessment: <a href="https://pthfndr.org/methodology/diagnostic">Start Assessment</a>.</p><p>Best,<br>The PthFndR Team</p>`;
        } else if (role === 'educator') {
          userSubject = "Here's the Capability Statement";
          userHtml = `<p>Hi ${name},</p><p>Thanks for reaching out. Please find our Capability Statement attached (or linked here). We will be in touch shortly to discuss how we can support your students.</p><p>Best,<br>The PthFndR Team</p>`;
        } else if (role === 'institution' || role === 'employer') {
          userSubject = "Let's schedule a call";
          userHtml = `<p>Hi ${name},</p><p>Thank you for your interest in partnering with PthFndR. Let's schedule a call to discuss how our solutions can meet your needs.</p><p>Best,<br>The PthFndR Team</p>`;
        }

        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: email,
          subject: userSubject,
          html: userHtml,
        });

      } catch (err: any) {
        console.warn("Resend skipped or failed:", err.message);
      }

      // Return success even if API keys are missing to allow the frontend to simulate success
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
