export interface Formacao {
  id: string;
  titulo: string;
  periodo: string;
  descricao: string;
  competenciasIds: string[];
}

export const formacoesList: Formacao[] = [
  {
    id: "web-academy",
    titulo: "Capacitação de Desenvolvimento Web Full Stack - Web Academy – UFAM / MOTOROLA",
    periodo: "2021 – 2022",
    descricao: "Curso intensivo focado em desenvolvimento web full stack com diversas tecnologias.",
    competenciasIds: [
      "desenvolvimento-web-fullstack",
      "html5",
      "css3",
      "javascript",
      "controle-de-versao",
      "git",
      "dom",
      "bootstrap",
      "nodejs",
      "typescript",
      "express",
      "docker",
      "restful-apis",
      "react",
      "jest",
      "ci-cd",
      "desenvolvimento-agil",
      "ciencia-de-dados",
      "aprendizado-de-maquina",
    ],
  },
  {
    id: "analise-sistemas",
    titulo: "Análise e Desenvolvimento de Sistemas",
    periodo: "2016 – 2020",
    descricao:
      "Graduação em Análise e Desenvolvimento de Sistemas, focando em fundamentos de programação e gestão de projetos.",
    competenciasIds: [
      "fundamentos-de-programacao",
      "gestao-de-projetos",
      "banco-de-dados",
      "metodologias-agile",
      "analise-de-sistemas",
      "desenvolvimento-orientado-a-objetos",
    ],
  },
];
