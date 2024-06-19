import { queryOptions } from '@tanstack/react-query';
import { formatRFC3339 } from 'date-fns';

import { getPokemonAndWait } from './pokemon';
import type { TrackFetchStoreActions } from './store';

export const pokemonAndWaitQueryOptions = (actions: TrackFetchStoreActions, pokemonName: 'bulbasaur' | 'squirtle' | 'charmander') =>
  queryOptions({
    queryKey: ['pokemon', { pokemonName }],
    queryFn: async() => {
      actions.startTrackFetch(pokemonName, formatRFC3339(new Date()));
      const pokemon = await getPokemonAndWait(pokemonName);
      actions.endTrackFetch(pokemonName, formatRFC3339(new Date()));
      return pokemon;
    },
  });
