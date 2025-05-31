import { use } from 'react';

const ShowPokemon = ({ fetchPokemon }) => {
  const pokemon = use(fetchPokemon);

  if (!pokemon) return null;

  if (pokemon.error) {
    return <div>error {pokemon.message}</div>;
  }

  return (
    <div>
      <p>{pokemon.name}</p>
      {/* <img src={pokemon} alt="pokemon" /> */}
    </div>
  );
};

export default ShowPokemon;