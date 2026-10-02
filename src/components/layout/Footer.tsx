import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { navItems, siteConfig } from "@/lib/config/site";

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");

  return (
    <footer className="mt-auto border-t border-border bg-teal-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-bold">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-white/90">{t("tagline")}</p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-mint">{t("quickLinks")}</h2>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/90 underline-offset-2 hover:underline"
                >
                  {tNav(item.labelKey)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="text-white/90 underline-offset-2 hover:underline">
                {tNav("privacy")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-semibold text-mint">{t("contactHeading")}</h2>
          <ul className="mt-3 space-y-2 text-white/90">
            <li>{siteConfig.location.fullAddress}</li>
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.visitingHours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 px-4 py-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} {siteConfig.name}. {t("rights")}
      </div>
    </footer>
  );
}
