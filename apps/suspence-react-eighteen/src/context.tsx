import { QueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useStore } from 'zustand';

import { makeTrackFetchStore } from './store';
import { pokemonAndWaitQueryOptions } from './pokemonQueryOptions';
import { useRouteContext } from '@tanstack/react-router';

// export to main.tsx
export const queryClient = new QueryClient();
export const trackFetchStore = makeTrackFetchStore();

// export to components
export const usePokemonSuspenseQuery = (
  pokemonName: 'bulbasaur' | 'squirtle' | 'charmander',
) => {
  const actions = useStore(trackFetchStore, (s) => s.actions);

  return useSuspenseQuery(pokemonAndWaitQueryOptions(actions, pokemonName));
};

export const useFetchStatus = () => {
  const routeContext = useRouteContext({ from: '__root__' });

  const fetchStatus = useStore(routeContext.trackFetchStore, state => state.fetchStatus);

  return fetchStatus;
};

