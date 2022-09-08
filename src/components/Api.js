import React, { useState, useEffect } from 'react';

export default function Api() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async (url) => {
      const answer = await fetch(url);
      const data = await answer.json();
      data.results.forEach(async (el) => {
        const res = await fetch(el.url);
        const json = await res.json();
        const pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_shiny,
          stats: json.stats[0].base_stat,
        };
        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };
    getPokemons('https://pokeapi.co/api/v2/pokemon/');
  }, []);
  return (
    <>
      {pokemons.length === 0 ? <p>Cargando...</p> : (
        pokemons.map((el) => (
          <figure key={el.id}>
            <img src={el.avatar} alt={el.name} />
            <h3>{el.name}</h3>
            <p>Basic Stats</p>
            <p>{el.stats}</p>
          </figure>
        )))}
    </>
  );
}
