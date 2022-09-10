import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonData from './pages/PokemonData';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main-continer">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:url" element={<PokemonData />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
