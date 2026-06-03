import { ArrowUpRightIcon, Code2Icon, ExternalLinkIcon, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import { HeroCardMotionRoot } from "@/components/hero/hero-card-motion-root";
import { HeroTechIcons } from "@/components/hero/hero-tech-icons";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type HeroProfileCardData = {
  name: string;
  role: string;
  photoSrc: string;
  links: {
    github: string;
    linkedin: string;
    whatsapp: string;
  };
};

type HeroCardWithTechIconsProps = {
  profile: HeroProfileCardData;
};

export function HeroCardWithTechIcons({ profile }: HeroCardWithTechIconsProps) {
  return (
    <HeroCardMotionRoot>
      <HeroTechIcons />
      <Card
        className="relative z-10 border border-border/80 bg-card shadow-xl shadow-foreground/5 backdrop-blur-2xl"
        data-hero-profile-card
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span
              className="group/avatar relative flex size-10 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten"
              data-size="lg"
              data-slot="avatar"
            >
              <Image
                alt="Foto de Cristian Garcia Maia"
                className="aspect-square size-full rounded-full object-cover"
                data-slot="avatar-image"
                fill
                preload
                sizes="40px"
                src={profile.photoSrc}
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold">{profile.name}</span>
              <span className="block truncate text-xs font-normal text-muted-foreground">
                {profile.role}
              </span>
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-7 text-muted-foreground">
            <strong className="block font-semibold text-foreground">
              Engenharia com contexto de produto.
            </strong>
            Organizo dados, conecto serviços, documento decisões e acompanho a aplicação depois que
            ela entra em produção.
          </p>
        </CardContent>
        <CardFooter className="justify-between gap-3">
          <ExternalSocialLinks profile={profile} />
          <a
            className={buttonVariants({
              size: "sm",
              variant: "secondary",
            })}
            href="#contact"
          >
            Contato
            <ArrowUpRightIcon data-icon="inline-end" />
          </a>
        </CardFooter>
      </Card>
    </HeroCardMotionRoot>
  );
}

function ExternalSocialLinks({ profile }: HeroCardWithTechIconsProps) {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger
            render={
              <a
                aria-label="Abrir LinkedIn"
                className={buttonVariants({ size: "icon", variant: "outline" })}
                href={profile.links.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <ExternalLinkIcon aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </a>
            }
          />
          <TooltipContent>LinkedIn</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <a
                aria-label="Abrir WhatsApp"
                className={buttonVariants({ size: "icon", variant: "outline" })}
                href={profile.links.whatsapp}
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircleIcon aria-hidden="true" />
                <span className="sr-only">WhatsApp</span>
              </a>
            }
          />
          <TooltipContent>WhatsApp</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <a
                aria-label="Abrir GitHub"
                className={buttonVariants({ size: "icon", variant: "outline" })}
                href={profile.links.github}
                rel="noreferrer"
                target="_blank"
              >
                <Code2Icon aria-hidden="true" />
                <span className="sr-only">GitHub</span>
              </a>
            }
          />
          <TooltipContent>GitHub</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
