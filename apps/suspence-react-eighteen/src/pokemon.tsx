// using this just for the type, I don't trust the sdk for this experiment
import type { Pokemon } from "pokeapi-js-wrapper";

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/';

const pokemonEndpointUrl = (pokemonName: string) => new URL(`pokemon/${pokemonName}`, POKEAPI_BASE_URL).href;

// Query function
// Get pokemon by name and wait 1.5 seconds after the request
export const getPokemonAndWait = async (pokemonName: string) => {
  const res = await fetch(pokemonEndpointUrl(pokemonName), {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch pokemon');
  }

  const data = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 1500));

  return data as Pokemon;
};
