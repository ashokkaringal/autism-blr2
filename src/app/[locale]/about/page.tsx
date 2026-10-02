import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { siteImages } from "@/content/site-content";
import { siteConfig } from "@/lib/config/site";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tCommon = await getTranslations("common");
  const approachKeys = ["routines", "visual", "sensory", "plans", "family"] as const;
  const teamKeys = [
    "specialEducators",
    "speech",
    "ot",
    "aba",
    "shadow",
    "parentCoaches",
  ] as const;

  return (
    <div>
      <section className="relative isolate min-h-[42vh] overflow-hidden border-b border-border">
        <Image
          src={siteImages.welcome.src}
          alt={siteImages.welcome.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-teal-dark/75" aria-hidden />
        <div className="relative mx-auto flex min-h-[42vh] max-w-6xl flex-col justify-end px-4 py-12 sm:px-6">
          <h1 className="text-4xl text-on-media sm:text-5xl">{t("title")}</h1>
          <p className="mt-4 max-w-2xl text-lg text-on-media opacity-90">{t("intro")}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 prose-calm">
        <p className="text-sm text-muted">{tCommon("placeholderNotice")}</p>

        <section className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">{t("founderTitle")}</h2>
            <p className="mt-3 text-muted">
              {t("founderBody").replace("[Founder Name]", siteConfig.founderName)}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image
              src={siteImages.outdoor.src}
              alt={siteImages.outdoor.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl">{t("missionTitle")}</h2>
            <p className="mt-3 text-muted">{t("missionBody")}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t("visionTitle")}</h2>
            <p className="mt-3 text-muted">{t("visionBody")}</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl">{t("approachTitle")}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {approachKeys.map((key) => (
              <li key={key} className="rounded-lg border border-border bg-surface px-4 py-3">
                {t(`approach.${key}`)}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl">{t("teamTitle")}</h2>
          <p className="mt-2 text-sm text-muted">{t("teamNote")}</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {teamKeys.map((key) => (
              <li key={key} className="rounded-lg border border-border bg-mint/20 px-4 py-3">
                {t(`team.${key}`)}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl">{t("contextTitle")}</h2>
          <p className="mt-3 text-muted">{t("contextBody")}</p>
        </section>
      </div>
    </div>
  );
}
