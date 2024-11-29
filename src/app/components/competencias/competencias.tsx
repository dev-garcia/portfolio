import Image from "next/image";
import { Competencia } from "../../data/competenciasData";

interface CompetenciasProps {
  competencias: Competencia[];
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
    {} as Record<string, Competencia[]>,
  );

  return (
    <div className="space-y-6">
      {Object.entries(groupedCompetencias).map(([category, comps]) => (
        <div key={category}>
          <h3 className="text-xl font-semibold mb-4">{category}</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 sm:p-4">
            {comps.map((competencia) => (
              <div
                key={competencia.id}
                className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
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
                <h4 className="font-semibold text-lg mb-2">
                  {competencia.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {competencia.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Competencias;
