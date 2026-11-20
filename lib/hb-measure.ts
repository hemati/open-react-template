/* ─── Honey Blast: count share-link events in the game's Google Analytics property ─────────
   Server side only (Measurement Protocol): no cookies, no IP address, no user agent and no
   device identifier leave our server; every event gets a random client id of its own.
   HB_GA_MEASUREMENT_ID / HB_GA_API_SECRET are passed in at build time (next.config.js). */

const ENDPOINT = "https://www.google-analytics.com/mp/collect";
const TIMEOUT_MS = 1500;

export async function sendHbEvent(
  name: string,
  params: Record<string, string>,
  countryId?: string,
): Promise<void> {
  const id = process.env.HB_GA_MEASUREMENT_ID;
  const secret = process.env.HB_GA_API_SECRET;
  if (!id || !secret) {
    console.warn("hb-measure: HB_GA_MEASUREMENT_ID / HB_GA_API_SECRET not configured");
    return;
  }
  const body = {
    client_id: `${Math.floor(Math.random() * 2_147_483_647)}.${Math.floor(Date.now() / 1000)}`,
    non_personalized_ads: true,
    ...(countryId ? { user_location: { country_id: countryId } } : {}),
    // session_id and engagement time let the event show in the Realtime report too
    events: [{ name, params: { ...params, session_id: String(Date.now()), engagement_time_msec: 1 } }],
  };
  const abort = new AbortController();
  const timer = setTimeout(() => abort.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(
      `${ENDPOINT}?measurement_id=${encodeURIComponent(id)}&api_secret=${encodeURIComponent(secret)}`,
      { method: "POST", body: JSON.stringify(body), signal: abort.signal, cache: "no-store" },
    );
    if (!res.ok) console.warn(`hb-measure: ${name} answered HTTP ${res.status}`);
    else console.log(`hb-measure: ${name} sent (${res.status}, country ${countryId ?? "-"})`);
  } catch (e) {
    // counting must never break the page; the log says why it failed
    console.warn(`hb-measure: ${name} not sent (${e instanceof Error ? e.name : "error"})`);
  } finally {
    clearTimeout(timer);
  }
}
