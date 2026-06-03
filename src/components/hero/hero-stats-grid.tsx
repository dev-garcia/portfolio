import { HeroStatsRevealRoot } from "@/components/hero/hero-stats-reveal-root";

type HeroStat = {
  label: string;
  value: string;
};

type HeroStatsGridProps = {
  stats: HeroStat[];
};

export function HeroStatsGrid({ stats }: HeroStatsGridProps) {
  if (stats.length === 0) {
    return null;
  }

  return (
    <HeroStatsRevealRoot className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-2 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          className="rounded-2xl border border-border/70 bg-card px-4 py-3 shadow-sm backdrop-blur-xl"
          data-hero-stat-card
          key={stat.label}
        >
          <dt className="text-xs text-muted-foreground">{stat.label}</dt>
          <dd className="mt-1 text-sm font-semibold text-foreground">{stat.value}</dd>
        </div>
      ))}
    </HeroStatsRevealRoot>
  );
}
