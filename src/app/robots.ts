import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Only index real production (Vercel prod, or NODE_ENV=production when not
// on Vercel at all) -- preview/staging deploys stay blocked from search engines.
const isProd =
  process.env.VERCEL_ENV === "production" ||
  (process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV);

export default function robots(): MetadataRoute.Robots {
  const { url } = siteConfig.seo;

  return isProd
    ? {
        rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
        sitemap: `${url}/sitemap.xml`,
        host: url,
      }
    : { rules: [{ userAgent: "*", disallow: "/" }] };
}
