import { Resend } from "resend";
import { siteConfig } from "@/lib/config/site";

const to = siteConfig.contact.formInbox;

type EmailPayload = {
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: Array<{
    filename: string;
    content: Buffer;
  }>;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function fieldsToHtml(title: string, fields: Record<string, string>) {
  const rows = Object.entries(fields)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${escapeHtml(key)}</td><td style="padding:6px 12px">${escapeHtml(value || "—")}</td></tr>`,
    )
    .join("");
  return `<h2>${escapeHtml(title)}</h2><table>${rows}</table>`;
}

export async function sendFormEmail(payload: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.info("[email:dev-fallback]", {
      to,
      subject: payload.subject,
      replyTo: payload.replyTo,
      attachmentCount: payload.attachments?.length ?? 0,
      html: payload.html,
    });
    return { id: "dev-fallback", mode: "console" as const };
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  const result = await resend.emails.send({
    from,
    to,
    subject: payload.subject,
    html: payload.html,
    replyTo: payload.replyTo,
    attachments: payload.attachments?.map((file) => ({
      filename: file.filename,
      content: file.content,
    })),
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return { id: result.data?.id ?? "sent", mode: "resend" as const };
}
