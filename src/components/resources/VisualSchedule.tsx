import {
  DoorOpen,
  Users,
  HeartHandshake,
  Apple,
  Smile,
  Home,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

const icons: Record<string, LucideIcon> = {
  door: DoorOpen,
  users: Users,
  heart: HeartHandshake,
  apple: Apple,
  smile: Smile,
  home: Home,
};

export async function VisualSchedule({
  steps,
}: {
  title?: string;
  steps: Array<{ id: string; label: string; icon: string }>;
}) {
  const t = await getTranslations("visualSchedule");

  return (
    <section
      className="rounded-xl border border-border bg-surface p-6 md:p-8"
      data-testid="visual-schedule"
      aria-labelledby="visual-schedule-title"
    >
      <h2 id="visual-schedule-title" className="text-2xl">
        {t("title")}
      </h2>
      <p className="mt-2 text-sm text-muted">{t("note")}</p>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = icons[step.icon] ?? Home;
          const label = t(`steps.${step.id}` as "steps.arrival");
          return (
            <li
              key={step.id}
              className="flex items-center gap-3 rounded-lg border-2 border-teal/30 bg-sandalwood/50 px-4 py-4"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                {index + 1}
              </span>
              <Icon className="size-6 text-teal-dark" aria-hidden />
              <span className="font-semibold text-teal-dark">{label}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
