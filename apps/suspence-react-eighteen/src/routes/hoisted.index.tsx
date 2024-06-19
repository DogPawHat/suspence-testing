import { createFileRoute } from '@tanstack/react-router';

import { pokemonAndWaitQueryOptions } from '../pokemonQueryOptions';
import { PokemonList } from '../components/pokemon-list';

export const Route = createFileRoute('/hoisted/')({
  loader: ({ context }) => {
    const actions = context.trackFetchStore.getState().actions;

    context.queryClient.prefetchQuery(pokemonAndWaitQueryOptions(actions, 'bulbasaur'));
    context.queryClient.prefetchQuery(pokemonAndWaitQueryOptions(actions, 'squirtle'));
    context.queryClient.prefetchQuery(pokemonAndWaitQueryOptions(actions, 'charmander'));
  },
  component: HoistedIndexComponent,
});

function HoistedIndexComponent() {
  return (
    <div className="p-2">
      <h3>Hoisted fetches here</h3>
      <PokemonList />
    </div>
  );
}
