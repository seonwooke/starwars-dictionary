const BASE_URL = "https://swapi.info/api";

export async function fetchCharacters() {
  const response = await fetch(`${BASE_URL}/people`);
  return response.json();
}

export async function fetchCharacterById(id: string) {
  const response = await fetch(`${BASE_URL}/people/${id}`);
  return response.json();
}
