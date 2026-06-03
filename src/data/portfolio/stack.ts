import type { StackGroup } from "@/data/portfolio/types";

export const stackGroups: StackGroup[] = [
  {
    title: "Frontend de produto",
    description:
      "Interfaces e componentes para aplicações web que precisam ser usadas com frequência.",
    primary: ["React", "Next.js", "TypeScript"],
    secondary: ["Angular", "Material UI", "MUI X", "shadcn/ui", "Tailwind CSS"],
  },
  {
    title: "Backend e APIs",
    description:
      "Serviços, autenticação, webhooks e comunicação em tempo real para sustentar o produto.",
    primary: ["Node.js", "NestJS", "Express"],
    secondary: ["FastAPI", "REST APIs", "WebSocket", "Better Auth"],
  },
  {
    title: "Dados e ORMs",
    description:
      "Modelagem, persistência e consultas para aplicações que dependem de dados confiáveis.",
    primary: ["PostgreSQL", "MongoDB", "MySQL"],
    secondary: ["Prisma ORM", "Drizzle ORM", "Sequelize ORM"],
  },
  {
    title: "Integrações e IA",
    description:
      "APIs externas, gateways, webhooks e uso de modelos de linguagem quando fazem sentido para o produto.",
    primary: ["Webhooks", "APIs de IA", "LLMs"],
    secondary: ["Abacate Pay", "Login social", "Automação de fluxos"],
  },
  {
    title: "Infra e deploy",
    description:
      "Deploy, contêineres, CDN, domínios e ambientes para manter a aplicação acessível.",
    primary: ["Docker", "AWS", "Google Cloud"],
    secondary: ["Git", "GitHub", "CDN", "SEO técnico"],
  },
  {
    title: "Qualidade e colaboração",
    description:
      "Documentação, refinamento de requisitos e colaboração para reduzir ruído na entrega.",
    primary: ["Scrum", "Kanban", "Figma"],
    secondary: ["Documentação técnica", "UX", "Design Thinking"],
  },
];
