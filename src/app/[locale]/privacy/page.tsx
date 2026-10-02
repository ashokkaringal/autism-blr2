import { getTranslations, setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/lib/config/site";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 prose-calm">
      <h1 className="text-4xl">{t("title")}</h1>
      <p className="mt-4 text-lg text-muted">{t("intro")}</p>
      <p className="mt-6 text-muted">{t("body")}</p>
      <p className="mt-4 text-muted">
        {t("contact").replace("[Email]", siteConfig.contact.email)}
      </p>
      <p className="mt-4 text-sm text-muted">
        Form submissions are delivered to {siteConfig.contact.formInbox}.
      </p>
    </div>
  );
}
