import Image from "next/image";

const Competencias = () => {
  const hardSkills = [
    {
      name: "React",
      role: "Biblioteca JavaScript para construção de interfaces de usuário interativas e reativas.",
      imageUrl: "/images/react.svg",
    },
    {
      name: "Next",
      role: "Framework React para criar aplicações web estáticas e server-side rendered modernas.",
      imageUrl: "/images/next.svg",
    },
    {
      name: "Vite",
      role: "Ferramenta de construção rápida e eficiente para projetos front-end modernos.",
      imageUrl: "/images/vite.svg",
    },
    {
      name: "Tailwind CSS",
      role: "Framework CSS utilitário que facilita a estilização rápida e flexível de interfaces web.",
      imageUrl: "/images/tailwind-css.svg",
    },
    {
      name: "Bootstrap",
      role: "É um framework CSS pré-estilizado para criar sites e aplicações web.",
      imageUrl: "/images/bootstrap.svg",
    },
    {
      name: "Node",
      role: "Plataforma que permite a construção de aplicações do lado do servidor, baseada no motor V8 do Google Chrome.",
      imageUrl: "/images/nodejs-logo.svg",
    },
    {
      name: "Mongo DB",
      role: "Banco de dados NoSQL flexível e escalável para aplicações modernas.",
      imageUrl: "/images/skill-mongodb.svg",
    },
    {
      name: "JavaScript",
      role: "Linguagem de programação amplamente usada para desenvolvimento web.",
      imageUrl: "/images/js.svg",
    },
    {
      name: "TypeScript",
      role: "Linguagem de programação que está crescendo no mercado e é recomendada para desenvolvimento web.",
      imageUrl: "/images/typescript.svg",
    },
    {
      name: "Python",
      role: "Python é uma linguagem de programação de alto nível, dinâmica, interpretada, modular, multiplataforma e orientada a objetos",
      imageUrl: "/images/python.svg",
    },
    {
      name: "Sequelize",
      role: "Sequelize é um ORM para Node.js que facilita a manipulação de dados em vários bancos de dados.",
      imageUrl: "/images/sequelize.svg",
    },
    {
      name: "MySQL",
      role: "MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto, que suporta a linguagem SQL e é amplamente utilizado em aplicações web.",
      imageUrl: "/images/mysql-um.svg",
    },
    {
      name: "Express",
      role: "Express é um framework de back-end popular para Node.js, que facilita a criação de back-ends escaláveis, robustos e de alto desempenho",
      imageUrl: "/images/express-um.svg",
    },
  ];

  const softSkills = [
    {
      name: "Comunicação",
      description:
        "A habilidade de dialogar com colegas de trabalho para evitar conflitos, resolver divergências e eliminar ruídos que prejudicam a realização de tarefas.",
    },
    {
      name: "Trabalho Em Equipe",
      description:
        "A essencial habilidade de cooperar com colegas em grupos compostos por pessoas diversas, dando a sua contribuição individual para o interesse coletivo.",
    },
    {
      name: "Proatividade",
      description:
        "Capacidade de arregaçar as mangas, avaliar cenários e encontrar caminhos para resolver questões que impedem os resultados ou atrapalham a produtividade.",
    },
    {
      name: "Ética No Trabalho",
      description:
        "Comprometimento com as regras da empresa e com um senso comum de respeito e moralidade no ambiente de trabalho.",
    },
    {
      name: "Empatia",
      description:
        "É a habilidade de se colocar no lugar do outro, de se conectar com pessoas de diferentes backgrounds e entender a sua abordagem sobre diversos temas e modos de trabalho.",
    },
    {
      name: "Flexibilidade E Resiliência",
      description:
        "Estão relacionadas à capacidade de se adaptar e continuar produzindo diante das mudanças de cenários, mesmo após experiências difíceis e que trouxeram prejuízos, mas também lições.",
    },
  ];
  return (
    <>
      <section id="competencias" className="font-sans">
        <h2 className="pt-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Competências
        </h2>
        <div className="bg-white py-24 sm:py-32">
          <div className="max-w-2xl text-center m-auto">
            <h3 className="text-2xl font-bold tracking-tight">Hard Skills</h3>
            <p className="mt-6 mb-6 text-lg leading-8 text-gray-600">
              Algumas das hardSkills que tenho experiência em projetos.
            </p>
          </div>
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-y-16 xl:col-span-3">
              {hardSkills.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <Image
                      className="h-16 w-16 rounded-full"
                      src={person.imageUrl}
                      alt=""
                      width={28}
                      height={28}
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-[#3d717a]">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto grid w-10/12 max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:w-6/12 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">soft skills</h2>
            <p className="mt-4 text-gray-500">
              Você concerteza já ouviu falar de {"'soft skills'"}, aqui podemos
              observar algumas delas que adquiri com minhas experiências...
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {softSkills.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4">
                  <dt className="font-medium">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default Competencias;
