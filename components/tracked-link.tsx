"use client";

import { trackCTAClick } from "@/lib/analytics";

export function TrackedLink({
  href,
  ctaName,
  children,
  className,
}: {
  href: string;
  ctaName: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackCTAClick(ctaName)}
    >
      {children}
    </a>
  );
}
