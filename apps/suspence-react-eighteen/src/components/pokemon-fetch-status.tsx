import { useFetchStatus } from "../context";

export const PokemonFetchStatus = () => {
  const fetchStatus = useFetchStatus();

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Pokemon</th>
          <th>Start Time</th>
          <th>End Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bulbasaur</td>
          <td>{fetchStatus.bulbasaur.startDateTime ?? '---'}</td>
          <td>{fetchStatus.bulbasaur.endDateTime ?? '---'}</td>
        </tr>
        <tr>
          <td>Squirtle</td>
          <td>{fetchStatus.squirtle.startDateTime ?? '---'}</td>
          <td>{fetchStatus.squirtle.endDateTime ?? '---'}</td>
        </tr>
        <tr>
          <td>Charmander</td>
          <td>{fetchStatus.charmander.startDateTime ?? '---'}</td>          
          <td>{fetchStatus.charmander.endDateTime ?? '---'}</td>
        </tr>
      </tbody>
    </table>
  );
};