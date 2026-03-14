/* ─── Google Analytics 4 · Advanced Consent Mode v2 ─────────────── */

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown> | IArguments>;
    gtag: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
const GOOGLE_ADS_CONVERSION_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID ?? "";

let gaInitialized = false;

/* ─── gtag helper (pushes Arguments object, NOT rest params) ───── */
function gtag(..._args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

/* ─── 1. Consent defaults — MUST run before gtag config ───────── */
export function setConsentDefaults() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = gtag;

  // Set denied defaults BEFORE loading the script
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });

  // Load gtag.js script
  if (!document.querySelector(`script[src*="googletagmanager.com/gtag"]`)) {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);
  }

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: true,
  });

  // Link Google Ads if configured
  if (GOOGLE_ADS_CONVERSION_ID) {
    gtag("config", GOOGLE_ADS_CONVERSION_ID);
  }
}

/* ─── 2. Grant consent (user accepted) ─────────────────────────── */
export function initGA() {
  if (typeof window === "undefined") return;

  gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });

  gaInitialized = true;
}

/* ─── 3. Deny consent explicitly (user declined) ───────────────── */
export function disableGA() {
  if (typeof window === "undefined") return;

  gtag("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  gaInitialized = false;
}

/* ─── Generic event tracker ────────────────────────────────────── */
interface TrackEventParams {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

export function trackEvent({
  action,
  category,
  label,
  value,
  ...rest
}: TrackEventParams) {
  if (!gaInitialized) return;

  gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
    ...rest,
  });
}

/* ─── Predefined conversion events ─────────────────────────────── */
export function trackSignUp(method?: string) {
  trackEvent({ action: "sign_up", category: "engagement", label: method });
}

export function trackPurchase(value: number, currency = "USD", transactionId?: string) {
  trackEvent({
    action: "purchase",
    category: "ecommerce",
    value,
    currency,
    transaction_id: transactionId,
  });
}

export function trackInstall(platform?: string) {
  trackEvent({
    action: "app_install",
    category: "engagement",
    label: platform,
  });
}

export function trackLeadGenerated(source?: string) {
  trackEvent({
    action: "generate_lead",
    category: "engagement",
    label: source,
  });
}

export function trackCTAClick(ctaName: string) {
  trackEvent({
    action: "cta_click",
    category: "engagement",
    label: ctaName,
  });
}

/* ─── Google Ads Conversion ────────────────────────────────────── */
export function trackAdsConversion(conversionLabel: string, value?: number) {
  if (!gaInitialized || !GOOGLE_ADS_CONVERSION_ID) return;

  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${conversionLabel}`,
    value,
  });
}

export function setEnhancedConversionData(email: string) {
  if (typeof window === "undefined") return;
  gtag("set", "user_data", { email });
}

/* ─── A/B Test: set user property for GA4 segmentation ─────────── */
export function setExperimentUserProperty(
  experimentId: string,
  variant: string
) {
  if (typeof window === "undefined") return;
  gtag("set", "user_properties", {
    [`experiment_${experimentId}`]: variant,
  });
}
