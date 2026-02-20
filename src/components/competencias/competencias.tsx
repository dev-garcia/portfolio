import Image from "next/image";
import type { CompetenciaType } from "@/app/data/competenciasData";

interface CompetenciasProps {
  competencias: CompetenciaType[];
}

const Competencias: React.FC<CompetenciasProps> = ({ competencias }) => {
  if (!competencias || competencias.length === 0) {
    return <p className="text-gray-500">Nenhuma competência disponível.</p>;
  }

  const groupedCompetencias = competencias.reduce(
    (acc, competencia) => {
      const category = competencia.isTech ? "Hard Skills" : "Soft Skills";
      if (!acc[category]) acc[category] = [];
      acc[category].push(competencia);
      return acc;
    },
    {} as Record<string, CompetenciaType[]>,
  );

  return (
    <div className="space-y-6">
      {Object.entries(groupedCompetencias).map(([category, comps]) => (
        <div key={category}>
          <h3 className="mb-4 font-semibold text-xl">{category}</h3>
          <div className="grid grid-cols-1 gap-4 p-2 sm:grid-cols-2 sm:p-4 md:grid-cols-3 lg:grid-cols-4">
            {comps.map((competencia) => (
              <div
                key={competencia.id}
                className="flex flex-col items-center rounded-lg border p-4 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                {competencia.logo && (
                  <Image
                    src={competencia.logo}
                    alt={`${competencia.name} logo`}
                    width={40}
                    height={40}
                    className="mb-3"
                  />
                )}
                <h4 className="mb-2 font-semibold text-lg">{competencia.name}</h4>
                <p className="text-gray-600 text-sm">{competencia.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Competencias;
