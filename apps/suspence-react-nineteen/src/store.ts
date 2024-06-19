import { createStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type FetchStatus = {
  /** timestamp of when the request was made */
  startDateTime: string | null;
  /** timestamp of when the request was completed */
  endDateTime: string | null;
};

type FetchStatusDirectory = {
  bulbasaur: FetchStatus;
  squirtle: FetchStatus;
  charmander: FetchStatus;
};

type PokemonToFetch = keyof FetchStatusDirectory;

type TrackFetchStoreState = {
  fetchStatus: FetchStatusDirectory;
};

export type TrackFetchStoreActions = {
  startTrackFetch: (pokemonName: PokemonToFetch, dateStarted: string) => void;
  endTrackFetch: (pokemonName: PokemonToFetch, dateEnded: string) => void;
  clearTrackFetch: () => void;
};

export type TrackFetchStore = TrackFetchStoreState & {
  actions: TrackFetchStoreActions;
};

const initalState = {
  fetchStatus: {
    bulbasaur: {
      startDateTime: null,
      endDateTime: null,
    },
    squirtle: {
      startDateTime: null,
      endDateTime: null,
    },
    charmander: {
      startDateTime: null,
      endDateTime: null,
    },
  },
} satisfies TrackFetchStoreState;

export const makeTrackFetchStore = () => {
  return createStore<TrackFetchStore>()(
    immer((set, get) => ({
      ...initalState,
      actions: {
        /**
         * Starts a track fetch for a pokemon
         * @param pokemonName
         * @param dateStarted
         */
        startTrackFetch: (pokemonName: PokemonToFetch, dateStarted: string) => {
          set((state) => {
            state.fetchStatus[pokemonName].startDateTime = dateStarted;
          });
        },
        /**
         * Ends a track fetch for a pokemon
         * @param pokemonName
         * @param dateEnded
         */
        endTrackFetch: (pokemonName: PokemonToFetch, dateEnded: string) => {
          set((state) => {
            state.fetchStatus[pokemonName].endDateTime = dateEnded;
          });
        },
        /**
         * Clears all track fetches
         */
        clearTrackFetch: () => {
          set(() => {
            return initalState;
          });
        },
      },
    })),
  );
};

