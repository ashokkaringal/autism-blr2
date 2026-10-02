"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { galleryItems } from "@/content/site-content";

export function GalleryGrid() {
  const t = useTranslations("gallery");
  const tCommon = useTranslations("common");
  const [active, setActive] = useState<string | null>(null);
  const selected = galleryItems.find((item) => item.id === active);

  return (
    <>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className="group w-full overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-sm transition hover:shadow-md"
              onClick={() => setActive(item.id)}
              aria-haspopup="dialog"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-4 py-3">
                <p className="font-semibold text-teal-dark">
                  {t(`categories.${item.categoryKey}`)}
                </p>
                <p className="text-sm text-muted">{item.label}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {selected ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(`categories.${selected.categoryKey}`)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4"
          onClick={() => setActive(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActive(null);
          }}
        >
          <div
            className="max-w-2xl overflow-hidden rounded-2xl border border-border bg-surface shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full min-w-[min(90vw,40rem)]">
              <Image
                src={selected.image}
                alt={selected.alt}
                fill
                sizes="90vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl">{t(`categories.${selected.categoryKey}`)}</h2>
              <p className="mt-2 text-sm text-muted">{t("aiImageNote")}</p>
              <button
                type="button"
                className="mt-6 min-h-11 rounded-lg border border-border px-4 font-semibold text-teal-dark"
                onClick={() => setActive(null)}
              >
                {tCommon("close")}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
