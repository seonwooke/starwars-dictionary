import { GetServerSideProps } from "next";
import { Starship } from "@/types/starship";
import { getAllStarships } from "@/repositories/starshipRepository";
import StarshipCard from "@/components/StarshipCard";
import Layout from "@/components/Layout";

/**
 * NOTE: SSR-rendered page : 요청 시마다 서버에서 데이터를 fetch해서 HTML로 생성
 * getServerSideProps 사용
 */

type StarshipsPageProps = {
  starships: Starship[];
};

export default function StarshipsPage({ starships }: StarshipsPageProps) {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Starships</h1>      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {starships.map((starship) => (
          <StarshipCard key={starship.url} starship={starship} />
        ))}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<StarshipsPageProps> = async () => {
  try {
    const starships = await getAllStarships();

    return {
      props: {
        starships,
      },
    };
  } catch (error) {
    console.error("Error fetching starships:", error);
    return {
      props: {
        starships: [],
      },
    };
  }
};
