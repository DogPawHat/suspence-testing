import { queryOptions } from '@tanstack/react-query';
import { formatRFC3339 } from 'date-fns';

import { getPokemonAndWait } from './pokemon';
import type { TrackFetchStoreActions } from './store';

export const pokemonAndWaitQueryOptions = (
  pokemonName: 'bulbasaur' | 'squirtle' | 'charmander',
) =>
  queryOptions({
    queryKey: ['pokemon', { pokemonName }],
    queryFn: async () => {
      return getPokemonAndWait(pokemonName);
    },
  });
