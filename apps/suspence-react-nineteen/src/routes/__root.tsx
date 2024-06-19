import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PokemonFetchStatus } from '../components/pokemon-fetch-status';
import type { QueryClient } from '@tanstack/react-query';
import type { StoreApi } from 'zustand';
import type { TrackFetchStore } from '../store';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  trackFetchStore: StoreApi<TrackFetchStore>;
}>()({
  beforeLoad: async ({ context }) => {
    const actions = context.trackFetchStore.getState().actions;
    context.queryClient.clear();
    actions.clearTrackFetch();
  },
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to={'/unhoisted'}
          activeProps={{
            className: 'font-bold',
          }}
        >
          Unhoisted Fetches
        </Link>{' '}
        <Link
          to="/hoisted"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Hoisted Fetches
        </Link>
      </div>
      <hr />
      <PokemonFetchStatus />
      <Outlet />
      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
