import { getTranslations, setRequestLocale } from "next-intl/server";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { siteConfig } from "@/lib/config/site";

export default async function AdmissionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("admissions");
  const tCommon = await getTranslations("common");

  const eligibilityKeys = ["autism", "adhd", "delays", "learning", "sensory"] as const;
  const workflowKeys = ["inquiry", "visit", "assessment", "iep", "enroll"] as const;
  const docKeys = ["birth", "medical", "school", "id"] as const;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl">{t("title")}</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">{t("intro")}</p>
      <p className="mt-2 text-sm text-muted">{tCommon("placeholderNotice")}</p>

      <section className="mt-10">
        <h2 className="text-2xl">{t("eligibilityTitle")}</h2>
        <p className="mt-2 text-muted">{t("ageRange")}</p>
        <p className="mt-1 text-sm text-muted">{t("eligibilityNote")}</p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {eligibilityKeys.map((key) => (
            <li key={key} className="rounded-lg border border-border bg-surface px-4 py-3">
              {t(`eligibility.${key}`)}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">{t("workflowTitle")}</h2>
        <ol className="mt-4 space-y-3">
          {workflowKeys.map((key, index) => (
            <li key={key} className="flex items-start gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                {index + 1}
              </span>
              <span className="pt-1 font-semibold text-teal-dark">{t(`workflow.${key}`)}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl">{t("docsTitle")}</h2>
          <p className="mt-2 text-sm text-muted">{t("docsNote")}</p>
          <ul className="mt-4 space-y-2">
            {docKeys.map((key) => (
              <li key={key} className="rounded-lg border border-border bg-mint/20 px-4 py-3">
                {t(`docs.${key}`)}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">{t("feesTitle")}</h2>
          <p className="mt-3 text-muted">{siteConfig.feesNotice}</p>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 md:p-8">
        <h2 className="text-2xl">{t("formTitle")}</h2>
        <div className="mt-6">
          <AdmissionForm />
        </div>
      </section>
    </div>
  );
}
