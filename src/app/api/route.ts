import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      message,
    } = body;

    await resend.emails.send({
      from:
        "PARNIK Website <noreply@parnikintl.com>",

      to:
        "contact@parnikintl.com",

      replyTo: email,

      subject:
        `New Inquiry from ${name}`,

      html: `
        <h2>New Inquiry</h2>

        <hr>

        <p>
          <strong>Name:</strong>
          ${name}
        </p>

        <p>
          <strong>Email:</strong>
          ${email}
        </p>

        <p>
          <strong>Company:</strong>
          ${company || "-"}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <p>
          ${message}
        </p>

        <hr>

        <p>
          Sent from
          parnikintl.com
        </p>
      `,
    });

    return Response.json({
      success: true,
      message:
        "Inquiry submitted successfully",
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      {
        success: false,
        message:
          "Failed to send inquiry",
      },
      {
        status: 500,
      }
    );
  }
}