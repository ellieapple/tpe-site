import { Resend } from "resend";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, phone, email, service, message, contactTime } = body;

    if (!name || !phone || !email || !service) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const safeName = escapeHtml(String(name));
    const safePhone = escapeHtml(String(phone));
    const safeEmail = escapeHtml(String(email));
    const safeService = escapeHtml(String(service));
    const safeContactTime = escapeHtml(String(contactTime || "Any time"));
    const phoneDigits = String(phone).replace(/\D/g, "");

    const { error } = await resend.emails.send({
      from: "TPE Website <onboarding@resend.dev>",
      to: ["David@TPEService.net"],
      replyTo: email,
      subject: `New Estimate Request — ${service} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #082933; padding: 24px; border-bottom: 4px solid #eea603;">
            <h1 style="color: #eea603; margin: 0; font-size: 24px;">New Estimate Request</h1>
            <p style="color: #b7b6b6; margin: 4px 0 0;">Tri Peaks Electric Service — tpeservice.net</p>
          </div>
          <div style="background: #f9f9f9; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold; width: 40%; color: #333;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #555;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold; color: #333;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #555;">
                  <a href="tel:${phoneDigits}" style="color: #eea603;">${safePhone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold; color: #333;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #555;">
                  <a href="mailto:${safeEmail}" style="color: #eea603;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold; color: #333;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #555;">${safeService}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold; color: #333;">Best Contact Time</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #555;">${safeContactTime}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #555;">${escapeHtml(String(message)).replace(/\n/g, "<br>")}</td>
              </tr>` : ""}
            </table>
          </div>
          <div style="background: #082933; padding: 16px 24px; text-align: center;">
            <a href="tel:${phoneDigits}" style="background: #eea603; color: #082933; font-weight: bold; padding: 12px 28px; border-radius: 8px; text-decoration: none; display: inline-block;">
              Call ${safeName} Back
            </a>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
