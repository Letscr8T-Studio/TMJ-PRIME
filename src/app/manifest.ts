import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { BRAND_COLORS } from "@/lib/brand-colors";

export default function manifest(): MetadataRoute.Manifest {
  const { business } = siteConfig;

  return {
    name: business.name,
    short_name: business.name,
    description: business.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: BRAND_COLORS.ink,
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
