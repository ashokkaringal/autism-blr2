import { NextResponse } from "next/server";
import { admissionSchema } from "@/lib/validations/forms";
import { fieldsToHtml, sendFormEmail } from "@/lib/email/send";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = admissionSchema.safeParse(body);

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
      subject: `Admission inquiry — ${data.childName}`,
      replyTo: data.email,
      html: fieldsToHtml("Admission inquiry", {
        "Parent / guardian": data.parentName,
        Email: data.email,
        Phone: data.phone,
        "Child name": data.childName,
        "Child DOB": data.childDob,
        Program: data.program,
        "Preferred contact": data.contactMethod,
        Message: data.message ?? "",
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("admissions API error", error);
    return NextResponse.json({ error: "Unable to send inquiry" }, { status: 500 });
  }
}
