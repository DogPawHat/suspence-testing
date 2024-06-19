import { useSuspenseQuery } from '@tanstack/react-query';
import { pokemonAndWaitQueryOptions } from '../pokemonQueryOptions';
import { usePokemonSuspenseQuery } from '../context';

export const SuspendedPokemon = ({ pokemonId }: { pokemonId: string }) => {
  const { data } = usePokemonSuspenseQuery(pokemonId);

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <ul>
        <li>Pokedex No: {data.id}</li>
        <li>Name: {data.name}</li>
        <li>Type: {data.types.map((type) => type.type.name).join(', ')}</li>
      </ul>
      <img src={data.sprites.front_default!} alt={data.name} />
    </div>
  );
};
