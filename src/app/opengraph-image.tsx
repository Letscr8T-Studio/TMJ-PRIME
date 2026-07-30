import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { BRAND_COLORS } from "@/lib/brand-colors";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.seo.ogImageAlt;

export default function Image() {
  const { business, seo } = siteConfig;
  const urlWithoutProtocol = seo.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: BRAND_COLORS.ink,
          padding: "56px 72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 16,
            display: "flex",
            background: BRAND_COLORS.brand500,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 14,
            background: BRAND_COLORS.brand500,
            color: BRAND_COLORS.ink,
            fontSize: 22,
            fontWeight: 800,
          }}
        >
          TMJ
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", color: "#FFFFFF", fontSize: 72, fontWeight: 800 }}>
            {business.name}
          </div>
          <div
            style={{
              display: "flex",
              color: BRAND_COLORS.brand400,
              fontSize: 34,
              fontWeight: 700,
              marginTop: 14,
            }}
          >
            {business.slogan}
          </div>
          <div
            style={{
              display: "flex",
              color: "rgba(255,255,255,0.8)",
              fontSize: 28,
              marginTop: 22,
              maxWidth: 900,
            }}
          >
            Hygiene, toiletry & janitorial supplies for UK care homes, hotels & commercial
            clients.
          </div>
        </div>

        <div style={{ display: "flex", color: "rgba(255,255,255,0.6)", fontSize: 22 }}>
          {urlWithoutProtocol}
        </div>
      </div>
    ),
    { ...size }
  );
}
