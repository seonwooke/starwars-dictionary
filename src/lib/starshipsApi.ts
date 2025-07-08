const BASE_URL = "https://swapi.info/api";

export async function fetchStarships() {
  const response = await fetch(`${BASE_URL}/starships`);
  return response.json();
}

export async function fetchStarshipById(id: string) {
  const response = await fetch(`${BASE_URL}/starships/${id}`);
  return response.json();
}