import Link from "next/link";
import { Character } from "@/types/character";

type Props = {
  character: Character;
};

export default function CharacterCard({ character }: Props) {
  const id = character.url.split("/").filter(Boolean).pop(); // id 추출

  return (
    <Link href={`/characters/${id}`} style={{ display: "flex", paddingTop: "16px" }}>
      <div className="rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer hover:bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{character.name}</h2>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Gender:</span> {character.gender}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Birth Year:</span> {character.birth_year}
        </p>
      </div>
    </Link>
  );
}
