export interface Experiencia {
  id: string;
  title: string;
  period: string;
  description: string;
  competenciasIds: string[];
  isTech: boolean;
}

export const experienciasList: Experiencia[] = [
  {
    id: "residuum-fullstack",
    title: "Residuum - Desenvolvedor Full Stack",
    period: "03-2024 a 11-2024",
    description:
      "Responsável pelo desenvolvimento completo das aplicações, desde o banco de dados até as interfaces, incluindo planejamento, implementação de features, revisão de PR’s e administração da cloud.",
    competenciasIds: [
      "nodejs",
      "nestjs",
      "prisma",
      "mysql",
      "amazon-rds",
      "oracle",
      "nextjs",
      "react",
      "scrum",
      "typescript",
      "digital-ocean",
      "tailwindcss",
      "mui",
      // soft skills
      "adaptabilidade",
    ],
    isTech: true,
  },
  {
    id: "residuum-frontend",
    title: "Residuum - Desenvolvedor Front-End",
    period: "07-2023 a 03-2024",
    description:
      "Atuação em estágio voluntário como desenvolvedor front-end, trabalhando em equipe com desenvolvedores sêniores, focando no desenvolvimento e manutenção do projeto da empresa.",
    competenciasIds: [
      "nodejs",
      "javascript",
      "expressjs",
      "sequelize",
      "mysql",
      "angular",
      "bootstrap",
      "scrum",
      "design-thinking",
      "miro",
      "figma",
      // soft skills
      "trabalho-em-equipe",
    ],
    isTech: true,
  },
  {
    id: "gazin-administrativo",
    title: "Gazin – Auxiliar Administrativo",
    period: "08/2020 – 01/2023",
    description:
      "Iniciei minha trajetória na filial 298 como operador de caixa, onde desenvolvi habilidades essenciais em atendimento ao cliente e gestão de operações financeiras. Posteriormente, fui promovido a uma posição de liderança na filial 368. Nessa função, gerenciei a equipe administrativa, treinando novos colaboradores e garantindo a eficiência dos processos internos. Fui responsável pela liberação de orçamentos e pela execução de diversas atividades administrativas, contribuindo significativamente para o bom funcionamento da filial.",
    competenciasIds: [
      "lideranca",
      "administracao",
      "trabalho-em-equipe",
      "atendimento",
    ],
    isTech: false,
  },
  {
    id: "pastejo-operador",
    title: "Pastejo – Operador de Cadastro",
    period: "01/11/2019 - 19/07/2020",
    description:
      "Coleta de documentos e organização de relatórios para financiamento rural.",
    competenciasIds: [
      "atendimento",
      "trabalho-em-equipe",
      // hard skills
      "microsoft-word",
      "microsoft-excel",
      "rede-de-computadores",
    ],
    isTech: false,
  },
];
