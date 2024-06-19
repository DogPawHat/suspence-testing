import { useSuspenseQuery } from '@tanstack/react-query';
import { useStore } from 'zustand';
import { useContext } from 'react';

import { pokemonAndWaitQueryOptions } from './pokemonQueryOptions';
import { TrackFetchStoreContext } from './store';

// export to components
export const usePokemonSuspenseQuery = (
  pokemonName: 'bulbasaur' | 'squirtle' | 'charmander',
) => {
  return useSuspenseQuery(pokemonAndWaitQueryOptions(pokemonName));
};

export const useBulbasaurFetchStatus = () => {
  const store = useContext(TrackFetchStoreContext);

  if (!store) {
    throw new Error(
      'usePokemonSuspenseQuery must be used within a <TrackFetchStore.Provider>',
    );
  }

  return useStore(store, (state) => state.fetchStatus.bulbasaur);
};

export const useSquirtleFetchStatus = () => {
  const store = useContext(TrackFetchStoreContext);

  if (!store) {
    throw new Error(
      'usePokemonSuspenseQuery must be used within a <TrackFetchStore.Provider>',
    );
  }

  return useStore(store, (state) => state.fetchStatus.squirtle);
};

export const useCharmanderFetchStatus = () => {
  const store = useContext(TrackFetchStoreContext);

  if (!store) {
    throw new Error(
      'usePokemonSuspenseQuery must be used within a <TrackFetchStore.Provider>',
    );
  }

  return useStore(store, (state) => state.fetchStatus.charmander);
};
