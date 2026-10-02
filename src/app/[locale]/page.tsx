import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTAButton } from "@/components/ui/CTAButton";
import { programs, siteImages } from "@/content/site-content";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/config/site";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tPrograms = await getTranslations("programs");
  const tCommon = await getTranslations("common");
  const tTestimonials = await getTranslations("testimonials");

  const highlightKeys = [
    "classrooms",
    "therapists",
    "iep",
    "therapies",
    "parent",
    "safe",
  ] as const;
  const whyKeys = ["calm", "local", "evidence", "partnership", "progress"] as const;
  const testimonialIds = ["1", "2"] as const;

  return (
    <div>
      <section className="relative isolate min-h-[88vh] overflow-hidden border-b border-border">
        <Image
          src={siteImages.hero.src}
          alt={siteImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-teal-dark/88 via-teal-dark/70 to-teal-dark/35"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
          <p className="animate-fade-up font-serif text-3xl font-bold text-on-media sm:text-4xl md:text-5xl">
            {siteConfig.name}
          </p>
          <h1 className="animate-fade-up-delay mt-5 max-w-2xl text-3xl text-on-media sm:text-4xl md:text-5xl">
            {t("heroTitle")}
          </h1>
          <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-lg text-on-media opacity-90 sm:text-xl">
            {t("heroSupport")}
          </p>
          <div className="animate-fade-up-delay-2 mt-9 flex flex-wrap gap-3">
            <CTAButton
              href="/admissions"
              className="!bg-white !text-teal-dark hover:!bg-mint border-white"
            >
              {t("ctaAdmissions")}
            </CTAButton>
            <CTAButton
              href="/programs"
              variant="secondary"
              className="!bg-transparent !text-white border-white/70 hover:!bg-white/15"
            >
              {t("ctaPrograms")}
            </CTAButton>
            <CTAButton
              href="/therapies"
              variant="ghost"
              className="!text-white hover:!bg-white/10"
            >
              {t("ctaTherapies")}
            </CTAButton>
            <CTAButton
              href="/contact"
              variant="ghost"
              className="!text-white hover:!bg-white/10"
            >
              {t("ctaContact")}
            </CTAButton>
          </div>
          <p className="mt-8 max-w-xl text-xs text-white/70">{t("aiImageNote")}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl sm:text-4xl">{t("welcomeTitle")}</h2>
          <p className="mt-5 text-lg text-muted">{t("welcomeBody")}</p>
          <p className="mt-4 text-sm text-muted">{tCommon("placeholderNotice")}</p>
          <div className="mt-8">
            <CTAButton href="/about">{tCommon("learnMore")}</CTAButton>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm">
          <Image
            src={siteImages.welcome.src}
            alt={siteImages.welcome.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y border-border bg-surface/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl sm:text-4xl">{t("highlightsTitle")}</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlightKeys.map((key) => (
              <li
                key={key}
                className="border-l-4 border-teal bg-sandalwood/70 px-5 py-5 text-lg font-semibold text-teal-dark"
              >
                {t(`highlights.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl">{t("programsTitle")}</h2>
          <Link
            href="/programs"
            className="font-semibold text-teal-dark underline-offset-2 hover:underline"
          >
            {tCommon("learnMore")}
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <li
              key={program.id}
              className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl">{tPrograms(program.titleKey)}</h3>
                <p className="mt-1 text-sm font-semibold text-teal">
                  {tPrograms(program.ageKey)}
                </p>
                <p className="mt-3 text-muted">{tPrograms(program.bodyKey)}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-6xl items-stretch gap-0 lg:grid-cols-2">
          <div className="relative min-h-72 lg:min-h-full">
            <Image
              src={siteImages.sensory.src}
              alt={siteImages.sensory.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="bg-mint/25 px-6 py-14 sm:px-10">
            <h2 className="text-3xl sm:text-4xl">{t("whyTitle")}</h2>
            <ul className="mt-8 space-y-4">
              {whyKeys.map((key) => (
                <li key={key} className="flex gap-3 text-lg text-teal-dark">
                  <span
                    className="mt-2 size-2.5 shrink-0 rounded-full bg-turmeric"
                    aria-hidden
                  />
                  {t(`why.${key}`)}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTAButton href="/therapies">{t("ctaTherapies")}</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl sm:text-4xl">{t("testimonialsTitle")}</h2>
        <p className="mt-2 text-sm text-muted">{t("testimonialNote")}</p>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {testimonialIds.map((id) => (
            <li key={id} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <blockquote className="text-lg text-ink">
                “{tTestimonials(`${id}.quote`)}”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-muted">
                {tTestimonials(`${id}.attribution`)}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <CTAButton href="/admissions">{tCommon("getStarted")}</CTAButton>
          <CTAButton href="/gallery" variant="secondary">
            {t("viewGallery")}
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
