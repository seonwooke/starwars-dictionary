import { Starship } from "@/types/starship";
import { fetchStarships, fetchStarshipById } from "@/lib/starshipsApi";

export async function getAllStarships(): Promise<Starship[]> {
  const response = await fetchStarships();
  return response;
}

export async function getStarshipById(id: string): Promise<Starship> {
  const response = await fetchStarshipById(id);
  return response;
} 