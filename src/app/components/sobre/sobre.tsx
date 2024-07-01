import { BsLinkedin, BsGithub } from "react-icons/bs";

function CTA() {
  return (
    <div className=" ">
      <a
        href="/images/Currículo Cristian Garcia.pdf"
        download
        className="inline-block rounded bg-[#1f2937] px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white transition duration-150 ease-in-out
         hover:bg-black">
        Download CV
      </a>
    </div>
  );
}

const Sobre = () => {
  return (
    <>
      <section id="sobre" className="bubbles font-sans lg:min-h-screen">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>

        <div className="flex flex-col justify-center pt-12 sm:flex-row sm:pt-4">
          <div className="ml-4 flex flex-col sm:gap-1 md:gap-2">
            <h1 className="text-left text-4xl font-bold sm:text-center lg:mt-20 ">
              Bem vindo, Eu sou Cristian Garcia.
              <p className="gradient-text text-left text-5xl drop-shadow-lg lg:text-9xl">
                Desenvolvedor Web
              </p>
            </h1>
          </div>
        </div>

        <div className="m-auto p-4 text-left md:p-10">
          <p className="m-auto w-11/12 text-left md:w-2/4">
            Sou de uma pequena cidade do interior do Acre, onde as pessoas não
            tinham um bom contato com tecnologia e incentivo de inovações
            tecnológicas, com isso, decidi mudar para a capital Manaus - AM,
            para ter novas experiências e oportunidades.
            <br />
            Adquiri experiências valiosas de liderança, onde liderei uma equipe
            de desenvolvedores, mas nunca parei de codificar. Estou confiante de
            que posso ser um ativo valioso para a sua empresa. Estou ansioso
            para aprender mais sobre o seu negócio e as oportunidades que você
            tem disponíveis.
          </p>
        </div>

        <div>
          <ul className="flex justify-center space-x-1 font-medium drop-shadow md:space-x-3 md:text-2xl">
            <li>
              <a
                href="https://github.com/dev-garcia"
                rel="noopener noreferrer"
                title="GitHub"
                target="_blank"
                className="flex rounded-full p-3 text-sm transition-all
                  hover:scale-125 hover:bg-[#1f2937] hover:text-[#16e08f]">
                <BsGithub /> <span className="pl-2">Meu GitHub</span>
              </a>
            </li>
            <li className="pl-4">
              <CTA />
            </li>
            <li className="pl-4">
              <a
                href="https://www.linkedin.com/in/cristian-garcia-web/"
                rel="noopener noreferrer"
                title="LinkedIn"
                target="_blank"
                className="flex rounded-full p-3 text-sm transition-all
                hover:scale-125 hover:bg-[#1f2937] hover:text-[#16e08f]">
                <BsLinkedin /> <span className="pl-2">Meu Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Sobre;
