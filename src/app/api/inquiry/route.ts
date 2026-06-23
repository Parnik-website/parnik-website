import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();

    await resend.emails.send({
      from: "PARNIK Website <noreply@parnikintl.com>",
      to: "contact@parnikintl.com",
      subject: `New Inquiry from ${body.name}`,
      html: `<p>${body.message}</p>`,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}