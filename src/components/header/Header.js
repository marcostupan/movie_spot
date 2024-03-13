import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo_moviespot_blu.png";

const Header = () => {
  // Logica da Busca
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    window.location.href = `/search/${searchTerm}`;
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit(event);
    }
  };
  // Fim logica da busca

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="header_icon" src={Logo}></img>
        </Link>
        <Link to="/movies/popular">
          <span>Filmes Populares</span>
        </Link>
        <Link to="/movies/top_rated" hidden>
          <span>Mais avaliados</span>
        </Link>
        <Link to="/movies/upcoming" hidden>
          <span>Estréias</span>
        </Link>
      </div>
      {/* Botão de busca */}
      <div className="headerRight">
        <input
          type="text"
          placeholder="Buscar filmes..."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={handleSearchSubmit}>Buscar</button>
      </div>
    </div>
  );
};

export default Header;
