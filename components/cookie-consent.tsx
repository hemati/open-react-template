"use client";

import CookieConsent from "react-cookie-consent";
import { initGA, disableGA } from "@/lib/analytics";

export function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      cookieName="appcoholic-cookie-consent"
      expires={365}
      onAccept={() => initGA()}
      onDecline={() => disableGA()}
      enableDeclineButton
      buttonText="Accept"
      declineButtonText="Decline"
      style={{
        background: "#25282C",
        borderTop: "1px solid #33363A",
        padding: "16px 24px",
        alignItems: "center",
        fontSize: "14px",
      }}
      buttonStyle={{
        background: "#5D5DFF",
        color: "#fff",
        borderRadius: "6px",
        padding: "8px 20px",
        fontSize: "14px",
        fontWeight: 500,
      }}
      declineButtonStyle={{
        background: "transparent",
        border: "1px solid #55595F",
        color: "#9BA9B4",
        borderRadius: "6px",
        padding: "8px 20px",
        fontSize: "14px",
        fontWeight: 500,
      }}
    >
      We use cookies to analyze site usage and improve your experience.{" "}
      <a
        href="/privacy"
        className="underline text-purple-400 hover:text-purple-300"
      >
        Privacy Policy
      </a>
    </CookieConsent>
  );
}
