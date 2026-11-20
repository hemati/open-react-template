import { countryFrom, normalizeSource } from "@/lib/share-link";
import { sendHbEvent } from "@/lib/hb-measure";

export const dynamic = "force-dynamic";

/** Counts a tap on "I want it on iPhone" from the share page. */
export async function POST(request: Request) {
  let src: string | undefined;
  try {
    src = (await request.json())?.src;
  } catch {
    src = undefined;
  }
  await sendHbEvent("share_ios_interest", { src: normalizeSource(src) }, countryFrom(request.headers));
  return new Response(null, { status: 204 });
}
