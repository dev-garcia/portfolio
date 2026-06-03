import { SectionHeader } from "@/components/portfolio/section-header";
import { interactiveCardClassName, sectionShell } from "@/components/portfolio/styles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/data/portfolio/types";
import { cn } from "@/lib/utils";

type ExperienceSectionProps = {
  experiences: Experience[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section aria-labelledby="experience-heading" className={sectionShell} id="experience">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          description="Experiências com produto, P&D, backend, integrações e interfaces usadas por pessoas reais."
          eyebrow="02 — Experiência"
          id="experience-heading"
          title="Onde atuei e o que entreguei."
        />

        <Accordion
          className={cn("rounded-[2rem]", interactiveCardClassName)}
          data-reveal
          defaultValue={experiences[0] ? [experiences[0].value] : []}
        >
          {experiences.map((experience) => (
            <AccordionItem key={experience.value} value={experience.value}>
              <AccordionTrigger className="gap-4 p-5 hover:no-underline md:p-6">
                <span className="grid min-w-0 flex-1 gap-3 text-left md:grid-cols-[minmax(0,1fr)_auto]">
                  <span className="min-w-0">
                    <span className="block text-base font-semibold text-foreground">
                      {experience.role}
                    </span>
                    <span className="mt-1 block text-sm font-normal text-muted-foreground">
                      {experience.company}
                    </span>
                  </span>
                  <span className="text-sm font-normal text-muted-foreground">
                    {experience.period}
                  </span>
                  <span className="border-l-2 border-primary pl-3 text-sm font-semibold leading-6 text-foreground md:col-span-2">
                    {experience.impact}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 md:px-6">
                <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                  {experience.detail}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
