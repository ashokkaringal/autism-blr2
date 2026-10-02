"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSelector() {
  const t = useTranslations("language");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <label className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-teal-dark">
      <span className="sr-only">{t("label")}</span>
      <select
        data-testid="language-selector"
        className="min-h-11 rounded-lg border border-border bg-surface px-3 py-2"
        value={locale}
        aria-label={t("label")}
        onChange={(e) => {
          router.replace(pathname, { locale: e.target.value });
        }}
      >
        {routing.locales.map((code) => (
          <option key={code} value={code}>
            {t(code)}
          </option>
        ))}
      </select>
    </label>
  );
}
