import { setConsentDefaults, initGA } from "@/lib/analytics";

// Consent Mode v2 defaults MUST load before anything else
setConsentDefaults();

// If user already gave consent in a previous session, init GA immediately
if (typeof document !== "undefined") {
  const cookie = document.cookie
    .split("; ")
    .find((c) => c.startsWith("appcoholic-cookie-consent="));
  if (cookie?.split("=")[1] === "true") {
    initGA();
  }
}
