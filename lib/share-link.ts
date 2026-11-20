/* ─── Honey Blast share links: who opened one, and where it goes ─────────
   The game shares https://appcoholic.com/honeyblast/s?src=<source>. The page counts the
   open by device type and sends Android phones on to Google Play. Pure functions, no I/O. */

export type Visitor = "bot" | "ios" | "android" | "desktop";

export const HB_PACKAGE = "com.appcoholic.honeyblast";

/** Link-preview crawlers (they fetch the page for the preview card) and other bots are not counted. */
const BOT =
  /whatsapp|facebookexternalhit|facebot|meta-externalagent|twitterbot|telegrambot|slackbot|discordbot|linkedinbot|skypeuripreview|googlebot|bingbot|applebot|pinterest|redditbot|vkshare|viber|snapchat|iframely|embedly|bot|crawler|spider|preview|fetch/i;

export function classify(userAgent: string | null | undefined): Visitor {
  const ua = (userAgent ?? "").trim();
  if (!ua || BOT.test(ua)) return "bot";
  if (/iPhone|iPad|iPod/.test(ua)) return "ios";
  if (/Android/.test(ua)) return "android";
  return "desktop";
}

export type ShareSource = "settings" | "best" | "other";

export function normalizeSource(src: string | string[] | null | undefined): ShareSource {
  const s = Array.isArray(src) ? src[0] : src;
  return s === "settings" || s === "best" ? s : "other";
}

/** Google Play with a referrer, so installs from shared links show up as source "share" in Analytics. */
export function playStoreUrl(src: ShareSource): string {
  const referrer = `utm_source=share&utm_medium=app_share&utm_campaign=${src}`;
  return `https://play.google.com/store/apps/details?id=${HB_PACKAGE}&referrer=${encodeURIComponent(referrer)}`;
}

/** Two-letter country code from the hosting provider's header, if it sent a valid one. */
export function countryFrom(headers: { get(name: string): string | null }): string | undefined {
  const c = (headers.get("cloudfront-viewer-country") ?? headers.get("x-vercel-ip-country") ?? "").trim().toUpperCase();
  return /^[A-Z]{2}$/.test(c) ? c : undefined;
}
