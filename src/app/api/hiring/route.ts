import { NextResponse } from "next/server";
import {
  hiringSchema,
  RESUME_MAX_BYTES,
  RESUME_TYPES,
} from "@/lib/validations/forms";
import { fieldsToHtml, sendFormEmail } from "@/lib/email/send";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const raw = Object.fromEntries(
      [...formData.entries()].filter(([, value]) => typeof value === "string"),
    );
    const parsed = hiringSchema.safeParse(raw);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const resume = formData.get("resume");
    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json({ error: "Resume is required" }, { status: 400 });
    }

    if (!RESUME_TYPES.includes(resume.type)) {
      return NextResponse.json({ error: "Invalid resume type" }, { status: 400 });
    }

    if (resume.size > RESUME_MAX_BYTES) {
      return NextResponse.json({ error: "Resume too large" }, { status: 400 });
    }

    const safeName = resume.name.replace(/[^\w.\-]+/g, "_").slice(0, 100);
    const buffer = Buffer.from(await resume.arrayBuffer());
    const { website: _honeypot, ...data } = parsed.data;

    await sendFormEmail({
      subject: `Trainer application — ${data.name} (${data.role})`,
      replyTo: data.email,
      html: fieldsToHtml("Trainer application", {
        Name: data.name,
        Email: data.email,
        Phone: data.phone,
        Role: data.role,
        Education: data.education,
        Experience: data.experience,
        Certifications: data.certifications ?? "",
        Availability: data.availability,
        Message: data.message ?? "",
      }),
      attachments: [{ filename: safeName || "resume.pdf", content: buffer }],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("hiring API error", error);
    return NextResponse.json({ error: "Unable to send application" }, { status: 500 });
  }
}
