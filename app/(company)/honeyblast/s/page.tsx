import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { classify, countryFrom, normalizeSource, playStoreUrl } from "@/lib/share-link";
import { sendHbEvent } from "@/lib/hb-measure";
import { InterestButton } from "./interest-button";

// every open is counted, so the page is rendered per request (and never cached)
export const dynamic = "force-dynamic";

const SITE = "https://appcoholic.com";
const IMAGE = `${SITE}/images/honeyblast/feature-graphic.jpg`;
const TITLE = "Honey Blast – Block Puzzle";
const DESCRIPTION = "Can you beat my score? Play Honey Blast, a relaxing block puzzle.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/honeyblast/s`,
    siteName: "Appcoholic",
    type: "website",
    images: [{ url: IMAGE, width: 1024, height: 500, alt: "Honey Blast" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [IMAGE] },
};

type Props = { searchParams: { src?: string | string[] } };

export default async function HoneyBlastShare({ searchParams }: Props) {
  const h = headers();
  const visitor = classify(h.get("user-agent"));
  const src = normalizeSource(searchParams.src);
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
                A friend sent you Honey Blast, a relaxing block puzzle. Can you beat their score?
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
