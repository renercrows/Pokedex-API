import React from 'react';
import { Link } from 'react-router-dom';
import pikachu from '../images/pikachu.png';

function NavBar() {
  return (
    <nav>
      <Link to="/" className="nav-link">
        <img src={pikachu} alt="pikachu" className="home-btn" />
      </Link>
      <h1 className="nav-title">Pokedex</h1>
    </nav>
  );
}

export default NavBar;
