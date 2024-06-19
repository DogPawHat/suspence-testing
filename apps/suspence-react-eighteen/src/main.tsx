import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { formatRFC3339 } from 'date-fns';

import { routeTree } from './routeTree.gen';
import { TrackFetchStoreContext, makeTrackFetchStore } from './store';

const queryCache = new QueryCache();

queryCache.subscribe((event) => {
  if (event.query.queryKey[0] === 'pokemon') {
    const pokemonName = event.query.queryKey[1].pokemonName as
      | 'bulbasaur'
      | 'squirtle'
      | 'charmander';
    const stateSnapshot = trackFetchStore.getState();

    // check if query is first added
    if (event.type === 'added') {
      const startDateTime = formatRFC3339(new Date());
      stateSnapshot.actions.startTrackFetch(pokemonName, startDateTime);
      return;
    }

    if (
      event.type === 'updated' &&
      event.query.state.status === 'success' &&
      stateSnapshot.fetchStatus[pokemonName].endDateTime === null
    ) {
      const endDateTime = formatRFC3339(new Date());
      stateSnapshot.actions.endTrackFetch(pokemonName, endDateTime);
      return;
    }

    if (
      event.type === 'removed'
    ) {
      stateSnapshot.actions.clearTrackFetch();
      return;
    }
  }
});

// export to main.tsx
const queryClient = new QueryClient({
  queryCache,
});
const trackFetchStore = makeTrackFetchStore();

queryClient.getQueryCache();

// Set up a Router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: false,
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <TrackFetchStoreContext.Provider value={trackFetchStore}>
        <RouterProvider router={router} />
      </TrackFetchStoreContext.Provider>
    </QueryClientProvider>,
  );
}
