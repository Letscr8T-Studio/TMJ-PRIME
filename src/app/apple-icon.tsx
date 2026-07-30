import { ImageResponse } from "next/og";
import { BRAND_COLORS } from "@/lib/brand-colors";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/* Generated placeholder mark — replace all icons when the client
   supplies a real logo (drop favicon.ico / icon.png into app/ to override).
   No border-radius here: iOS applies its own rounded-square mask to
   apple-touch-icon images, so this stays full-bleed. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND_COLORS.brand500,
          color: BRAND_COLORS.ink,
          fontSize: 96,
          fontWeight: 800,
        }}
      >
        T
      </div>
    ),
    { ...size }
  );
}
