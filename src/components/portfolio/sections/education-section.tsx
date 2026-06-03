import { ArrowUpRightIcon } from "lucide-react";
import { SectionHeader } from "@/components/portfolio/section-header";
import { interactiveCardClassName, sectionShell } from "@/components/portfolio/styles";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { EducationGroup } from "@/data/portfolio/types";
import { cn } from "@/lib/utils";

type EducationSectionProps = {
  groups: EducationGroup[];
};

type EducationCardProps = {
  group: EducationGroup;
};

type EducationItemProps = {
  groupTitle: string;
  index: number;
  item: EducationGroup["items"][number];
};

export function EducationSection({ groups }: EducationSectionProps) {
  return (
    <section
      aria-labelledby="education-heading"
      className={cn("section-band", sectionShell)}
      id="education"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          description="Graduação, Web Academy e trilhas complementares com links de verificação."
          eyebrow="03 — Formação e cursos"
          id="education-heading"
          title="Formação e cursos verificáveis."
        />

        <div className="grid items-start gap-6 lg:grid-cols-2">
          {groups.map((group) => (
            <EducationCard group={group} key={group.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ group }: EducationCardProps) {
  const hasControlledScroll = group.title === "Certificações e cursos";

  return (
    <Card
      className={cn(
        interactiveCardClassName,
        hasControlledScroll &&
          "relative lg:max-h-152 lg:after:pointer-events-none lg:after:absolute lg:after:inset-x-0 lg:after:bottom-0 lg:after:h-16 lg:after:bg-linear-to-t lg:after:from-card lg:after:to-transparent",
      )}
      data-reveal
    >
      <CardHeader>
        <CardTitle>{group.title}</CardTitle>
        <CardDescription>{group.description}</CardDescription>
      </CardHeader>
      <CardContent
        className={cn(
          "flex flex-col",
          hasControlledScroll &&
            "lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pb-8 lg:pr-2 lg:scrollbar-gutter-stable",
        )}
      >
        {group.items.map((item, index) => (
          <EducationItem
            groupTitle={group.title}
            index={index}
            item={item}
            key={`${group.title}-${item.name}`}
          />
        ))}
      </CardContent>
    </Card>
  );
}

function EducationItem({ groupTitle, index, item }: EducationItemProps) {
  return (
    <div>
      {index > 0 ? <Separator /> : null}
      <div className="flex flex-col gap-4 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="text-sm font-medium leading-6 text-foreground">{item.name}</div>
            <div className="mt-1 text-xs leading-5 text-muted-foreground">{item.organization}</div>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1 text-right">
            <span className="text-xs text-muted-foreground">{item.meta}</span>
            <Badge variant="outline">{item.status}</Badge>
          </div>
        </div>
        <div className="min-w-0">
          <p className="text-sm leading-6 text-muted-foreground">{item.detail}</p>
          {item.badges?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.badges.map((badge) => (
                <Badge key={badge} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          ) : null}
          {item.links?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.links.map((link) => (
                <a
                  aria-label={`${link.label} de ${item.name}`}
                  className={buttonVariants({
                    size: "sm",
                    variant: link.kind === "secondary" ? "secondary" : "outline",
                  })}
                  href={link.href}
                  key={`${groupTitle}-${item.name}-${link.label}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                  <ArrowUpRightIcon data-icon="inline-end" />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
