"use client";

import { useState } from "react";

/** "I want it on iPhone": one vote per page view, counted on our server (no cookies, nothing stored here). */
export function InterestButton({ src }: { src: string }) {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  async function vote() {
    if (state !== "idle") return;
    setState("sending");
    try {
      await fetch("/honeyblast/s/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ src }),
      });
    } catch {
      // the thanks shows either way; a lost vote is not worth an error message
    }
    setState("done");
  }

  if (state === "done") {
    return <p className="font-medium text-green-400">Thanks! We count every vote.</p>;
  }
  return (
    <button
      type="button"
      onClick={vote}
      disabled={state === "sending"}
      className="btn w-full rounded-full bg-purple-600 py-3 text-white hover:bg-purple-700 disabled:opacity-60"
    >
      I want it on iPhone
    </button>
  );
}
