import { ImageResponse } from "next/og";
import { ICON_DATA_URI, ROBOTO_BLACK, ROBOTO_BOLD } from "@/lib/hb-share-assets";
import { formatScore, normalizeScore } from "@/lib/share-link";

/* ─── Honey Blast share preview: the picture a messenger shows under a shared link ─────────
   /honeyblast/s/og/12345 shows the sender's score as a challenge; /honeyblast/s/og/0 an invitation. */

export const runtime = "nodejs";

const W = 1200;
const H = 630;

// the game's Honey theme: board browns, cream accent, bevelled tiles (top colour, darker lip)
const BROWN = "#402010";
const BROWN_MID = "#7A4122";
const TILES = [
  { top: "#FF7466", lip: "#9E2A24", x: -28, y: 470, r: -12 },
  { top: "#3FD4C2", lip: "#0E6F63", x: 560, y: -36, r: 8 },
  { top: "#A889FF", lip: "#4B329E", x: 1110, y: 520, r: 14 },
  { top: "#9BDA5C", lip: "#3F7D1C", x: 640, y: 560, r: -6 },
];

function Tile({ top, lip, x, y, r }: (typeof TILES)[number]) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 96,
        height: 96,
        borderRadius: 20,
        background: top,
        borderBottom: `12px solid ${lip}`,
        opacity: 0.55,
        transform: `rotate(${r}deg)`,
      }}
    />
  );
}

function Card({ score }: { score: number | null }) {
  const text = score === null ? null : formatScore(score);
  const size = text === null ? 0 : text.length <= 5 ? 190 : text.length <= 7 ? 160 : 130;
  // flat fills only: a gradient doubles the PNG, and WhatsApp drops preview images above ~300 KB
  const lines =
    text === null
      ? [
          <div key="a" style={{ display: "flex", fontSize: 104, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.08, textShadow: `0 6px 0 ${BROWN_MID}` }}>
            Play Honey Blast
          </div>,
          <div key="b" style={{ display: "flex", fontSize: 104, fontWeight: 900, color: BROWN, lineHeight: 1.08 }}>
            with me!
          </div>,
        ]
      : [
          <div key="a" style={{ display: "flex", fontSize: 40, fontWeight: 700, color: BROWN, letterSpacing: 6 }}>
            MY BEST SCORE
          </div>,
          <div
            key="b"
            style={{ display: "flex", fontSize: size, fontWeight: 900, color: "#FFFFFF", lineHeight: 1, marginTop: 10, textShadow: `0 8px 0 ${BROWN_MID}` }}
          >
            {text}
          </div>,
          <div key="c" style={{ display: "flex", fontSize: 76, fontWeight: 900, color: BROWN, marginTop: 30 }}>
            Can you beat it?
          </div>,
        ];
  return (
    <div style={{ width: W, height: H, display: "flex", position: "relative", fontFamily: "Roboto", background: "#F4A13A" }}>
      <div style={{ position: "absolute", left: -160, top: -220, width: 980, height: 980, borderRadius: 490, background: "#F8B54C" }} />
      {TILES.map((t, i) => (
        <Tile key={i} {...t} />
      ))}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 740, paddingLeft: 80 }}>{lines}</div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: 460 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ICON_DATA_URI}
          width={250}
          height={250}
          style={{ borderRadius: 56, border: `6px solid #FFE9A0`, transform: "rotate(5deg)" }}
          alt=""
        />
        <div style={{ display: "flex", fontSize: 54, fontWeight: 900, color: "#FFFFFF", marginTop: 40, textShadow: `0 4px 0 ${BROWN_MID}` }}>
          Honey Blast
        </div>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: BROWN, marginTop: 6 }}>Free block puzzle</div>
      </div>
    </div>
  );
}

export async function GET(_request: Request, { params }: { params: { score: string } }) {
  return new ImageResponse(<Card score={normalizeScore(params.score)} />, {
    width: W,
    height: H,
    fonts: [
      { name: "Roboto", data: ROBOTO_BLACK, weight: 900, style: "normal" },
      { name: "Roboto", data: ROBOTO_BOLD, weight: 700, style: "normal" },
    ],
    // one picture per address, never changes: messengers and CloudFront may keep it
    headers: { "Cache-Control": "public, max-age=31536000, immutable" },
  });
}
