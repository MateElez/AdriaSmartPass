"use client";

import type { ReactNode } from "react";

/** Scroll/blokovi sekcije — bez motion biblioteke radi pouzdanog SSR/hydracije na svim preglednicima. */
export function AnimatedSection({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <section className={className}>{children}</section>;
}
