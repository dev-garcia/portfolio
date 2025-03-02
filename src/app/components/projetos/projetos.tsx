import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  projectLink: string;
  repoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  projectLink,
  repoLink,
}) => {
  return (
    <div className="container mx-auto flex flex-col items-center px-5 py-16 md:flex-row lg:px-28">
      <div className="mb-4 w-full md:w-1/2 lg:w-1/3 lg:max-w-lg">
        <Image
          src={imageSrc}
          alt="imagem do site"
          width={400}
          height={400}
          className="rounded-lg object-cover object-center"
        />
      </div>
      <div className="flex flex-col items-center text-left sm:ml-12 sm:items-start md:mb-0 md:w-1/2 md:pr-16 lg:flex-grow lg:pr-24">
        <h2 className="mb-4 text-left text-2xl font-black tracking-tighter text-black md:text-5xl">
          {title}
        </h2>
        <p className="mb-4 text-left text-base leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col justify-center lg:flex-row">
          <button className="focus:shadow-outline mt-auto flex items-center rounded-lg bg-verdeAzulado px-6 py-2 font-semibold text-white ring-offset-2 ring-offset-current transition duration-500 ease-in-out hover:bg-bg focus:outline-none focus:ring-2">
            <a href={projectLink} target="_blank" rel="noreferrer noopener">
              Acessar
            </a>
          </button>
          <p className="m-auto mt-4 text-left text-sm md:ml-6">
            <a
              href={repoLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center font-semibold text-ameixa hover:text-black md:mb-2 lg:mb-0"
            >
              leve-me ao repositório.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const Projetos: React.FC = () => {
  return (
    <>
      <section
        id="projetos"
        className="text-blueGray-700 mt-20 bg-white font-sans"
      >
        <h2 className="pt-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Projetos
        </h2>
        <ProjectCard
          title="Vibess"
          description="Web Player de música, o maior desafio neste projeto foi migrar todo o código de js vanila para react, pois a solução foi alterar 99% do código, onde tive um ótimo aprendizado ao uso das ferramentas que o react oferece."
          imageSrc="/images/vibess.json"
          projectLink="https://vibess-dev-garcia.vercel.app/"
          repoLink="https://github.com/dev-garcia/vibess"
        />

        <ProjectCard
          title="Ref-Color"
          description="Neste projeto disponibilizei as paletas usadas por algumas das marcas mais conhecidas globalmente."
          imageSrc="/images/ref-color.json"
          projectLink="https://ref-color-dev-garcia.vercel.app/"
          repoLink="https://github.com/dev-garcia/Ref-Color"
        />

        <ProjectCard
          title="Saúde em Números"
          description="Neste projeto disponibilizei a calculadora ICM e uma para brincar com a idade."
          imageSrc="/images/saude-em-numeros.json"
          projectLink="https://saude-em-numeros.vercel.app/"
          repoLink="https://github.com/dev-garcia/saude-em-numeros"
        />
      </section>
    </>
  );
};

export default Projetos;
