import { createFileRoute } from '@tanstack/react-router';

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
