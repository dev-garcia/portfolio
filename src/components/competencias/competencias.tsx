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
            {comps.map((competencia) => {
              const Icon = competencia.icon;
              return (
                <div
                  key={competencia.id}
                  className="
                    flex flex-col items-center rounded-lg border p-4
                    text-center shadow-sm transition-all duration-300
                    hover:-translate-y-1 hover:shadow-md
                  "
                >
                  {Icon && (
                    <div className="mb-3">
                      <Icon size={40} />
                    </div>
                  )}
                  <h4 className="mb-2 font-semibold text-lg">{competencia.name}</h4>
                  <p className="text-gray-600 text-sm">{competencia.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Competencias;
