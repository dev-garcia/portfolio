import { SectionHeader } from "@/components/portfolio/section-header";
import { interactiveCardClassName, sectionShell } from "@/components/portfolio/styles";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { StackGroup } from "@/data/portfolio/types";

type StackSectionProps = {
  groups: StackGroup[];
};

export function StackSection({ groups }: StackSectionProps) {
  return (
    <section aria-labelledby="stack-heading" className={sectionShell} id="stack">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          description="Ferramentas que uso quando o produto precisa de interface, APIs, dados, IA e publicação."
          eyebrow="04 — Stack técnica"
          id="stack-heading"
          title="Stack aplicada a produto."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <Card className={interactiveCardClassName} data-reveal key={group.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">{group.title}</CardTitle>
                <CardDescription className="leading-6">{group.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.primary.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                  {group.secondary.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
