import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export function SingleCard({ pokemon }) {
  const [img, setImg] = useState([]);

  useEffect(() => {
    async function fetchImg() {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
      setImg(response.data.sprites.other['official-artwork'].front_default);
    }
    fetchImg();
  });

  return (
    <div className="single-card">
      { pokemon.img ? (<img src={pokemon.img} alt="pokemon" className="single-card-img" />) : (<img src={img} alt="pokeball" className="single-card-img" />)}
      <h2 className="card-name">
        {pokemon.name}
      </h2>
      <p className="card-number">
        {pokemon.id < 10 ? (`0${pokemon.id}`) : pokemon.id}
      </p>
    </div>
  );
}

SingleCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default useEffect.reducer;
