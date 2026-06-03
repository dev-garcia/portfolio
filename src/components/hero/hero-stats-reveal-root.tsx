"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { useHeroStatsReveal } from "@/hooks/use-hero-stats-reveal";

type HeroStatsRevealRootProps = {
  children: ReactNode;
  className?: string;
};

export function HeroStatsRevealRoot({ children, className }: HeroStatsRevealRootProps) {
  const rootRef = useRef<HTMLDListElement>(null);

  useHeroStatsReveal({ rootRef });

  return (
    <dl className={className} ref={rootRef}>
      {children}
    </dl>
  );
}
