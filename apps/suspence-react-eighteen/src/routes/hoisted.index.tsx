import { createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';

import { SuspendedPokemon } from '../components/suspended-pokemon';
import { pokemonAndWaitQueryOptions } from '../pokemonQueryOptions';

// @ts-ignore
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
      <Suspense fallback={<div>Loading...</div>}>
        <SuspendedPokemon pokemonId="bulbasaur" />
        <SuspendedPokemon pokemonId="squirtle" />
        <SuspendedPokemon pokemonId="charmander" />
      </Suspense>
    </div>
  );
}
