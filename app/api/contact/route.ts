import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, phone, email, service, message, contactTime } = body;

    if (!name || !phone || !email || !service) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

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
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #555;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold; color: #333;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #555;">
                  <a href="tel:${phone.replace(/\D/g, "")}" style="color: #eea603;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold; color: #333;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #555;">
                  <a href="mailto:${email}" style="color: #eea603;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold; color: #333;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #555;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: bold; color: #333;">Best Contact Time</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #555;">${contactTime || "Any time"}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #555;">${message.replace(/\n/g, "<br>")}</td>
              </tr>` : ""}
            </table>
          </div>
          <div style="background: #082933; padding: 16px 24px; text-align: center;">
            <a href="tel:${phone.replace(/\D/g, "")}" style="background: #eea603; color: #082933; font-weight: bold; padding: 12px 28px; border-radius: 8px; text-decoration: none; display: inline-block;">
              Call ${name} Back
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
