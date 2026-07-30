import { ImageResponse } from "next/og";
import { BRAND_COLORS } from "@/lib/brand-colors";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/* Generated placeholder mark — replace all icons when the client
   supplies a real logo (drop favicon.ico / icon.png into app/ to override). */
export default function Icon() {
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
          borderRadius: 8,
          color: BRAND_COLORS.ink,
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        T
      </div>
    ),
    { ...size }
  );
}
