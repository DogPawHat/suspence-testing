import { createFileRoute } from '@tanstack/react-router';

import { pokemonAndWaitQueryOptions } from '../pokemonQueryOptions';
import { PokemonList } from '../components/pokemon-list';

export const Route = createFileRoute('/hoisted/')({
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(pokemonAndWaitQueryOptions('bulbasaur'));
    context.queryClient.prefetchQuery(pokemonAndWaitQueryOptions('squirtle'));
    context.queryClient.prefetchQuery(pokemonAndWaitQueryOptions('charmander'));
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
