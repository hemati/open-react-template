import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  classify,
  countryFrom,
  formatScore,
  normalizeScore,
  normalizeSource,
  playStoreUrl,
  shareImagePath,
  sharePageUrl,
  sharePreviewText,
} from "@/lib/share-link";
import { sendHbEvent } from "@/lib/hb-measure";
import { InterestButton } from "./interest-button";

// every open is counted, so the page is rendered per request (and never cached)
export const dynamic = "force-dynamic";

const SITE = "https://appcoholic.com";

type Props = { searchParams: { src?: string | string[]; score?: string | string[] } };

/** The preview card: the sender's score as a challenge when the link carries one, else an invitation. */
export function generateMetadata({ searchParams }: Props): Metadata {
  const score = normalizeScore(searchParams.score);
  const { title, description } = sharePreviewText(score);
  const image = { url: `${SITE}${shareImagePath(score)}`, width: 1200, height: 630, alt: "Honey Blast" };
  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description,
      // the card links to the address it was made from, so a tap keeps the source and the score
      url: sharePageUrl(SITE, normalizeSource(searchParams.src), score),
      siteName: "Appcoholic",
      type: "website",
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export default async function HoneyBlastShare({ searchParams }: Props) {
  const h = headers();
  const visitor = classify(h.get("user-agent"));
  const src = normalizeSource(searchParams.src);
  const score = normalizeScore(searchParams.score);
  const play = playStoreUrl(src);

  if (visitor !== "bot") await sendHbEvent(`share_link_${visitor}`, { src }, countryFrom(h));
  if (visitor === "android") redirect(play);

  return (
    <section className="relative">
      <div className="max-w-md mx-auto px-4 sm:px-6 pt-32 pb-16 md:pt-40">
        <div className="rounded-3xl bg-gray-800 p-6 sm:p-8 text-center shadow-xl">
          {visitor === "ios" ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/honeyblast/icon-512.png"
                alt="Honey Blast"
                width={112}
                height={112}
                className="mx-auto mb-6 rounded-3xl"
              />
              <h1 className="h3 mb-3 text-gray-100">Honey Blast is on Android for now</h1>
              <p className="mb-8 text-gray-400">
                A friend sent you Honey Blast, a relaxing block puzzle. There is no iPhone version yet. Tell us you
                want one and we will count you in.
              </p>
              <InterestButton src={src} />
              <p className="mt-6 text-sm text-gray-500">
                On Android?{" "}
                <a className="text-purple-400 hover:text-purple-300 underline" href={play}>
                  Get it on Google Play
                </a>
              </p>
            </>
          ) : (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/honeyblast/feature-graphic.jpg"
                alt="Honey Blast"
                width={1024}
                height={500}
                className="mx-auto mb-6 w-full rounded-2xl"
              />
              <h1 className="h3 mb-3 text-gray-100">Honey Blast</h1>
              <p className="mb-8 text-gray-400">
                {score === null
                  ? "A friend sent you Honey Blast, a relaxing block puzzle. Can you beat their score?"
                  : `A friend scored ${formatScore(score)} points in Honey Blast, a relaxing block puzzle. Can you beat that?`}
              </p>
              <a
                className="btn w-full rounded-full bg-purple-600 py-3 text-white hover:bg-purple-700"
                href={play}
              >
                Get it on Google Play
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
