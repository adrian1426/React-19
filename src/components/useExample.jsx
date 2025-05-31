import { Suspense, useState } from 'react';
import ShowPokemon from './ShowPokemon';

const useExample = () => {
  const [name, setName] = useState('');

  const fetchPokemon = () => {
    if (!name) return Promise.resolve();

    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => {
        if (res.ok) return res.json();

        return { error: true, message: 'No se encontró el pokemon' }
      })
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder='ej pikachu'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>

      <Suspense fallback={<div>Cargando...</div>}>
        <ShowPokemon fetchPokemon={fetchPokemon()} />
      </Suspense>
    </div>
  );
};

export default useExample;