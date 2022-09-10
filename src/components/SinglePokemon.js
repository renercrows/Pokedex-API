import React, { useState, useEffect } from 'react';
import pokeball100 from '../images/pokeball-100.png';

function SinglePokemons() {
  const [img] = useState(pokeball100);

  useEffect(() => {
    window.scrollTo(20, 0);
  });

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
