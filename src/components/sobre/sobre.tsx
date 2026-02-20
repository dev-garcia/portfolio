"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { competenciasList } from "@/app/data/competenciasData";
import { experienciasList } from "@/app/data/experienciasData";
import { formacoesList } from "@/app/data/formacoesData";
import Competencias from "../competencias/competencias";
import ExperienceCard from "../ExperienceCard";

function CTA() {
  return (
    <div>
      <a
        href="/images/Currículo Cristian Garcia.pdf"
        download
        className="inline-block rounded bg-[#1f2937] px-6 pt-2.5 pb-2 font-medium text-white text-xs uppercase transition duration-150 ease-in-out hover:bg-black"
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

  const nonTechExperiencias = experienciasList.filter((experiencia) => !experiencia.isTech);

  return (
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
            className="mx-auto rounded-full"
          />
          <h1 className="mt-4 font-bold text-4xl">Cristian Garcia Maia</h1>
          <p className="mt-2 text-gray-600 text-lg">Analista e Desenvolvedor de Sistemas</p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-700">
            Profissional focado e adaptável, com facilidade para trabalhar em equipe e flexibilidade
            para mudanças. Graduado em Análise e Desenvolvimento de Sistemas, atuo em uma start-up
            que oferece soluções sustentáveis para o ciclo de resíduos, onde tenho minha primeira
            experiência híbrida na área de tecnologia. Busco sempre evoluir tecnicamente e me tornar
            um profissional cada vez mais completo.
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

        <div className="mx-auto mt-12 w-full max-w-2xl">
          <TabGroup>
            <TabList className="flex space-x-4 border-gray-200 border-b">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "px-4 py-2 font-medium text-sm",
                    selected
                      ? "border-azulPiscina border-b-2 text-vermelho"
                      : "text-gray-600 hover:text-vermelho",
                  )
                }
              >
                Experiências
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "px-4 py-2 font-medium text-sm",
                    selected
                      ? "border-azulPiscina border-b-2 text-vermelho"
                      : "text-gray-600 hover:text-vermelho",
                  )
                }
              >
                Formações
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "px-4 py-2 font-medium text-sm",
                    selected
                      ? "border-azulPiscina border-b-2 text-vermelho"
                      : "text-gray-600 hover:text-vermelho",
                  )
                }
              >
                Competências
              </Tab>
            </TabList>
            <TabPanels className="mt-6">
              <TabPanel>
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
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="max-h-full w-11/12 max-w-2xl overflow-y-auto rounded-lg bg-white p-6">
                      <h3 className="mb-4 font-semibold text-xl">
                        Experiências Profissionais Não Técnicas
                      </h3>
                      <ul className="space-y-4">
                        {nonTechExperiencias.map((experiencia) => (
                          <li key={experiencia.id} className="border-b pb-4">
                            <strong className="text-lg">{experiencia.title}</strong>
                            <p className="text-gray-600">{experiencia.period}</p>
                            <p className="mt-2 text-gray-700">{experiencia.description}</p>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="mt-6 rounded bg-verdeAzulado px-4 py-2 text-white hover:bg-bg"
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                )}
              </TabPanel>
              <TabPanel>
                <ul className="space-y-4">
                  {formacoesList.map((formacao) => (
                    <li key={formacao.id} className="border-b pb-4">
                      <strong className="text-lg">{formacao.titulo}</strong>
                      <p className="text-gray-600">{formacao.periodo}</p>
                      <p className="mt-2 text-gray-700">{formacao.descricao}</p>
                    </li>
                  ))}
                </ul>
              </TabPanel>
              <TabPanel>
                <Competencias competencias={competenciasList} />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
