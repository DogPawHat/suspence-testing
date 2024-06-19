import { useSuspenseQuery } from '@tanstack/react-query';
import { useStore } from 'zustand';

import { useRouteContext } from '@tanstack/react-router';
import { pokemonAndWaitQueryOptions } from './pokemonQueryOptions';

// export to components
export const usePokemonSuspenseQuery = (
  pokemonName: 'bulbasaur' | 'squirtle' | 'charmander',
) => {
  const context = useRouteContext({ from: "__root__" });
  const actions = useStore(context.trackFetchStore, (s) => s.actions);

  return useSuspenseQuery(pokemonAndWaitQueryOptions(actions, pokemonName));
};

export const useBulbasaurFetchStatus = () => {
  const context = useRouteContext({ from: "__root__" });

  return useStore(context.trackFetchStore, (s) => s.fetchStatus.bulbasaur);
};

export const useSquirtleFetchStatus = () => {
  const context = useRouteContext({ from: "__root__" });

  return useStore(context.trackFetchStore, (s) => s.fetchStatus.squirtle);
};

export const useCharmanderFetchStatus = () => {
  const context = useRouteContext({ from: "__root__" });

  return useStore(context.trackFetchStore, (s) => s.fetchStatus.charmander);
};