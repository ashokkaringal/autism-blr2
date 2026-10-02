import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { socialStories } from "@/content/site-content";
import { SocialStoryViewer } from "@/components/resources/SocialStoryViewer";
import { Link } from "@/i18n/navigation";

export function generateStaticParams() {
  return socialStories.map((story) => ({ slug: story.slug }));
}

export default async function SocialStoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const story = socialStories.find((item) => item.slug === slug);
  if (!story) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="mb-6">
        <Link href="/resources" className="font-semibold text-teal-dark underline-offset-2 hover:underline">
          ← Resources
        </Link>
      </p>
      <SocialStoryViewer title={story.title} steps={[...story.steps]} />
    </div>
  );
}
