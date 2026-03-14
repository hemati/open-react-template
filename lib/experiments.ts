"use client";

import { useEffect, useRef } from "react";
import { trackEvent, setExperimentUserProperty } from "@/lib/analytics";

/* ─── Experiment Registry ──────────────────────────────────────── */
export const EXPERIMENTS = {
  hero_cta_v1: {
    id: "hero_cta_v1",
    description: "Test alternative hero CTA text",
    variants: { A: "control", B: "treatment" } as const,
    startDate: "2026-03-14",
  },
} as const;

export type ExperimentId = keyof typeof EXPERIMENTS;

/* ─── Read variant from cookie ─────────────────────────────────── */
export function getVariantFromCookie(): "A" | "B" | null {
  if (typeof document === "undefined") return null;
  const cookie = document.cookie
    .split("; ")
    .find((c) => c.startsWith("x-experiment="));
  const value = cookie?.split("=")[1];
  return value === "A" || value === "B" ? value : null;
}

/* ─── Hook: returns variant + tracks exposure once ─────────────── */
export function useExperiment(experimentId: ExperimentId): "A" | "B" {
  const variant = getVariantFromCookie() ?? "A";
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;

    // Track exposure event in GA4
    trackEvent({
      action: "experiment_exposure",
      category: "experiments",
      label: experimentId,
      experiment_variant: variant,
    });

    // Set user property for GA4 segmentation
    setExperimentUserProperty(experimentId, variant);
  }, [experimentId, variant]);

  return variant;
}
