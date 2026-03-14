"use client";

import { useEffect } from "react";
import { setConsentDefaults, initGA } from "@/lib/analytics";

let initialized = false;

export function AnalyticsProvider() {
  useEffect(() => {
    if (initialized) return;
    initialized = true;

    // Set consent defaults and load gtag.js
    setConsentDefaults();

    // If user already consented in a previous session, grant immediately
    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("appcoholic-cookie-consent="));
    if (cookie?.split("=")[1] === "true") {
      initGA();
    }
  }, []);

  return null;
}
