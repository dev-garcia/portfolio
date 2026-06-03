import { ArrowUpRightIcon, CheckIcon } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/portfolio/section-header";
import { interactiveCardClassName, sectionShell } from "@/components/portfolio/styles";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Profile } from "@/data/portfolio/profile";
import { cn } from "@/lib/utils";

type ProductSectionProps = {
  features: string[];
  profile: Profile;
};

export function ProductSection({ features, profile }: ProductSectionProps) {
  return (
    <section
      aria-labelledby="product-heading"
      className={cn("section-band", sectionShell)}
      id="product"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          description="Uma plataforma com acesso, pagamentos, dados e operação conectados em uma experiência única."
          eyebrow="01 — Produto em produção"
          id="product-heading"
          title="Um produto real em uso."
        />

        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-12">
          <div
            className="overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-2xl shadow-foreground/5 transition-[box-shadow,transform,border-color] duration-200 motion-safe:hover:-translate-y-0.5"
            data-reveal
          >
            <div className="bg-muted/35 p-3">
              <Image
                alt="Landing page da plataforma Revalidate BR"
                className="h-auto w-full rounded-2xl border border-border/60"
                height={1100}
                loading="lazy"
                sizes="(min-width: 1024px) 650px, 94vw"
                src={profile.productImageSrc}
                width={1440}
              />
            </div>
          </div>

          <Card className={cn(interactiveCardClassName, "backdrop-blur-xl")} data-reveal>
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">Live</Badge>
              </CardAction>
              <CardTitle className="max-w-sm text-2xl leading-tight">
                Revalidate BR conecta conteúdo, acesso e rotina de estudo.
              </CardTitle>
              <CardDescription className="leading-7">
                Plataforma educacional para médicos formados no exterior. Atuo no frontend, backend,
                banco de dados, pagamentos, webhooks e recursos apoiados por LLMs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-3">
                {features.map((feature) => (
                  <li
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                    key={feature}
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <CheckIcon aria-hidden="true" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <a
                className={buttonVariants()}
                href={profile.links.product}
                rel="noreferrer"
                target="_blank"
              >
                Abrir plataforma
                <ArrowUpRightIcon data-icon="inline-end" />
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
