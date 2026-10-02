import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { programs } from "@/content/site-content";
import { CTAButton } from "@/components/ui/CTAButton";

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("programs");
  const tCommon = await getTranslations("common");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl">{t("title")}</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">{t("intro")}</p>
      <p className="mt-2 text-sm text-muted">{tCommon("placeholderNotice")}</p>

      <ul className="mt-10 grid gap-8">
        {programs.map((program, index) => (
          <li
            key={program.id}
            id={program.id}
            className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm md:grid md:grid-cols-2"
          >
            <div
              className={`relative min-h-56 md:min-h-72 ${index % 2 === 1 ? "md:order-2" : ""}`}
            >
              <Image
                src={program.image}
                alt={program.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <h2 className="text-2xl">{t(program.titleKey)}</h2>
              <p className="mt-1 font-semibold text-teal">{t(program.ageKey)}</p>
              <p className="mt-4 text-muted">{t(program.bodyKey)}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-3">
        <CTAButton href="/admissions">{tCommon("getStarted")}</CTAButton>
        <CTAButton href="/contact" variant="secondary">
          {tCommon("contactUs")}
        </CTAButton>
      </div>
    </div>
  );
}
