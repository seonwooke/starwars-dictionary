import { GetServerSideProps } from "next";
import Layout from "@/components/Layout";
import { Starship } from "@/types/starship";
import { getAllStarships, getStarshipById } from "@/repositories/starshipRepository";
import Link from "next/link";

/**
 * NOTE: SSR-rendered page : 요청 시마다 서버에서 데이터를 fetch해서 HTML로 생성
 * getServerSideProps 사용
 */

type StarshipDetailPageProps = {
  starship: Starship;
};

export default function StarshipDetail({ starship }: StarshipDetailPageProps) {
  const getIdFromUrl = (url: string) => url.split("/").filter(Boolean).pop();

  const formatValue = (value: string | null, unit?: string) => {
    if (value === null || value === "unknown" || value === "n/a") {
      return "Unknown";
    }
    return unit ? `${value} ${unit}` : value;
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-4">
        <h1 className="text-3xl font-bold">{starship.name}</h1>

        <div className="grid grid-cols-2 gap-4">
          <div><strong>Model:</strong> {starship.model}</div>
          <div><strong>Manufacturer:</strong> {starship.manufacturer}</div>
          <div><strong>Starship Class:</strong> {starship.starship_class}</div>
          <div><strong>Cost:</strong> {formatValue(starship.cost_in_credits, "credits")}</div>
          <div><strong>Length:</strong> {starship.length} m</div>
          <div><strong>Max Speed:</strong> {formatValue(starship.max_atmosphering_speed, "km/h")}</div>
          <div><strong>Crew:</strong> {formatValue(starship.crew)}</div>
          <div><strong>Passengers:</strong> {formatValue(starship.passengers)}</div>
          <div><strong>Cargo Capacity:</strong> {formatValue(starship.cargo_capacity, "kg")}</div>
          <div><strong>Consumables:</strong> {formatValue(starship.consumables)}</div>
          <div><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</div>
          <div><strong>MGLT:</strong> {formatValue(starship.MGLT)}</div>
        </div>

        <div className="pt-6 border-t border-gray-200 space-y-2">
          <div>
            <strong>Pilots:</strong>
            {starship.pilots.length === 0 ? (
              <p className="text-gray-500">None</p>
            ) : (
              <ul className="list-disc list-inside">
                {starship.pilots.map((pilotUrl) => {
                  const id = getIdFromUrl(pilotUrl);
                  return (
                    <li key={pilotUrl}>
                      <Link href={`/characters/${id}`} className="text-blue-600 underline">
                        Pilot #{id}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div>
            <strong>Films:</strong>
            <ul className="list-disc list-inside">
              {starship.films.map((filmUrl) => {
                const id = getIdFromUrl(filmUrl);
                return (
                  <li key={filmUrl}>
                    <Link href={`/films/${id}`} className="text-blue-600 underline">
                      Film #{id}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="pt-4">
          <Link href="/starships" className="text-blue-600 underline">
            ← Back to Starships
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const id = params?.id as string;
    const starship = await getStarshipById(id);

    return {
      props: {
        starship,
      },
    };
  } catch (error) {
    console.error("Error fetching starship:", error);
    return {
      notFound: true,
    };
  }
};
