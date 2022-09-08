import React from 'react';
import DisplayPokemons from '../components/DisplayPokemons';
import SinglePokemons from '../components/SinglePokemon';
import MiddleBar from '../components/MiddleBar';

function Home() {
  return (
    <div>
      <SinglePokemons />
      <MiddleBar />
      <DisplayPokemons />
    </div>
  );
}

export default Home;
