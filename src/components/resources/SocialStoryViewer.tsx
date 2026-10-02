"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CTAButton } from "@/components/ui/CTAButton";

type Step = { title: string; text: string };

export function SocialStoryViewer({
  title,
  steps,
}: {
  title: string;
  steps: Step[];
}) {
  const t = useTranslations("socialStory");
  const [index, setIndex] = useState(0);
  const step = steps[index];

  return (
    <article
      className="rounded-xl border border-border bg-surface p-6 md:p-8"
      data-testid="social-story-viewer"
    >
      <h1 className="text-3xl">{title}</h1>
      <p className="mt-2 text-sm font-semibold text-teal" aria-live="polite">
        {t("progress", { current: index + 1, total: steps.length })}
      </p>

      <div className="mt-8">
        <div
          className="flex min-h-40 items-center justify-center rounded-xl bg-mint/40 px-4 text-center font-serif text-xl text-teal-dark"
          aria-hidden
        >
          {step.title}
        </div>
        <h2 className="mt-6 text-2xl">{step.title}</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">{step.text}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <CTAButton
          variant="secondary"
          disabled={index === 0}
          onClick={() => setIndex((v) => Math.max(0, v - 1))}
        >
          {t("previous")}
        </CTAButton>
        <CTAButton
          disabled={index === steps.length - 1}
          onClick={() => setIndex((v) => Math.min(steps.length - 1, v + 1))}
        >
          {t("next")}
        </CTAButton>
      </div>

      <div className="mt-6 print:block">
        <details>
          <summary className="cursor-pointer font-semibold text-teal-dark">
            {t("print")}
          </summary>
          <ol className="mt-4 list-decimal space-y-3 pl-5">
            {steps.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> — {item.text}
              </li>
            ))}
          </ol>
        </details>
      </div>
    </article>
  );
}
