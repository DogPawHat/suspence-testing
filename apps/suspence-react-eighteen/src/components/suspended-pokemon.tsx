import { usePokemonSuspenseQuery } from '../hooks';

export const SuspendedPokemon = ({ pokemonId }: { pokemonId: 'bulbasaur' | 'squirtle' | 'charmander' | 'pikachu' }) => {
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
