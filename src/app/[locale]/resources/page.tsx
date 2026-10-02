import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { blogPosts, socialStories, visualSchedules } from "@/content/site-content";

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("resources");

  const topicKeys = [
    "autism",
    "sensory",
    "communication",
    "parenting",
    "readiness",
    "bangalore",
  ] as const;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl">{t("title")}</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">{t("intro")}</p>

      <section className="mt-10">
        <h2 className="text-2xl">{t("topicsTitle")}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topicKeys.map((key) => (
            <li key={key} className="rounded-lg border border-border bg-surface px-4 py-3">
              {t(`topics.${key}`)}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">{t("blogTitle")}</h2>
        <p className="mt-2 text-muted">{t("blogIntro")}</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {blogPosts.map((post) => (
            <li key={post.slug} className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-xl">{post.title}</h3>
              <p className="mt-2 text-sm text-muted">{post.summary}</p>
              <Link
                href={`/resources/blog/${post.slug}`}
                className="mt-4 inline-flex min-h-11 items-center font-semibold text-teal-dark underline-offset-2 hover:underline"
              >
                {t("readArticle")}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">{t("socialTitle")}</h2>
        <p className="mt-2 text-muted">{t("socialIntro")}</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {socialStories.map((story) => (
            <li key={story.slug} className="rounded-xl border border-border bg-mint/20 p-5">
              <h3 className="text-xl">{story.title}</h3>
              <Link
                href={`/resources/social-stories/${story.slug}`}
                className="mt-4 inline-flex min-h-11 items-center font-semibold text-teal-dark underline-offset-2 hover:underline"
              >
                {t("openStory")}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">{t("visualTitle")}</h2>
        <p className="mt-2 text-muted">{t("visualIntro")}</p>
        <ul className="mt-6 space-y-3">
          {visualSchedules.map((schedule) => (
            <li key={schedule.id}>
              <Link
                href="/resources/visual-schedules"
                className="inline-flex min-h-11 items-center font-semibold text-teal-dark underline-offset-2 hover:underline"
              >
                {t("viewSchedule")}: {schedule.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
