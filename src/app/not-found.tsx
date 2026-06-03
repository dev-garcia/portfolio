import { ArrowLeftIcon, DownloadIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { profile } from "@/data/portfolio/profile";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen items-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-background" />
      <div className="absolute inset-x-0 top-16 -z-10 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -z-10 size-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/45 blur-3xl" />

      <section
        aria-labelledby="not-found-heading"
        className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,1fr)]"
      >
        <div className="flex flex-col items-start">
          <Badge className="mb-6" variant="secondary">
            404
          </Badge>
          <p
            aria-hidden="true"
            className="font-heading text-[clamp(5rem,18vw,12rem)] leading-none text-muted-foreground/20"
          >
            404
          </p>
        </div>

        <Card className="border border-border/80 bg-card shadow-2xl shadow-foreground/5 backdrop-blur-xl">
          <CardHeader>
            <CardTitle
              className="text-balance font-heading text-4xl leading-tight md:text-6xl"
              id="not-found-heading"
            >
              Página não encontrada.
            </CardTitle>
            <CardDescription className="max-w-xl text-pretty text-base leading-8">
              O endereço pode ter mudado ou não existir. Volte ao portfólio ou fale comigo para
              encontrar o caminho certo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-3xl border border-border/80 bg-muted/35 p-4">
              <p className="text-sm font-medium text-foreground">Cristian Garcia Maia</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Full Stack · Backend, integrações e aplicações web em uso real.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap">
            <Link className={buttonVariants({ size: "lg" })} href="/">
              <ArrowLeftIcon data-icon="inline-start" />
              Voltar ao portfólio
            </Link>
            <a
              className={buttonVariants({ size: "lg", variant: "outline" })}
              href={`mailto:${profile.email}`}
            >
              <MailIcon data-icon="inline-start" />
              Enviar e-mail
            </a>
            <a className={buttonVariants({ size: "lg", variant: "link" })} href={profile.cvHref}>
              <DownloadIcon data-icon="inline-start" />
              Baixar CV
            </a>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
