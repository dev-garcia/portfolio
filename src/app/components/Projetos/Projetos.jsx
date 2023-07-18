import Image from "next/image";

const Projetos = () => {
  return (
    <>
      <section
        id="projetos"
        className="text-blueGray-700 mt-20 bg-white font-sans"
      >
        <h2 className="pt-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Projetos
        </h2>
        <div className="container mx-auto  flex flex-col items-center px-5 py-16 md:flex-row lg:px-28">
          <div className="mb-4 w-full md:w-1/2 lg:w-1/3 lg:max-w-lg">
            <Image
              alt="hero"
              src="/images/vibess.json"
              width={400}
              height={400}
              className="rounded-lg object-cover object-center "
            />
          </div>
          <div className="flex flex-col items-center text-left sm:ml-12 sm:items-start   md:mb-0 md:w-1/2 md:pr-16 lg:flex-grow lg:pr-24">
            <h2 className="mb-4 text-left text-2xl font-black tracking-tighter text-black md:text-5xl">
              Vibess
            </h2>
            <p className="mb-4 text-left text-base leading-relaxed ">
              Web Player de música, o maior desafio neste projeto foi migrar
              todo o código de js vanila para react, pois a solução foi alterar
              99% do código, onde tive um ótimo aprendizado ao uso das
              ferramentas que o react oferece.
            </p>
            <div className="flex flex-col justify-center lg:flex-row">
              <button className="focus:shadow-outline mt-auto flex transform items-center rounded-lg bg-[#3d717a] px-6 py-2 font-semibold text-white ring-offset-2 ring-offset-current transition duration-500 ease-in-out hover:bg-[#1f2937] focus:outline-none focus:ring-2">
                <a
                  href="https://vibess-dev-garcia.vercel.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Acessar
                </a>
              </button>
              <p className="mt-2 text-left text-sm md:ml-6 md:mt-0">
                <a
                  href="https://github.com/dev-garcia/vibess"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center font-semibold text-[#e45250] hover:text-black md:mb-2 lg:mb-0 "
                >
                  leve-me ao repositório.
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto  flex flex-col items-center px-5 py-16 md:flex-row lg:px-28">
          <div className="mb-4 w-full md:w-1/2 lg:w-1/3 lg:max-w-lg">
            <Image
              src="/images/ref-color.json"
              alt="hero"
              width={400}
              height={400}
              className="rounded-lg object-cover object-center "
            />
          </div>
          <div className="flex flex-col items-center text-left sm:ml-12 sm:items-start   md:mb-0 md:w-1/2 md:pr-16 lg:flex-grow lg:pr-24">
            <h2 className="mb-4 text-left text-2xl font-black tracking-tighter text-black md:text-5xl">
              Ref-Color
            </h2>
            <p className="mb-4 text-left text-base leading-relaxed ">
              Neste projeto disponibilzei as paletas usadas por algumas das
              marcas mais conhecidas globalmente.
            </p>
            <div className="flex flex-col justify-center lg:flex-row">
              <button className="focus:shadow-outline mt-auto flex transform items-center rounded-lg bg-[#3d717a] px-6 py-2 font-semibold text-white ring-offset-2 ring-offset-current transition duration-500 ease-in-out hover:bg-[#1f2937] focus:outline-none focus:ring-2">
                <a
                  href="https://ref-color-dev-garcia.vercel.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Acessar
                </a>
              </button>
              <p className="mt-2 text-left text-sm md:ml-6 md:mt-0">
                <a
                  href="https://github.com/dev-garcia/Ref-Color"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center font-semibold text-[#e45250] hover:text-black md:mb-2 lg:mb-0 "
                >
                  leve-me ao repositório.
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto  flex flex-col items-center px-5 py-16 md:flex-row lg:px-28">
          <div className="mb-4 w-full md:w-1/2 lg:w-1/3 lg:max-w-lg">
            <Image
              src="/images/saude-em-numeros.json"
              alt="hero"
              width={400}
              height={400}
              className="rounded-lg object-cover object-center "
            />
          </div>
          <div className="flex flex-col items-center text-left sm:ml-12 sm:items-start   md:mb-0 md:w-1/2 md:pr-16 lg:flex-grow lg:pr-24">
            <h2 className="mb-4 text-left text-2xl font-black tracking-tighter text-black md:text-5xl">
              Saúde em Números
            </h2>
            <p className="mb-4 text-left text-base leading-relaxed ">
              Neste projeto disponibilzei a calculadora ICM e uma para brincar
              com a idade.
            </p>
            <div className="flex flex-col justify-center lg:flex-row">
              <button className="focus:shadow-outline mt-auto flex transform items-center rounded-lg bg-[#3d717a] px-6 py-2 font-semibold text-white ring-offset-2 ring-offset-current transition duration-500 ease-in-out hover:bg-[#1f2937] focus:outline-none focus:ring-2">
                <a
                  href="https://saude-em-numeros.vercel.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Acessar
                </a>
              </button>
              <p className="mt-2 text-left text-sm md:ml-6 md:mt-0">
                <a
                  href="https://github.com/dev-garcia/saude-em-numeros"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center font-semibold text-[#e45250] hover:text-black md:mb-2 lg:mb-0 "
                >
                  leve-me ao repositório.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projetos;
