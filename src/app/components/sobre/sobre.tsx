"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { competenciasList } from "../../data/competenciasData";
import { experienciasList } from "../../data/experienciasData";
import { formacoesList } from "../../data/formacoesData";
import ExperienceCard from "../ExperienceCard";
import Competencias from "../competencias/competencias";

function CTA() {
  return (
    <div>
      <a
        href="/images/Currículo Cristian Garcia.pdf"
        download
        className="inline-block rounded bg-[#1f2937] px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white transition duration-150 ease-in-out hover:bg-black"
      >
        Download CV
      </a>
    </div>
  );
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sobre = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nonTechExperiencias = experienciasList.filter(
    (experiencia) => !experiencia.isTech,
  );

  return (
    <>
      <section id="sobre" className="bubbles py-10 lg:min-h-screen">
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

        <div className="container mx-auto px-6">
          <div className="text-center">
            <Image
              src="/images/Cristian_cyberpunk_8k-Dois.png"
              alt="Cristian Garcia"
              width={128}
              height={128}
              className="rounded-full mx-auto"
            />
            <h1 className="text-4xl font-bold mt-4">Cristian Garcia Maia</h1>
            <p className="mt-2 text-lg text-gray-600">
              Analista e Desenvolvedor de Sistemas
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-center text-gray-700">
              Profissional focado e adaptável, com facilidade para trabalhar em
              equipe e flexibilidade para mudanças. Graduado em Análise e
              Desenvolvimento de Sistemas, atuo em uma start-up que oferece
              soluções sustentáveis para o ciclo de resíduos, onde tenho minha
              primeira experiência híbrida na área de tecnologia. Busco sempre
              evoluir tecnicamente e me tornar um profissional cada vez mais
              completo.
            </p>

            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="https://github.com/dev-garcia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-black"
              >
                <BsGithub size={24} />
                <span>GitHub</span>
              </a>
              <CTA />
              <a
                href="https://www.linkedin.com/in/cristian-garcia-web/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-700 hover:text-blue-900"
              >
                <BsLinkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="mt-12 w-full max-w-2xl mx-auto">
            <Tab.Group>
              <Tab.List className="flex space-x-4 border-b border-gray-200">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "py-2 px-4 text-sm font-medium",
                      selected
                        ? "border-b-2 border-azulPiscina text-vermelho"
                        : "text-gray-600 hover:text-vermelho",
                    )
                  }
                >
                  Experiências
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "py-2 px-4 text-sm font-medium",
                      selected
                        ? "border-b-2 border-azulPiscina text-vermelho"
                        : "text-gray-600 hover:text-vermelho",
                    )
                  }
                >
                  Formações
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "py-2 px-4 text-sm font-medium",
                      selected
                        ? "border-b-2 border-azulPiscina text-vermelho"
                        : "text-gray-600 hover:text-vermelho",
                    )
                  }
                >
                  Competências
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-6">
                <Tab.Panel>
                  <ul className="space-y-4">
                    {experienciasList
                      .filter((experiencia) => experiencia.isTech)
                      .map((experiencia) => (
                        <ExperienceCard
                          key={experiencia.id}
                          experiencia={experiencia}
                          todasCompetencias={competenciasList}
                        />
                      ))}
                  </ul>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-4 text-verdeAzulado underline"
                  >
                    Ver mais experiências
                  </button>

                  {/* Modal para Mais Experiências Profissionais Não Técnicas */}
                  {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                      <div className="bg-white rounded-lg p-6 w-11/12 max-w-2xl overflow-y-auto max-h-full">
                        <h3 className="text-xl font-semibold mb-4">
                          Experiências Profissionais Não Técnicas
                        </h3>
                        <ul className="space-y-4">
                          {nonTechExperiencias.map((experiencia) => (
                            <li key={experiencia.id} className="border-b pb-4">
                              <strong className="text-lg">
                                {experiencia.title}
                              </strong>
                              <p className="text-gray-600">
                                {experiencia.period}
                              </p>
                              <p className="mt-2 text-gray-700">
                                {experiencia.description}
                              </p>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="mt-6 bg-verdeAzulado text-white px-4 py-2 rounded hover:bg-bg"
                        >
                          Fechar
                        </button>
                      </div>
                    </div>
                  )}
                </Tab.Panel>
                <Tab.Panel>
                  <ul className="space-y-4">
                    {formacoesList.map((formacao) => (
                      <li key={formacao.id} className="border-b pb-4">
                        <strong className="text-lg">{formacao.titulo}</strong>
                        <p className="text-gray-600">{formacao.periodo}</p>
                        <p className="mt-2 text-gray-700">
                          {formacao.descricao}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
                <Tab.Panel>
                  <Competencias competencias={competenciasList} />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
