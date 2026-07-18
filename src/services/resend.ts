import { Resend } from "resend";

let resendClient: Resend | null = null;

export function getResend(): Resend {
  if (!resendClient) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY environment variable is required");
    }
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

export interface EmailOptions {
  from: string;
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail(options: EmailOptions) {
  try {
    const resend = getResend();
    const result = await resend.emails.send({
      from: options.from,
      to: options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    });
    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error("Resend error:", error);
    throw error;
  }
}

export async function sendContactConfirmation(name: string, email: string, role: string) {
  const roleLabel = role.replace(/_/g, " ");
  let subject = "Thank you for reaching out to PthFndR!";
  let html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #0C2A5C;">PthFndR</h1>
      <p>Hi ${name},</p>
      <p>Thank you for getting in touch. We've received your message and will be in contact soon.</p>
      <p>Best regards,<br><strong>The PthFndR Team</strong></p>
    </div>
  `;

  if (role === "young_person") {
    subject = "Your Find Your Path link is ready";
    html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #0C2A5C;">PthFndR</h1>
        <p>Hi ${name},</p>
        <p>Thanks for your interest in PthFndR. Ready to discover your path?</p>
        <p>
          <a href="https://pthfndr.org/assessment"
             style="display: inline-block; padding: 12px 24px; background-color: #40D478; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
            Start Your Assessment
          </a>
        </p>
        <p>Best regards,<br><strong>The PthFndR Team</strong></p>
      </div>
    `;
  } else if (role === "educator") {
    subject = "Let's support your students – resources inside";
    html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #0C2A5C;">PthFndR</h1>
        <p>Hi ${name},</p>
        <p>Thank you for reaching out. We're excited to explore how PthFndR can support your students.</p>
        <p>Our team will be in touch soon to discuss tailored solutions for your school.</p>
        <p>In the meantime, you can explore our <a href="https://pthfndr.org/for-schools">school partnerships page</a>.</p>
        <p>Best regards,<br><strong>The PthFndR Team</strong></p>
      </div>
    `;
  } else if (role === "institution" || role === "employer") {
    subject = "Let's create opportunities together";
    html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #0C2A5C;">PthFndR</h1>
        <p>Hi ${name},</p>
        <p>Thank you for your interest in partnering with PthFndR. We're excited about the potential to work together.</p>
        <p>Our team will reach out soon to schedule a conversation about how we can create meaningful opportunities for young talent.</p>
        <p>Best regards,<br><strong>The PthFndR Team</strong></p>
      </div>
    `;
  }

  return sendEmail({
    from: "noreply@pthfndr.org",
    to: email,
    subject,
    html,
    replyTo: "hello@pthfndr.org",
  });
}

export async function sendContactNotification(
  name: string,
  email: string,
  role: string,
  message: string,
  organisation?: string,
  interestIn?: string
) {
  const roleLabel = role.replace(/_/g, " ");
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
      <h2 style="color: #0C2A5C;">New Contact Submission from ${roleLabel}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${organisation ? `<p><strong>Organisation:</strong> ${organisation}</p>` : ""}
      ${interestIn ? `<p><strong>Interest in:</strong> ${interestIn}</p>` : ""}
      <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
      <h3>Message:</h3>
      <p>${message}</p>
    </div>
  `;

  return sendEmail({
    from: "noreply@pthfndr.org",
    to: "hello@pthfndr.org",
    subject: `[${roleLabel}] New Contact: ${name}`,
    html,
    replyTo: email,
  });
}
