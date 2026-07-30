import type { SeoConfig } from "@/types";

export const seo: SeoConfig = {
  // CONFIRM domain with the client before launch.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.tmjprime.co.uk",
  locale: "en_GB",
  ogImageAlt:
    "TMJprime — hygiene & toiletry supplies for UK care homes, hotels and commercial clients",
};
