"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type UsePageRevealMotionOptions = {
  rootSelector: string;
};

export function usePageRevealMotion({ rootSelector }: UsePageRevealMotionOptions) {
  useGSAP(
    () => {
      const root =
        document.querySelector<HTMLElement>(rootSelector) ??
        document.getElementById(rootSelector.replace(/^#/, ""));

      if (!root) {
        return;
      }

      const selectFromRoot = gsap.utils.selector(root);
      const targets = selectFromRoot<HTMLElement>("[data-reveal]");

      if (targets.length === 0) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduceMotion } = context.conditions ?? {};

          if (reduceMotion) {
            gsap.set(targets, { autoAlpha: 1, clearProps: "transform" });
            return;
          }

          const pendingTargets = targets.filter((target) => {
            const rect = target.getBoundingClientRect();

            return rect.top > window.innerHeight * 0.82;
          });

          const visibleTargets = targets.filter((target) => !pendingTargets.includes(target));

          gsap.set(visibleTargets, { autoAlpha: 1, y: 0 });
          gsap.set(pendingTargets, {
            autoAlpha: 0,
            y: 18,
            willChange: "transform, opacity",
          });

          const triggers = ScrollTrigger.batch(pendingTargets, {
            interval: 0.08,
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                clearProps: "willChange",
                duration: 0.44,
                ease: "power2.out",
                overwrite: "auto",
                stagger: 0.06,
                y: 0,
              });
            },
            start: "top 86%",
          });

          return () => {
            for (const trigger of triggers) {
              trigger.kill();
            }
          };
        },
      );

      return () => {
        mm.revert();
      };
    },
    { dependencies: [rootSelector] },
  );
}
