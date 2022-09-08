import React, { useState, useEffect } from 'react';
import axios from 'axios';
import pokeball100 from '../images/pokeball-100.png';

function SinglePokemons() {
  const [img, setImg] = useState(pokeball100);

  useEffect(() => {
    async function fetchData() {
      const random = Math.floor(Math.random() * 150) + 1;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`);
      setImg(response.data.sprites.versions.animated.front_default);
    }
    fetchData();
  }, []);

  return (
    <div className="poke">
      <img
        src={img}
        alt="random pokemon"
        className="poke-img"
      />
      <div>
        <p className="single-name">Pokemon Full List</p>
      </div>
    </div>
  );
}

export default SinglePokemons;
