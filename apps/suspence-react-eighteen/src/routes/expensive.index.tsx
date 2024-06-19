import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react';
import { SuspendedPokemon } from '../components/suspended-pokemon';
import ExpensiveComponent from '../components/expensive-component';

export const Route = createFileRoute('/expensive/')({
  component: ExpensiveIndexComponent,
});

function ExpensiveIndexComponent() {
  return (
    <div className="p-2">
      <h3>Unhoisted fetches here</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <SuspendedPokemon pokemonId="pikachu" />
        <ExpensiveComponent />
      </Suspense>
    </div>
  );
}
