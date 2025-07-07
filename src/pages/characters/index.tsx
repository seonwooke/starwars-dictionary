import { GetStaticProps } from "next";
import { Character } from "@/types/character";
import { getAllCharacters } from "@/repositories/characterRepository";
import CharacterCard from "@/components/CharacterCard";
import Layout from "@/components/Layout";

/**
 * NOTE: SSG-rendered page : 빌드 시 데이터를 미리 fetch해서 HTML로 생성
 * getStaticProps 사용
 */


type CharactersPageProps = {
  characters: Character[];
};

export default function CharactersPage({ characters }: CharactersPageProps) {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((char) => (
          <CharacterCard key={char.url} character={char} />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<CharactersPageProps> = async () => {
  const characters = await getAllCharacters();

  return {
    props: {
      characters,
    },
    revalidate: 60 * 60, // 1시간마다 재생성 (선택 사항)
  };
};
