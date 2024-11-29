export interface Competencia {
  id: string;
  name: string;
  description: string;
  logo?: string;
  isTech: boolean;
}

export const competenciasList: Competencia[] = [
  {
    id: "nodejs",
    name: "Node.js",
    description: "Plataforma para construir aplicações do lado do servidor.",
    logo: "/images/nodejs-logo.svg",
    isTech: true,
  },
  {
    id: "react",
    name: "React",
    description:
      "Biblioteca JavaScript para construção de interfaces de usuário.",
    logo: "/images/react.svg",
    isTech: true,
  },
  {
    id: "nestjs",
    name: "NestJS",
    description:
      "Framework para construção de aplicações escaláveis em Node.js.",
    logo: "/images/nestjs.svg",
    isTech: true,
  },
  {
    id: "prisma",
    name: "Prisma",
    description: "ORM para Node.js e TypeScript.",
    logo: "/images/prisma-svgrepo-com.svg",

    isTech: true,
  },
  {
    id: "mysql",
    name: "MySQL",
    description: "Sistema de gerenciamento de banco de dados relacional.",
    logo: "/images/mysql-um.svg",
    isTech: true,
  },
  {
    id: "amazon-rds",
    name: "Amazon RDS",
    description: "Serviço de banco de dados gerenciado pela AWS.",
    logo: "/images/aws-svgrepo-com.svg",
    isTech: true,
  },
  {
    id: "oracle",
    name: "Oracle",
    description: "Sistema de gerenciamento de banco de dados.",
    logo: "/images/oracle-svgrepo-com.svg",
    isTech: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    description: "Framework React para renderização no lado do servidor.",
    logo: "/images/next.svg",
    isTech: true,
  },
  {
    id: "scrum",
    name: "Scrum",
    description: "Metodologia ágil para gestão e planejamento de projetos.",
    logo: "/images/skill-scrum.svg",
    isTech: true,
  },
  {
    id: "typescript",
    name: "TypeScript",
    description:
      "Superset de JavaScript que adiciona tipagem estática ao código.",
    logo: "/images/typescript.svg",
    isTech: true,
  },
  {
    id: "digital-ocean",
    name: "Digital Ocean",
    description: "Provedor de serviços de cloud computing.",
    logo: "/images/digital-ocean.svg",
    isTech: true,
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    description: "Framework de CSS utilitário para estilização rápida.",
    logo: "/images/tailwind-css.svg",
    isTech: true,
  },
  {
    id: "mui",
    name: "MUI",
    description: "Biblioteca de componentes React.",
    logo: "/images/mui.svg",
    isTech: true,
  },
  {
    id: "expressjs",
    name: "Express.js",
    description: "Framework web minimalista para Node.js.",
    logo: "/images/express-um.svg",
    isTech: true,
  },
  {
    id: "sequelize",
    name: "Sequelize.js",
    description: "ORM baseado em promessas para Node.js.",
    logo: "/images/sequelize.svg",
    isTech: true,
  },
  {
    id: "angular",
    name: "Angular",
    description: "Framework JavaScript para desenvolvimento de aplicações web.",
    logo: "/images/angular-svgrepo-com.svg",
    isTech: true,
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    description: "Framework front-end para desenvolvimento web responsivo.",
    logo: "/images/bootstrap.svg",
    isTech: true,
  },
  {
    id: "design-thinking",
    name: "Design Thinking",
    description: "Metodologia para solução de problemas e inovação.",
    logo: "/images/design-thinking.svg",
    isTech: true,
  },
  {
    id: "miro",
    name: "Miro",
    description:
      "Ferramenta colaborativa online para planejamento e brainstorming.",
    logo: "/images/miro-svgrepo-com.svg",
    isTech: true,
  },
  {
    id: "figma",
    name: "Figma",
    description: "Ferramenta de design gráfico baseada em navegador.",
    logo: "/images/figma-svgrepo-com.svg",
    isTech: true,
  },
  {
    id: "microsoft-excel",
    name: "Microsoft Excel",
    description: "Software para criação e gerenciamento de planilhas.",
    isTech: true,
  },
  {
    id: "microsoft-word",
    name: "Microsoft Word",
    description: "Software para processamento de textos.",
    isTech: true,
  },
  {
    id: "rede-de-computadores",
    name: "Rede de Computadores",
    description: "Conhecimento em redes e infraestrutura de comunicação.",
    isTech: true,
  },
  {
    id: "lideranca",
    name: "Liderança de equipe",
    description: "Habilidade de liderar e coordenar equipes.",
    isTech: false,
  },
  {
    id: "administracao",
    name: "Administração",
    description: "Gestão e organização de processos e recursos.",
    isTech: false,
  },
  {
    id: "atendimento",
    name: "Atendimento ao Cliente",
    description: "Habilidade de interagir positivamente com clientes.",
    isTech: false,
  },
  {
    id: "trabalho-em-equipe",
    name: "Trabalho em Equipe",
    description: "Cooperar com colegas em grupos diversos.",
    isTech: false,
  },
  {
    id: "adaptabilidade",
    name: "Adaptabilidade",
    description: "Flexibilidade para mudanças e novos desafios.",
    isTech: false,
  },
];
