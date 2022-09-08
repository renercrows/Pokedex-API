import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import pokeball100 from '../images/pokeball-100.png';

function Header() {
  const pokemonList = useSelector((state) => state.preview);
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

  const filter = (value) => {
    const list = [...pokemonList];
    const filteredData = list.filter((el) => ((el.name.includes(value) || el.id.includes(value))));
    if (filteredData.length) setSearch(value);
    if (filteredData.length === 1) setSearch(filteredData[0].id);
    if (filteredData.length) setSearch(value);
    if (filteredData.length === 1) setSearch(filteredData[0].id);
  };

  const inputHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);
    filter(value);
  };
  const focusHandler = () => {
    setFocus(true);
  };

  return (
    <>
      <section className="middle-bar">
        <h3>Pokemons</h3>
        <div className="search">
          <input
            className="search-bar"
            type="text"
            placeholder="Search a Pokemon"
            onChange={inputHandler}
            onFocus={focusHandler}
            value={input}
            required
          />
          {focus && input ? (
            <span className="searchResults">
              {
                <Link to={`/details/${search}`}>
                  <div>
                    <img src={pokeball100} alt="" className="search-ball" />
                  </div>
                </Link> || null
              }
            </span>
          ) : null}
        </div>
      </section>
    </>
  );
}
export default Header;
