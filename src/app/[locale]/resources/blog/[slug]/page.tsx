import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { blogPosts } from "@/content/site-content";
import { Link } from "@/i18n/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 prose-calm">
      <p>
        <Link href="/resources" className="font-semibold text-teal-dark underline-offset-2 hover:underline">
          ← Resources
        </Link>
      </p>
      <h1 className="mt-6 text-4xl">{post.title}</h1>
      <p className="mt-4 text-lg text-muted">{post.summary}</p>
      <div className="mt-8 space-y-4 text-muted">
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
