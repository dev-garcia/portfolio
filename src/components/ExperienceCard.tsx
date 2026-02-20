"use client";

import { useState } from "react";
import type { CompetenciaType } from "@/app/data/competenciasData";
import type { ExperienciaType } from "@/app/data/experienciasData";
import Competencias from "./competencias/competencias";

interface ExperienceCardProps {
  experiencia: ExperienciaType;
  todasCompetencias: CompetenciaType[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experiencia, todasCompetencias }) => {
  const [currentCompetencias, setCurrentCompetencias] = useState<CompetenciaType[] | null>(null);

  const abrirCompetencias = (competencias: CompetenciaType[]) => {
    setCurrentCompetencias(competencias);
  };

  const fecharCompetencias = () => {
    setCurrentCompetencias(null);
  };

  const experienciaCompetencias = todasCompetencias.filter((competencia) =>
    experiencia.competenciasIds.includes(competencia.id),
  );

  return (
    <li className="rounded-lg border p-4 shadow transition-shadow duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <strong className="text-lg">{experiencia.title}</strong>
          <p className="text-gray-600">{experiencia.period}</p>
        </div>
        {experiencia.competenciasIds.length > 0 && (
          <button
            onClick={() => abrirCompetencias(experienciaCompetencias)}
            className="text-verdeAzulado underline"
          >
            Ver competências
          </button>
        )}
      </div>
      <p className="mt-2 text-gray-700">{experiencia.description}</p>

      {/* Modal para Competências */}
      {currentCompetencias && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative h-full w-full overflow-y-auto rounded-lg bg-white p-4 sm:max-h-5/6 sm:w-11/12 sm:max-w-3xl sm:p-6">
            <button
              onClick={fecharCompetencias}
              className="absolute top-4 right-4 rounded-full bg-verdeAzulado p-2 text-white hover:bg-vermelho focus:outline-none"
              aria-label="Fechar modal"
            >
              &times;
            </button>

            <h2 className="mb-4 font-semibold text-2xl">Competências</h2>

            <Competencias competencias={currentCompetencias} />
          </div>
        </div>
      )}
    </li>
  );
};

export default ExperienceCard;
