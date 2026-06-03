import { profile } from "@/data/portfolio/profile";

const defaultSiteUrl = "https://dev-garcia.vercel.app";

function createSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;
  const url = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;

  try {
    return new URL(url.endsWith("/") ? url : `${url}/`);
  } catch {
    return new URL(defaultSiteUrl);
  }
}

export const site = {
  name: "Cristian Garcia Maia",
  shortName: "Cristian Garcia",
  title: "Cristian Garcia Maia — Desenvolvedor Full Stack",
  description:
    "Portfólio de Cristian Garcia Maia, desenvolvedor full stack focado em backend, integrações, APIs, dados e aplicações web em produção.",
  locale: "pt_BR",
  language: "pt-BR",
  category: "technology",
  url: createSiteUrl(),
  keywords: [
    "Cristian Garcia Maia",
    "desenvolvedor full stack",
    "desenvolvedor backend",
    "desenvolvedor Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "APIs",
    "integrações",
    "Manaus",
  ],
  social: {
    linkedin: profile.links.linkedin,
    github: profile.links.github,
  },
};

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
