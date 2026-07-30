// Mirrors the --color-brand-400/500 and --color-ink theme tokens in
// globals.css. next/og's ImageResponse (Satori), manifest.ts, and the
// viewport `themeColor` can't read Tailwind's CSS custom properties, so
// these literal hex values are centralised here once instead of being
// repeated across every generated-image route.
export const BRAND_COLORS = {
  brand500: "#FFC400",
  brand400: "#FFC81F",
  ink: "#0B0B0C",
} as const;
