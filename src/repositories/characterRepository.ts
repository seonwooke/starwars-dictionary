import { Character } from "@/types/character";
import { fetchCharacters, fetchCharacterById } from "@/lib/characterApi"

export async function getAllCharacters(): Promise<Character[]> {
  const characters: Character[] = await fetchCharacters();
  return characters;
}

export async function getCharacterById(id: string): Promise<Character> {
  const character: Character = await fetchCharacterById(id);
  return character;
}