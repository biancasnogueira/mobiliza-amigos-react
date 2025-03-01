import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/logo.webp"; // Usando WebP para otimização
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <div className="container">
        {/* Condição para ocultar o logo quando o menu estiver ativo */}
        {!menuActive && (
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Mobiliza Amigos" width="200" height="50" />
            </Link>
          </div>
        )}

        <nav>
          <ul className={menuActive ? "active" : ""}>
            <li id="Home">
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/about">Quem Somos</Link>
            </li>
            <li>
              <Link to="/donations">Doações</Link>
            </li>
            <li>
              <Link to="/register">Inscrições</Link>
            </li>
            <li>
              <Link to="/contact">Contatos</Link>
            </li>
          </ul>
        </nav>

        {/* Condição para ocultar os botões quando o menu estiver ativo */}
        {!menuActive && (
          <div className="cta-buttons">
            <Link to="/donations" className="button primary">
              Quero Doar
            </Link>
            <Link to="/patrocinador" className="button primary">
              Quero Patrocinar
            </Link>
          </div>
        )}

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuActive ? <HiX size={30} /> : <HiMenu size={30} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
