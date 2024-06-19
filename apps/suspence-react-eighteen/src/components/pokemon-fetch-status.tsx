import { useRouter } from '@tanstack/react-router';
import { useBulbasaurFetchStatus, useCharmanderFetchStatus, usePikachuFetchStatus, useSquirtleFetchStatus } from '../hooks';
import { Route as ExpensiveIndexRoute } from '../routes/expensive.index';


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


const PikachuStatus = () => {
  const fetchStatus = usePikachuFetchStatus();

  return (
    <tr>
      <td>Pikachu</td>
      <td>{fetchStatus.startDateTime ?? '---'}</td>
      <td>{fetchStatus.endDateTime ?? '---'}</td>
    </tr>
  );
};


export const PokemonFetchStatus = () => {
  const router = useRouter();

  const isExpensive = router.latestLocation.pathname.includes('/expensive');

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
        {!isExpensive && <>
          <BulbasaurStatus />
          <SquirtleStatus />
          <CharmanderStatus />
        </>}
        {isExpensive && <PikachuStatus />}
      </tbody>
    </table>
  );
};