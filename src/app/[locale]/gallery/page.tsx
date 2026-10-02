import { getTranslations, setRequestLocale } from "next-intl/server";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("gallery");
  const tCommon = await getTranslations("common");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl">{t("title")}</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">{t("intro")}</p>
      <p className="mt-2 text-sm text-muted">{tCommon("placeholderNotice")}</p>
      <GalleryGrid />
    </div>
  );
}
