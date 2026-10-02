import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const paths = [
  "",
  "/about",
  "/programs",
  "/therapies",
  "/admissions",
  "/gallery",
  "/resources",
  "/resources/visual-schedules",
  "/hiring",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of siteConfig.locales) {
    for (const path of paths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.7,
      });
    }
  }

  return entries;
}
