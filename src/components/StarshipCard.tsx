import Link from "next/link";
import { Starship } from "@/types/starship";

type StarshipCardProps = {
  starship: Starship;
};

export default function StarshipCard({ starship }: StarshipCardProps) {
  const id = starship.url.split("/").pop();

  const formatValue = (value: string | null, unit?: string) => {
    if (value === null || value === "unknown" || value === "n/a") {
      return "Unknown";
    }
    return unit ? `${value} ${unit}` : value;
  };

  return (
    <Link href={`/starships/${id}`} style={{ display: "flex", paddingTop: "16px" }}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 cursor-pointer">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{starship.name}</h2>
        <div className="space-y-1 text-sm text-gray-600">
          <p><span className="font-medium">Model:</span> {starship.model}</p>
          <p><span className="font-medium">Manufacturer:</span> {starship.manufacturer}</p>
          <p><span className="font-medium">Class:</span> {starship.starship_class}</p>
          <p><span className="font-medium">Crew:</span> {formatValue(starship.crew)}</p>
          <p><span className="font-medium">Cost:</span> {formatValue(starship.cost_in_credits, "credits")}</p>
          <p><span className="font-medium">Passengers:</span> {formatValue(starship.passengers)}</p>
          <p><span className="font-medium">Cargo:</span> {formatValue(starship.cargo_capacity, "kg")}</p>
          <p><span className="font-medium">Consumables:</span> {formatValue(starship.consumables)}</p>
          <p><span className="font-medium">Speed:</span> {formatValue(starship.max_atmosphering_speed, "km/h")}</p>
          <p><span className="font-medium">MGLT:</span> {formatValue(starship.MGLT)}</p>
        </div>
      </div>
    </Link>
  );
}
