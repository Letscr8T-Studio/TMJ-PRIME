import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// The landing page's in-page anchors (#sectors, #why-us, ...) are not
// separate URLs, so only real routes (/, /contact) are listed.
export default function sitemap(): MetadataRoute.Sitemap {
  const { url } = siteConfig.seo;

  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${url}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
