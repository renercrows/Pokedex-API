import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateImg } from '../redux/pokemons/Pokemons';
import pokeball from '../images/pokeball.png';
import pokeball100 from '../images/pokeball-100.png';

function PokemonData() {
  const params = useParams();
  const [img, setImg] = useState(pokeball);
  const [anim, setAnim] = useState(pokeball100);
  const [pokemon, setPokemon] = useState('');
  const [abilities, setAbilities] = useState([]);
  const [moves, setMoves] = useState([]);
  const [types, setTypes] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${params.url}`,
      );
      setPokemon(response.data);
      setImg(response.data.sprites.other.dream_world.front_default);
      setAnim(response.data.sprites.versions['generation-v']['black-white'].animated.front_default);
      setAbilities(response.data.abilities);
      setTypes(response.data.types);
      setMoves(response.data.moves);
      dispatch(updateImg({
        id: params.id, name: response.data.name, img: response.data.sprites.other['official-artwork'].front_default,
      }));
    }
    fetchData();
  }, [params.url, params.id, dispatch]);

  return (
    <div className="pokemon-data">
      <h1 className="pokemon-name">{pokemon.name}</h1>
      <img src={img} alt="pokemon" className="pokemon" />
      <ul className="pokemon-types">
        {types === null
          ? <li>Types</li>
          : types.map((el) => <li key={el.type.name}>{el.type.name}</li>)}
      </ul>
      <h2 className="pokemon-subtitle">Description</h2>
      <ul className="list-description">
        <li className="li-description">
          <p>Base experience</p>
          <p>{pokemon.base_experience}</p>
        </li>
        <li className="li-description">
          <p>height</p>
          <p>{pokemon.height}</p>
        </li>
        <li className="li-description">
          <p>weight</p>
          <p>{pokemon.weight}</p>
        </li>
      </ul>
      <h2 className="pokemon-subtitle">Abilities</h2>
      <ul className="habilities">
        {abilities === null
          ? <li>ability</li>
          : abilities.map((el) => <li key={el.ability.name}>{el.ability.name}</li>)}
      </ul>
      <img src={anim} alt="animation" className="animation" />
      <h2 className="pokemon-subtitle">Moves</h2>
      <div className="moves">
        <ul className="moves-list">
          {moves === null
            ? <li>Move</li>
            : moves.map((el) => <li key={el.move.name} className="move">{el.move.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default PokemonData;
