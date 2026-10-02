import { setRequestLocale } from "next-intl/server";
import { visualSchedules } from "@/content/site-content";
import { VisualSchedule } from "@/components/resources/VisualSchedule";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function VisualSchedulesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("resources");
  const schedule = visualSchedules[0];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <p className="mb-6">
        <Link href="/resources" className="font-semibold text-teal-dark underline-offset-2 hover:underline">
          ← Resources
        </Link>
      </p>
      <h1 className="text-4xl">{t("visualTitle")}</h1>
      <p className="mt-4 text-lg text-muted">{t("visualIntro")}</p>
      <div className="mt-8">
        <VisualSchedule title={schedule.title} steps={[...schedule.steps]} />
      </div>
    </div>
  );
}
