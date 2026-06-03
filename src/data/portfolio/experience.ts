import type { Experience } from "@/data/portfolio/types";

export const experiences: Experience[] = [
  {
    value: "revalidate-br",
    role: "Fundador e Desenvolvedor Full Stack",
    company: "Revalidate BR · Manaus, AM · Remoto",
    period: "Abr 2026 - atual",
    impact: "Desenvolvo a plataforma do planejamento técnico à operação diária.",
    detail:
      "Cuido do frontend, backend, autenticação, pagamentos, banco de dados e documentação técnica de uma plataforma educacional para médicos formados no exterior. O produto usa Next.js, React, TypeScript, PostgreSQL, Drizzle ORM, Better Auth, Abacate Pay, webhooks e recursos baseados em modelos de linguagem.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Better Auth", "Webhooks", "LLMs"],
  },
  {
    value: "fuea",
    role: "Desenvolvedor Frontend",
    company: "Fundação Universitas de Estudos Amazônicos · Manaus, AM · Híbrido",
    period: "Jan 2025 - Abr 2026",
    impact: "Criei interfaces para apoiar pesquisa e avaliação de respostas geradas por IA.",
    detail:
      "Desenvolvi telas com React, Next.js e TypeScript, usando Material UI e MUI X para compor fluxos de avaliação. Consumi APIs REST, conectei comunicação em tempo real via WebSocket e integrei autenticação e autorização com Keycloak em colaboração com backend Python, FastAPI, MongoDB e Docker.",
    tags: ["React", "Next.js", "TypeScript", "Keycloak", "WebSocket", "FastAPI", "MongoDB"],
  },
  {
    value: "residuum-full-stack",
    role: "Desenvolvedor Full Stack",
    company: "Residuum · Manaus, AM · Remoto",
    period: "Mar 2024 - Nov 2024",
    impact: "Assumi a frente técnica de uma plataforma usada em eventos de gestão de resíduos.",
    detail:
      "Transformei requisitos em frontend, backend e publicação para uma plataforma de eventos. O trabalho incluiu sites personalizados, coleta de dados por QR Code, gamificação, sorteios, painel ao vivo, otimização de queries, CDN, domínio, redirecionamentos e SEO técnico.",
    tags: ["Next.js", "Node.js", "NestJS", "PostgreSQL", "Prisma ORM", "AWS", "SEO"],
  },
  {
    value: "residuum-internship",
    role: "Desenvolvedor Frontend — Estágio Voluntário",
    company: "Residuum · Manaus, AM · Híbrido",
    period: "Jul 2023 - Mar 2024",
    impact: "Colaborei na evolução da plataforma enquanto consolidava experiência prática.",
    detail:
      "Desenvolvi interfaces com Angular, Bootstrap e JavaScript, consumi APIs REST e integrei o frontend com backend Node.js e Express. O estágio incluiu treinamento prático, colaboração em ambiente ágil, revisão de requisitos e acompanhamento técnico.",
    tags: ["Angular", "JavaScript", "Bootstrap", "Node.js", "Express", "MySQL", "Scrum"],
  },
];
