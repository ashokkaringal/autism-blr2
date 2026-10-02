import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/config/site";

export default function RootPage() {
  redirect(`/${siteConfig.defaultLocale}`);
}
