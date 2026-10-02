/**
 * Central site configuration.
 * Replace placeholder values before production launch.
 * Do not invent certifications, fees, or clinical claims.
 */

export const siteConfig = {
  name: "[School Name]",
  tagline: "Empowering Neurodiverse Children in Bangalore",
  description:
    "A calm, structured, and supportive learning environment for children with Autism, ADHD, and developmental delays.",
  founderName: "[Founder Name]",
  location: {
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    fullAddress: "[Full Bangalore Address]",
  },
  contact: {
    phone: "[Phone]",
    whatsapp: "[WhatsApp]",
    email: "[Email]",
    visitingHours: "[Visiting Hours]",
    /** Destination for all Phase 1–2 form submissions */
    formInbox: "sthaviro@gmail.com",
  },
  feesNotice:
    "Fees are shared during consultation. We do not publish fee amounts on this website.",
  whatsappSupportNote:
    "WhatsApp messages are checked during visiting hours. Please do not send medical or school records through chat.",
  urls: {
    /** Built when a real WhatsApp number is configured */
    get whatsappChat() {
      const number = siteConfig.contact.whatsapp.replace(/\D/g, "");
      if (!number || number.includes("WhatsApp")) {
        return "#whatsapp-placeholder";
      }
      return `https://wa.me/${number}`;
    },
  },
  locales: ["en", "kn", "hi"] as const,
  defaultLocale: "en" as const,
} as const;

export type SiteLocale = (typeof siteConfig.locales)[number];

export const navItems = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  { href: "/programs", labelKey: "programs" },
  { href: "/therapies", labelKey: "therapies" },
  { href: "/admissions", labelKey: "admissions" },
  { href: "/gallery", labelKey: "gallery" },
  { href: "/resources", labelKey: "resources" },
  { href: "/hiring", labelKey: "hiring" },
  { href: "/contact", labelKey: "contact" },
] as const;
