"use client";

import { useState } from "react";
import { Competencia } from "../data/competenciasData";
import { Experiencia } from "../data/experienciasData";
import Competencias from "./competencias/competencias";

interface ExperienceCardProps {
  experiencia: Experiencia;
  todasCompetencias: Competencia[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experiencia,
  todasCompetencias,
}) => {
  const [currentCompetencias, setCurrentCompetencias] = useState<
    Competencia[] | null
  >(null);

  const abrirCompetencias = (competencias: Competencia[]) => {
    setCurrentCompetencias(competencias);
  };

  const fecharCompetencias = () => {
    setCurrentCompetencias(null);
  };

  const experienciaCompetencias = todasCompetencias.filter((competencia) =>
    experiencia.competenciasIds.includes(competencia.id),
  );

  return (
    <li className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center">
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-4 w-full h-full sm:p-6 sm:w-11/12 sm:max-w-3xl sm:max-h-5/6 overflow-y-auto relative">
            <button
              onClick={fecharCompetencias}
              className="absolute top-4 right-4 bg-verdeAzulado text-white p-2 rounded-full hover:bg-vermelho focus:outline-none"
              aria-label="Fechar modal"
            >
              &times;
            </button>

            {/* Título do Modal */}
            <h2 className="text-2xl font-semibold mb-4">Competências</h2>

            {/* Componente Competências */}
            <Competencias competencias={currentCompetencias} />
          </div>
        </div>
      )}
    </li>
  );
};

export default ExperienceCard;
