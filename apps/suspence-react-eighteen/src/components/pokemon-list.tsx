import { Suspense } from 'react';
import { SuspendedPokemon } from './suspended-pokemon';

export const PokemonList = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Suspense fallback={<div>Loading...</div>}>
        <SuspendedPokemon pokemonId="bulbasaur" />
        <SuspendedPokemon pokemonId="squirtle" />
        <SuspendedPokemon pokemonId="charmander" />
      </Suspense>
    </div>
  );
};
