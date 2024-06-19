import { createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';
import { SuspendedPokemon } from '../components/suspended-pokemon';

export const Route = createFileRoute('/unhoisted/')({
  component: UnhoistedIndexComponent,
});

function UnhoistedIndexComponent() {
  return (
    <div className="p-2">
      <h3>Unhoisted fetches here</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <SuspendedPokemon pokemonId="bulbasaur" />
        <SuspendedPokemon pokemonId="squirtle" />
        <SuspendedPokemon pokemonId="charmander" />
      </Suspense>
    </div>
  );
}
