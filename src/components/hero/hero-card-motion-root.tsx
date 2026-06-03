"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { useHeroTechAnimation } from "@/hooks/use-hero-tech-animation";

type HeroCardMotionRootProps = {
  children: ReactNode;
};

export function HeroCardMotionRoot({ children }: HeroCardMotionRootProps) {
  const rootRef = useRef<HTMLElement>(null);

  useHeroTechAnimation({ rootRef });

  return (
    <aside aria-label="Resumo profissional" className="relative lg:sticky lg:top-24" ref={rootRef}>
      {children}
    </aside>
  );
}
