import { getTranslations, setRequestLocale } from "next-intl/server";
import { TrainerApplicationForm } from "@/components/forms/TrainerApplicationForm";
import { hiringRoles } from "@/content/site-content";

export default async function HiringPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("hiring");
  const tCommon = await getTranslations("common");

  const whyKeys = ["meaningful", "supportive", "training", "growth"] as const;
  const qualKeys = ["rci", "autism", "experience", "communication"] as const;
  const skillKeys = ["patience", "teaching", "sensory", "docs", "parents"] as const;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl">{t("title")}</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">{t("intro")}</p>
      <p className="mt-2 text-sm text-muted">{tCommon("placeholderNotice")}</p>

      <section className="mt-10">
        <h2 className="text-2xl">{t("whyTitle")}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {whyKeys.map((key) => (
            <li key={key} className="rounded-lg border border-border bg-surface px-4 py-3">
              {t(`why.${key}`)}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl">{t("rolesTitle")}</h2>
          <ul className="mt-4 space-y-2">
            {hiringRoles.map((role) => (
              <li key={role} className="rounded-lg border border-border bg-mint/20 px-4 py-3">
                {role}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">{t("qualTitle")}</h2>
          <p className="mt-2 text-sm text-muted">{t("qualNote")}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {qualKeys.map((key) => (
              <li key={key}>{t(`qualList.${key}`)}</li>
            ))}
          </ul>
          <h3 className="mt-8 text-xl">{t("skillsTitle")}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            {skillKeys.map((key) => (
              <li key={key}>{t(`skills.${key}`)}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 md:p-8">
        <h2 className="text-2xl">{t("formTitle")}</h2>
        <div className="mt-6">
          <TrainerApplicationForm />
        </div>
      </section>
    </div>
  );
}
