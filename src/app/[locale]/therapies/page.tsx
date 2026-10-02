import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowDown } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteImages } from "@/content/site-content";

export default async function TherapiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("therapies");
  const tCommon = await getTranslations("common");

  const routineKeys = [
    "warmup",
    "tasks",
    "communication",
    "movement",
    "review",
  ] as const;
  const progressKeys = ["monthly", "iep", "meetings", "goals"] as const;

  return (
    <div>
      <section className="relative isolate min-h-[40vh] overflow-hidden border-b border-border">
        <Image
          src={siteImages.speech.src}
          alt={siteImages.speech.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-teal-dark/75" aria-hidden />
        <div className="relative mx-auto flex min-h-[40vh] max-w-6xl flex-col justify-end px-4 py-12 sm:px-6">
          <h1 className="text-4xl text-on-media sm:text-5xl">{t("title")}</h1>
          <p className="mt-4 max-w-2xl text-lg text-on-media opacity-90">{t("intro")}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <section className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">{t("philosophyTitle")}</h2>
            <p className="mt-3 max-w-3xl text-muted">{t("philosophyBody")}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image
              src={siteImages.sensory.src}
              alt={siteImages.sensory.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl">{t("routineTitle")}</h2>
          <ol className="mt-6 max-w-md space-y-2">
            {routineKeys.map((key, index) => (
              <li key={key} className="flex flex-col items-center">
                <div className="w-full rounded-xl border border-border bg-surface px-5 py-4 text-center font-semibold text-teal-dark">
                  {t(`routine.${key}`)}
                </div>
                {index < routineKeys.length - 1 ? (
                  <ArrowDown className="my-2 size-5 text-teal" aria-hidden />
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl">{t("qualTitle")}</h2>
            <p className="mt-3 text-muted">{t("qualBody")}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t("progressTitle")}</h2>
            <ul className="mt-4 space-y-2">
              {progressKeys.map((key) => (
                <li key={key} className="rounded-lg border border-border bg-mint/20 px-4 py-3">
                  {t(`progress.${key}`)}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl">{t("storiesTitle")}</h2>
          <p className="mt-3 text-muted">{t("storiesBody")}</p>
        </section>

        <div className="mt-10">
          <CTAButton href="/admissions">{tCommon("bookAssessment")}</CTAButton>
        </div>
      </div>
    </div>
  );
}
