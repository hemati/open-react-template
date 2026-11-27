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

/** The sender's score from the link (?score=12345): whole points, up to 9 digits; anything else counts as none. */
export function normalizeScore(score: string | string[] | null | undefined): number | null {
  const s = Array.isArray(score) ? score[0] : score;
  if (!s || !/^\d{1,9}$/.test(s)) return null;
  const n = Number(s);
  return n > 0 ? n : null;
}

/** 12345 → "12,345" (the preview is in English). */
export function formatScore(score: number): string {
  return String(score).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/** Title and text of the preview card a messenger shows under the link. */
export function sharePreviewText(score: number | null): { title: string; description: string } {
  return {
    title: score === null ? "Play Honey Blast with me!" : `Can you beat my ${formatScore(score)} points?`,
    description: "Honey Blast – a relaxing block puzzle. Free on Android.",
  };
}

/** The share page's address with what it was opened with, so the preview card links back to the same page. */
export function sharePageUrl(site: string, src: ShareSource, score: number | null): string {
  const q = new URLSearchParams({ src });
  if (score !== null) q.set("score", String(score));
  return `${site}/honeyblast/s?${q}`;
}

/** The preview image: the score sits in the path, so the address alone decides the picture and caches safely. */
export function shareImagePath(score: number | null): string {
  return `/honeyblast/s/og/${score ?? 0}`;
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
