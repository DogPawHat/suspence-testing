import { useBulbasaurFetchStatus, useCharmanderFetchStatus, useSquirtleFetchStatus } from '../hooks';

const BulbasaurStatus = () => {
  const fetchStatus = useBulbasaurFetchStatus();

  return (
    <tr>
      <td>Bulbasaur</td>
      <td>{fetchStatus.startDateTime ?? '---'}</td>
      <td>{fetchStatus.endDateTime ?? '---'}</td>
    </tr>
  );
};

const SquirtleStatus = () => {
  const fetchStatus = useSquirtleFetchStatus();

  return (
    <tr>
      <td>Squirtle</td>
      <td>{fetchStatus.startDateTime ?? '---'}</td>
      <td>{fetchStatus.endDateTime ?? '---'}</td>
    </tr>
  );
};

const CharmanderStatus = () => {
  const fetchStatus = useCharmanderFetchStatus();

  return (
    <tr>
      <td>Charmander</td>
      <td>{fetchStatus.startDateTime ?? '---'}</td>
      <td>{fetchStatus.endDateTime ?? '---'}</td>
    </tr>
  );
};


export const PokemonFetchStatus = () => {
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
        <BulbasaurStatus />
        <SquirtleStatus />
        <CharmanderStatus />
      </tbody>
    </table>
  );
};