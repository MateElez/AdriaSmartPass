import type { ReactNode } from "react";

/**
 * Wrapper za blokske sekcije na landing stranici.
 * Bez Framer Motion / opacity‑0 na početku — to je na nekim preglednicima i layoutima
 * ostavljalo sekcije „praznima” dok IntersectionObserver ne okine ili tijekom hydrationa.
 */
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
