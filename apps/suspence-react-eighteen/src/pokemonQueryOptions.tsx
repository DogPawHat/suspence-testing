import { queryOptions } from '@tanstack/react-query';
import { getPokemonAndWait } from './pokemon';

export const pokemonAndWaitQueryOptions = (pokemonName: string) =>
  queryOptions({
    queryKey: ['pokemon', { pokemonName }],
    queryFn: () => getPokemonAndWait(pokemonName),
  });
