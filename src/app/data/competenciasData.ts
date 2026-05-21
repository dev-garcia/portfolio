import type { IconType } from "react-icons";
import { GrOracle } from "react-icons/gr";
import { FaAws, FaFileExcel, FaFileWord } from "react-icons/fa6";
import {
  SiNodedotjs,
  SiReact,
  SiNestjs,
  SiPrisma,
  SiMysql,
  SiNextdotjs,
  SiScrumalliance,
  SiTypescript,
  SiDigitalocean,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiSequelize,
  SiAngular,
  SiBootstrap,
  SiMiro,
  SiFigma,
} from "react-icons/si";
import { FaLightbulb } from "react-icons/fa6";

export interface CompetenciaType {
  id: string;
  name: string;
  description: string;
  icon?: IconType;
  isTech: boolean;
}

export const competenciasList: CompetenciaType[] = [
  {
    id: "nodejs",
    name: "Node.js",
    description: "Plataforma para construir aplicações do lado do servidor.",
    icon: SiNodedotjs,
    isTech: true,
  },
  {
    id: "react",
    name: "React",
    description: "Biblioteca JavaScript para construção de interfaces de usuário.",
    icon: SiReact,
    isTech: true,
  },
  {
    id: "nestjs",
    name: "NestJS",
    description: "Framework para construção de aplicações escaláveis em Node.js.",
    icon: SiNestjs,
    isTech: true,
  },
  {
    id: "prisma",
    name: "Prisma",
    description: "ORM para Node.js e TypeScript.",
    icon: SiPrisma,
    isTech: true,
  },
  {
    id: "mysql",
    name: "MySQL",
    description: "Sistema de gerenciamento de banco de dados relacional.",
    icon: SiMysql,
    isTech: true,
  },
  {
    id: "amazon-rds",
    name: "Amazon RDS",
    description: "Serviço de banco de dados gerenciado pela AWS.",
    icon: FaAws,
    isTech: true,
  },
  {
    id: "oracle",
    name: "Oracle",
    description: "Sistema de gerenciamento de banco de dados.",
    icon: GrOracle,
    isTech: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    description: "Framework React para renderização no lado do servidor.",
    icon: SiNextdotjs,
    isTech: true,
  },
  {
    id: "scrum",
    name: "Scrum",
    description: "Metodologia ágil para gestão e planejamento de projetos.",
    icon: SiScrumalliance,
    isTech: true,
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "Superset de JavaScript que adiciona tipagem estática ao código.",
    icon: SiTypescript,
    isTech: true,
  },
  {
    id: "digital-ocean",
    name: "Digital Ocean",
    description: "Provedor de serviços de cloud computing.",
    icon: SiDigitalocean,
    isTech: true,
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    description: "Framework de CSS utilitário para estilização rápida.",
    icon: SiTailwindcss,
    isTech: true,
  },
  {
    id: "mui",
    name: "MUI",
    description: "Biblioteca de componentes React.",
    icon: SiMui,
    isTech: true,
  },
  {
    id: "expressjs",
    name: "Express.js",
    description: "Framework web minimalista para Node.js.",
    icon: SiExpress,
    isTech: true,
  },
  {
    id: "sequelize",
    name: "Sequelize.js",
    description: "ORM baseado em promessas para Node.js.",
    icon: SiSequelize,
    isTech: true,
  },
  {
    id: "angular",
    name: "Angular",
    description: "Framework JavaScript para desenvolvimento de aplicações web.",
    icon: SiAngular,
    isTech: true,
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    description: "Framework front-end para desenvolvimento web responsivo.",
    icon: SiBootstrap,
    isTech: true,
  },
  {
    id: "design-thinking",
    name: "Design Thinking",
    description: "Metodologia para solução de problemas e inovação.",
    icon: FaLightbulb,
    isTech: true,
  },
  {
    id: "miro",
    name: "Miro",
    description: "Ferramenta colaborativa online para planejamento e brainstorming.",
    icon: SiMiro,
    isTech: true,
  },
  {
    id: "figma",
    name: "Figma",
    description: "Ferramenta de design gráfico baseada em navegador.",
    icon: SiFigma,
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
