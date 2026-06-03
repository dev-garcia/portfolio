"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP);

const iconMotions = [
  { x: -16, y: -12, rotation: -5 },
  { x: 14, y: -13, rotation: 4 },
  { x: 18, y: 8, rotation: -4 },
  { x: -17, y: 10, rotation: 5 },
  { x: 15, y: 12, rotation: 3 },
  { x: -12, y: -7, rotation: -3 },
  { x: 13, y: 15, rotation: 4 },
  { x: -14, y: 13, rotation: -4 },
];

type UseHeroTechAnimationOptions = {
  rootRef: RefObject<HTMLElement | null>;
};

export function useHeroTechAnimation({ rootRef }: UseHeroTechAnimationOptions) {
  useGSAP(
    (_context, contextSafe) => {
      const root = rootRef.current;
      const card = root?.querySelector<HTMLElement>("[data-hero-profile-card]");

      if (!root || !card) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions ?? {};
          const icons = Array.from(root.querySelectorAll<HTMLElement>("[data-hero-tech-icon]"));

          if (!isDesktop || icons.length === 0) {
            return;
          }

          const prepareIconsForMotion = () => {
            gsap.set(icons, { willChange: "transform, opacity" });
          };
          const clearIconMotionHints = () => {
            gsap.set(icons, { clearProps: "willChange" });
          };

          gsap.set(icons, {
            autoAlpha: reduceMotion ? 0.46 : 0.34,
            scale: reduceMotion ? 1 : 0.96,
            transformOrigin: "50% 50%",
            x: 0,
            y: 0,
            rotation: 0,
          });

          const timeline = gsap.timeline({
            defaults: {
              duration: reduceMotion ? 0.2 : 0.42,
              ease: "power2.out",
              overwrite: "auto",
            },
            onComplete: clearIconMotionHints,
            onReverseComplete: clearIconMotionHints,
            paused: true,
          });

          timeline.to(icons, {
            autoAlpha: reduceMotion ? 0.7 : 0.86,
            scale: reduceMotion ? 1 : 1.04,
            x: reduceMotion ? 0 : (index) => iconMotions[index]?.x ?? 0,
            y: reduceMotion ? 0 : (index) => iconMotions[index]?.y ?? 0,
            rotation: reduceMotion ? 0 : (index) => iconMotions[index]?.rotation ?? 0,
            stagger: reduceMotion ? 0 : 0.032,
          });

          const wakeIcons = contextSafe
            ? contextSafe(() => {
                prepareIconsForMotion();
                timeline.play();
              })
            : () => {
                prepareIconsForMotion();
                timeline.play();
              };
          const restIcons = contextSafe
            ? contextSafe(() => {
                prepareIconsForMotion();
                timeline.reverse();
              })
            : () => {
                prepareIconsForMotion();
                timeline.reverse();
              };
          const reverseIconsIfFocusLeavesCard = (event: FocusEvent) => {
            if (card.contains(event.relatedTarget as Node | null)) {
              return;
            }

            prepareIconsForMotion();
            timeline.reverse();
          };
          const restIconsOnFocusOut = contextSafe
            ? contextSafe(reverseIconsIfFocusLeavesCard)
            : reverseIconsIfFocusLeavesCard;

          card.addEventListener("mouseenter", wakeIcons);
          card.addEventListener("mouseleave", restIcons);
          card.addEventListener("focusin", wakeIcons);
          card.addEventListener("focusout", restIconsOnFocusOut);

          return () => {
            card.removeEventListener("mouseenter", wakeIcons);
            card.removeEventListener("mouseleave", restIcons);
            card.removeEventListener("focusin", wakeIcons);
            card.removeEventListener("focusout", restIconsOnFocusOut);
            clearIconMotionHints();
            timeline.kill();
          };
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
