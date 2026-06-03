"use client";

import { usePageRevealMotion } from "@/hooks/use-page-reveal-motion";

type PageRevealMotionProps = {
  rootSelector: string;
};

export function PageRevealMotion({ rootSelector }: PageRevealMotionProps) {
  usePageRevealMotion({ rootSelector });

  return null;
}
