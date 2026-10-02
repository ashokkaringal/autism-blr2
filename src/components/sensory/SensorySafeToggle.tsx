"use client";

import { useTranslations } from "next-intl";
import { Eye, EyeOff } from "lucide-react";
import { useSensorySafe } from "./SensorySafeProvider";
import { cn } from "@/lib/utils";

export function SensorySafeToggle({ className }: { className?: string }) {
  const t = useTranslations("sensory");
  const { enabled, toggle } = useSensorySafe();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={t("toggle")}
      title={t("description")}
      data-testid="sensory-safe-toggle"
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-semibold text-teal-dark transition hover:bg-mint/40",
        enabled && "bg-mint/50 border-teal",
        className,
      )}
    >
      {enabled ? <EyeOff className="size-4" aria-hidden /> : <Eye className="size-4" aria-hidden />}
      <span>{t("label")}</span>
      <span className="sr-only">{enabled ? t("on") : t("off")}</span>
    </button>
  );
}
