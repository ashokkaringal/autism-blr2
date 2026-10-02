import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/config/site";
import { CTAButton } from "@/components/ui/CTAButton";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const tCommon = await getTranslations("common");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl">{t("title")}</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">{t("intro")}</p>
      <p className="mt-2 text-sm text-muted">{tCommon("placeholderNotice")}</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <section>
          <h2 className="text-2xl">{tCommon("details")}</h2>
          <ul className="mt-4 space-y-3 text-muted">
            <li>
              <strong className="text-teal-dark">{tCommon("address")}:</strong>{" "}
              {siteConfig.location.fullAddress}
            </li>
            <li>
              <strong className="text-teal-dark">{tCommon("phone")}:</strong>{" "}
              {siteConfig.contact.phone}
            </li>
            <li>
              <strong className="text-teal-dark">{tCommon("whatsapp")}:</strong>{" "}
              {siteConfig.contact.whatsapp}
            </li>
            <li>
              <strong className="text-teal-dark">{tCommon("email")}:</strong>{" "}
              {siteConfig.contact.email}
            </li>
            <li>
              <strong className="text-teal-dark">{tCommon("visitingHours")}:</strong>{" "}
              {siteConfig.contact.visitingHours}
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted">{siteConfig.whatsappSupportNote}</p>
          <div className="mt-6">
            <CTAButton href={siteConfig.urls.whatsappChat} variant="secondary">
              {t("whatsappCta")}
            </CTAButton>
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-mint/20">
            <div
              className="flex min-h-56 items-center justify-center p-6 text-center text-muted"
              role="img"
              aria-label={t("mapNote")}
            >
              {t("mapNote")}
              <br />
              {siteConfig.location.fullAddress}
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6 md:p-8">
          <h2 className="text-2xl">{t("formTitle")}</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
