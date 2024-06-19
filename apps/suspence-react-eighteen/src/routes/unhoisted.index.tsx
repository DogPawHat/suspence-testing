import { createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';
import { SuspendedPokemon } from '../components/suspended-pokemon';
import { PokemonList } from '../components/pokemon-list';

export const Route = createFileRoute('/unhoisted/')({
  component: UnhoistedIndexComponent,
});

function UnhoistedIndexComponent() {
  return (
    <div className="p-2">
      <h3>Unhoisted fetches here</h3>
      <PokemonList />
    </div>
  );
}
