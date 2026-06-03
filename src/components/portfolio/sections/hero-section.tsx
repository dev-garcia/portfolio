import { DownloadIcon, SendIcon } from "lucide-react";
import { HeroCardWithTechIcons } from "@/components/hero/hero-card-with-tech-icons";
import { HeroStatsGrid } from "@/components/hero/hero-stats-grid";
import { buttonVariants } from "@/components/ui/button-variants";
import type { Profile } from "@/data/portfolio/profile";

type HeroStat = {
  label: string;
  value: string;
};

type HeroSectionProps = {
  profile: Profile;
  stats: HeroStat[];
};

export function HeroSection({ profile, stats }: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate px-4 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-32 lg:px-8"
      id="hero"
    >
      <div className="absolute inset-0 -z-10 bg-background" />
      <div className="absolute inset-x-0 top-16 -z-10 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
        <div className="flex min-w-0 flex-col items-start">
          <h1
            className="max-w-4xl text-balance font-heading text-[clamp(2.7rem,8vw,5.8rem)] leading-[0.95] tracking-normal text-foreground"
            id="hero-heading"
          >
            Construo aplicações web para uso real.
            <span className="block text-muted-foreground">Backend, integrações e produto.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-muted-foreground md:text-lg">
            Trabalho entre produto e engenharia para transformar escopo em aplicação: APIs,
            autenticação, pagamentos, dados, WebSocket e interfaces com React, Next.js, TypeScript e
            Node.js.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a className={buttonVariants({ size: "lg" })} href="#contact">
              <SendIcon data-icon="inline-start" />
              Conversar sobre projeto
            </a>
            <a className={buttonVariants({ size: "lg", variant: "outline" })} href={profile.cvHref}>
              <DownloadIcon data-icon="inline-start" />
              Baixar CV
            </a>
          </div>

          <HeroStatsGrid stats={stats} />
        </div>

        <HeroCardWithTechIcons
          profile={{
            links: {
              github: profile.links.github,
              linkedin: profile.links.linkedin,
              whatsapp: profile.links.whatsapp,
            },
            name: profile.name,
            photoSrc: profile.photoSrc,
            role: profile.role,
          }}
        />
      </div>
    </section>
  );
}
