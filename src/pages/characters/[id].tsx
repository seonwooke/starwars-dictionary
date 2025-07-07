import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "@/components/Layout";
import { Character } from "@/types/character";
import { getAllCharacters, getCharacterById } from "@/repositories/characterRepository";
import Link from "next/link";

/**
 * NOTE: SSG-rendered page : 빌드 시 데이터를 미리 fetch해서 HTML로 생성
 * getStaticProps 사용
 */

type CharacterDetailPageProps = {
  character: Character;
};

export default function CharacterDetail({ character }: CharacterDetailPageProps) {
  const getIdFromUrl = (url: string) => url.split("/").filter(Boolean).pop();

  return (
    <Layout>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-4">
        <h1 className="text-3xl font-bold">{character.name}</h1>

        <div className="grid grid-cols-2 gap-4">
          <div><strong>Height:</strong> {character.height} cm</div>
          <div><strong>Mass:</strong> {character.mass} kg</div>
          <div><strong>Hair Color:</strong> {character.hair_color}</div>
          <div><strong>Skin Color:</strong> {character.skin_color}</div>
          <div><strong>Eye Color:</strong> {character.eye_color}</div>
          <div><strong>Birth Year:</strong> {character.birth_year}</div>
          <div><strong>Gender:</strong> {character.gender}</div>
        </div>

        <div className="pt-6 border-t border-gray-200 space-y-2">
          <div>
            <strong>Homeworld:</strong>{" "}
            <Link href={`/planets/${getIdFromUrl(character.homeworld)}`} className="text-blue-600 underline">
              {character.homeworld}
            </Link>
          </div>

          <div>
            <strong>Films:</strong>
            <ul className="list-disc list-inside">
              {character.films.map((filmUrl) => {
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

          <div>
            <strong>Starships:</strong>
            {character.starships.length === 0 ? (
              <p className="text-gray-500">None</p>
            ) : (
              <ul className="list-disc list-inside">
                {character.starships.map((url) => {
                  const id = getIdFromUrl(url);
                  return (
                    <li key={url}>
                      <Link href={`/starships/${id}`} className="text-blue-600 underline">
                        Starship #{id}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div>
            <strong>Vehicles:</strong>
            {character.vehicles.length === 0 ? (
              <p className="text-gray-500">None</p>
            ) : (
              <ul className="list-disc list-inside">
                {character.vehicles.map((url) => {
                  const id = getIdFromUrl(url);
                  return (
                    <li key={url}>
                      <Link href={`/vehicles/${id}`} className="text-blue-600 underline">
                        Vehicle #{id}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  const characters = await getAllCharacters();
  const paths = characters.map((char) => {
    const id = char.url.split("/").filter(Boolean).pop();
    return { params: { id } };
  });

  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const character = await getCharacterById(id);

  return {
    props: {
      character,
    },
  };
};