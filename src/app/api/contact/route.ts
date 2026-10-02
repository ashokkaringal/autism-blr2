import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/forms";
import { fieldsToHtml, sendFormEmail } from "@/lib/email/send";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const { website: _honeypot, ...data } = parsed.data;
    await sendFormEmail({
      subject: `Contact — ${data.subject}`,
      replyTo: data.email,
      html: fieldsToHtml("Contact form", {
        Name: data.name,
        Email: data.email,
        Phone: data.phone ?? "",
        Subject: data.subject,
        Message: data.message,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("contact API error", error);
    return NextResponse.json({ error: "Unable to send message" }, { status: 500 });
  }
}
