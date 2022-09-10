import React from 'react';
import DisplayPokemons from '../components/DisplayPokemons';
import SinglePokemonsMore from '../components/SinglePokemon';
import MiddleBar from '../components/MiddleBar';

function Home() {
  return (
    <div>
      <SinglePokemonsMore />
      <MiddleBar />
      <DisplayPokemons />
    </div>
  );
}

export default Home;
