"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { navItems, siteConfig } from "@/lib/config/site";
import { SensorySafeToggle } from "@/components/sensory/SensorySafeToggle";
import { LanguageSelector } from "@/components/layout/LanguageSelector";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-surface/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 px-3 py-2 sm:px-4 lg:px-6">
        <Link
          href="/"
          className="shrink-0 font-serif text-base font-bold text-teal-dark sm:text-lg lg:max-w-[9.5rem] lg:truncate xl:max-w-none xl:text-xl"
          title={siteConfig.name}
        >
          {siteConfig.name}
        </Link>

        <nav aria-label={t("mainNav")} className="hidden min-w-0 justify-self-stretch lg:block">
          <ul className="flex flex-nowrap items-center justify-start gap-0.5 overflow-x-auto">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href} className="shrink-0">
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex min-h-10 items-center whitespace-nowrap rounded-lg px-2 py-1.5 text-sm font-semibold text-teal-dark hover:bg-mint/40 xl:px-2.5",
                      active && "bg-mint/50",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-1.5 justify-self-end">
          <div className="hidden sm:block">
            <LanguageSelector />
          </div>
          <SensorySafeToggle compact />
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border bg-surface lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-surface px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block min-h-11 rounded-lg px-3 py-2 font-semibold text-teal-dark hover:bg-mint/40"
                  onClick={() => setOpen(false)}
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 sm:hidden">
            <LanguageSelector />
          </div>
        </div>
      ) : null}
    </header>
  );
}
