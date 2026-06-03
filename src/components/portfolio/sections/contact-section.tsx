import { DownloadIcon, MailIcon, MapPinIcon, MessageCircleIcon } from "lucide-react";
import { ContactCopyButton } from "@/components/portfolio/contact-copy-button";
import { sectionShell } from "@/components/portfolio/styles";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { Separator } from "@/components/ui/separator";
import type { Profile } from "@/data/portfolio/profile";
import { cn } from "@/lib/utils";

type ContactSectionProps = {
  profile: Profile;
};

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <footer
      className={cn("relative isolate overflow-hidden bg-foreground text-background", sectionShell)}
      id="contact"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-background/20 to-transparent" />
      <section aria-labelledby="contact-heading" className="mx-auto max-w-6xl">
        <div className="max-w-3xl" data-reveal>
          <Badge
            className="mb-6 border-background/20 bg-background/10 text-background"
            variant="outline"
          >
            05 — Contato
          </Badge>
          <h2
            className="text-balance font-heading text-4xl leading-tight md:text-6xl"
            id="contact-heading"
          >
            Vamos conversar sobre o produto que você quer colocar no ar.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-background/65">
            Se a ideia já tem escopo, problema ou público definido, posso ajudar a transformar isso
            em uma aplicação pronta para uso.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className={buttonVariants()} href={`mailto:${profile.email}`}>
              <MailIcon data-icon="inline-start" />
              Enviar e-mail
            </a>
            <ContactCopyButton email={profile.email} />
            <a
              className={buttonVariants({ variant: "secondary" })}
              href={profile.links.whatsapp}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircleIcon data-icon="inline-start" />
              WhatsApp
            </a>
            <a className={buttonVariants({ variant: "link" })} href={profile.cvHref}>
              <DownloadIcon data-icon="inline-start" />
              Baixar CV
            </a>
          </div>
        </div>

        <Separator className="my-12 bg-background/15" />

        <div className="flex flex-col gap-4 text-sm text-background/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Cristian Garcia Maia</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              className="transition-colors hover:text-background"
              href={profile.links.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="transition-colors hover:text-background"
              href={profile.links.github}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="transition-colors hover:text-background"
              href={profile.links.whatsapp}
              rel="noreferrer"
              target="_blank"
            >
              WhatsApp
            </a>
            <div className="flex items-center gap-1">
              <MapPinIcon data-icon="inline-start" />
              <span>Manaus, BR · Remoto</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
