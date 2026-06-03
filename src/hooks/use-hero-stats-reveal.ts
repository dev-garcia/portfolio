"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type UseHeroStatsRevealOptions = {
  rootRef: RefObject<HTMLElement | null>;
};

export function useHeroStatsReveal({ rootRef }: UseHeroStatsRevealOptions) {
  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-hero-stat-card]"));

      if (cards.length === 0) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isMobile, reduceMotion } = context.conditions ?? {};

          if (!isMobile) {
            gsap.set(cards, { autoAlpha: 1, y: 0 });
            return;
          }

          if (reduceMotion) {
            gsap.fromTo(
              cards,
              { autoAlpha: 0 },
              {
                autoAlpha: 1,
                duration: 0.2,
                ease: "power1.out",
                stagger: 0.04,
              },
            );
            return;
          }

          gsap.set(cards, {
            autoAlpha: 0,
            willChange: "transform, opacity",
            y: 14,
          });

          ScrollTrigger.batch(cards, {
            interval: 0.08,
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                clearProps: "willChange",
                duration: 0.36,
                ease: "power2.out",
                overwrite: "auto",
                stagger: 0.06,
                y: 0,
              });
            },
            start: "top 88%",
          });
        },
        root,
      );

      return () => {
        mm.revert();
      };
    },
    { scope: rootRef },
  );
}
