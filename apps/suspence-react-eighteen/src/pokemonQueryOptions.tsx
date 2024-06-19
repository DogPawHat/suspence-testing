import { queryOptions } from '@tanstack/react-query';

import { getPokemonAndWait } from './pokemon';

export const pokemonAndWaitQueryOptions = (
  pokemonName: 'bulbasaur' | 'squirtle' | 'charmander' | 'pikachu',
) =>
  queryOptions({
    queryKey: ['pokemon', { pokemonName }],
    queryFn: async () => {
      return getPokemonAndWait(pokemonName);
    },
  });
