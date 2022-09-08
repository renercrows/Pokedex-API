import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApi } from '../redux/pokemons/Pokemons';
import SingleCard from './SingleCard';

function DisplayPokemons() {
  const pokemons = useSelector((state) => state.preview);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pokemons.length) dispatch(fetchApi());
  });
  // console.log(pokemons);
  return (
    <div>
      <ul className="list">
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} className="poke-data" to={`/details/${pokemon.id}`}>
            <SingleCard pokemon={pokemon} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default DisplayPokemons;
