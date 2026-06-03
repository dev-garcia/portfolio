"use client";

import {
  BriefcaseBusinessIcon,
  GraduationCapIcon,
  Layers3Icon,
  type LucideIcon,
  MonitorIcon,
  SendIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type PortfolioNavItem = {
  href: string;
  icon: LucideIcon;
  label: string;
  shortLabel: string;
};

const navItems: PortfolioNavItem[] = [
  {
    href: "#product",
    icon: MonitorIcon,
    label: "Produto",
    shortLabel: "Produto",
  },
  {
    href: "#experience",
    icon: BriefcaseBusinessIcon,
    label: "Experiência",
    shortLabel: "Carreira",
  },
  {
    href: "#education",
    icon: GraduationCapIcon,
    label: "Formação",
    shortLabel: "Formação",
  },
  {
    href: "#stack",
    icon: Layers3Icon,
    label: "Stack",
    shortLabel: "Stack",
  },
  {
    href: "#contact",
    icon: SendIcon,
    label: "Conversar",
    shortLabel: "Contato",
  },
];

const ACTIVE_LINE_DESKTOP = 0.32;
const ACTIVE_LINE_MOBILE = 0.38;
const DESKTOP_ROOT_MARGIN = "-18% 0px -58% 0px";
const MOBILE_ROOT_MARGIN = "-16% 0px -42% 0px";
const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

function getIsMobileViewport() {
  return window.matchMedia(MOBILE_MEDIA_QUERY).matches;
}

function getActiveLine() {
  const activeLineRatio = getIsMobileViewport() ? ACTIVE_LINE_MOBILE : ACTIVE_LINE_DESKTOP;

  return window.innerHeight * activeLineRatio;
}

function getObserverRootMargin() {
  return getIsMobileViewport() ? MOBILE_ROOT_MARGIN : DESKTOP_ROOT_MARGIN;
}

function getClosestTargetToActiveLine(targets: Element[]) {
  const activeLine = getActiveLine();
  let closestTarget: Element | undefined;
  let closestDistance = Number.POSITIVE_INFINITY;

  for (const target of targets) {
    const rect = target.getBoundingClientRect();
    const targetContainsActiveLine = rect.top <= activeLine && rect.bottom >= activeLine;
    const distance = targetContainsActiveLine ? 0 : Math.abs(rect.top - activeLine);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestTarget = target;
    }
  }

  return closestTarget;
}

export function PortfolioNav() {
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? "#product");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const nextIsScrolled = window.scrollY > 16;

      setIsScrolled((currentIsScrolled) =>
        currentIsScrolled === nextIsScrolled ? currentIsScrolled : nextIsScrolled,
      );
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const targets = navItems
      .map((item) => document.querySelector(item.href))
      .filter((target): target is Element => Boolean(target));

    if (targets.length === 0) {
      return;
    }

    const intersectingTargets = new Set<Element>();
    let animationFrame = 0;
    let observer: IntersectionObserver | undefined;

    const updateActiveTarget = (candidates: Element[]) => {
      const activeTarget = getClosestTargetToActiveLine(candidates);

      if (activeTarget?.id) {
        setActiveHref((currentHref) => {
          const nextHref = `#${activeTarget.id}`;

          return currentHref === nextHref ? currentHref : nextHref;
        });
      }
    };

    const queueActiveTargetUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const candidates = intersectingTargets.size > 0 ? Array.from(intersectingTargets) : targets;

        updateActiveTarget(candidates);
      });
    };

    const createObserver = () => {
      observer?.disconnect();
      intersectingTargets.clear();

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              intersectingTargets.add(entry.target);
            } else {
              intersectingTargets.delete(entry.target);
            }
          }

          const candidates =
            intersectingTargets.size > 0 ? Array.from(intersectingTargets) : targets;

          updateActiveTarget(candidates);
        },
        {
          rootMargin: getObserverRootMargin(),
          threshold: [0, 0.05, 0.15],
        },
      );

      targets.forEach((target) => {
        observer?.observe(target);
      });

      queueActiveTargetUpdate();
    };

    const handleViewportChange = () => {
      createObserver();
    };

    createObserver();
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("orientationchange", handleViewportChange);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer?.disconnect();
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("orientationchange", handleViewportChange);
    };
  }, []);

  const handleNavItemClick = (href: string) => {
    setActiveHref(href);
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b border-transparent px-4 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 sm:px-6 lg:px-8",
          isScrolled
            ? "bg-background/90 shadow-sm backdrop-blur-xl"
            : "bg-background/60 backdrop-blur-md",
        )}
      >
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4"
        >
          <a
            className="inline-flex min-w-0 items-center gap-2.5 rounded-full text-sm font-semibold tracking-tight text-foreground outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/30"
            href="#hero"
          >
            <span className="size-2.5 shrink-0 rounded-full bg-primary shadow-[0_0_0_5px_color-mix(in_oklch,var(--primary),transparent_84%)]" />
            <span className="truncate">Cristian Garcia Maia</span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-border/80 bg-card/70 p-1 shadow-sm backdrop-blur-xl md:flex">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              const isContact = item.href === "#contact";

              return (
                <a
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-[background-color,color,box-shadow] duration-200 after:absolute after:inset-x-4 after:-bottom-1 after:h-0.5 after:scale-x-0 after:rounded-full after:bg-primary after:opacity-0 after:transition-transform hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30",
                    isActive &&
                      "bg-background text-foreground shadow-sm ring-1 ring-border/80 after:scale-x-100 after:opacity-100",
                    isContact && "bg-primary text-primary-foreground hover:text-primary-foreground",
                    isContact &&
                      isActive &&
                      "shadow-sm ring-2 ring-primary/30 after:bg-primary-foreground",
                  )}
                  href={item.href}
                  key={item.href}
                  onClick={() => handleNavItemClick(item.href)}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="md:hidden" aria-hidden="true" />
        </nav>
      </header>

      <nav
        aria-label="Navegação por abas"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/90 px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_36px_color-mix(in_oklch,var(--foreground),transparent_92%)] backdrop-blur-2xl md:hidden"
      >
        <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeHref === item.href;

            return (
              <a
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex min-h-12 flex-col items-center justify-center gap-1 rounded-2xl px-1 text-[0.68rem] font-medium text-muted-foreground transition-[background-color,color,box-shadow] duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30",
                  isActive && "bg-card text-foreground shadow-sm ring-1 ring-border/80",
                )}
                href={item.href}
                key={item.href}
                onClick={() => handleNavItemClick(item.href)}
              >
                <Icon
                  aria-hidden="true"
                  className={cn("transition-colors", isActive && "text-foreground")}
                />
                <span className={cn("max-w-full truncate", isActive && "font-semibold")}>
                  {item.shortLabel}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
