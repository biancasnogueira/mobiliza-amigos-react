import { Link } from 'react-router-dom';

//ASSETS
import './Header.css';
import Logo from '../../assets/logo.svg';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Mobiliza Amigos" />
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/about">Quem Somos</Link></li>
            <li><Link to="/donations">Doações</Link></li>
            <li><Link to="/register">Inscrições</Link></li>
            <li><Link to="/contact">Contatos</Link></li>
          </ul>
        </nav>
        <div className="cta-buttons">
          <Link to="/donations" className="btn doar">Quero Doar</Link>
          <Link to="/register" className="btn patrocinar">Quero Patrocinar</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
