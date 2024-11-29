import { Link } from 'react-router-dom'

//ASSETS
import './Header.css'
import Logo from '../../assets/logo.svg'

function Header() {
    return (

        <header>
    <div class="container">
      <div class="logo">
        <Link to="/"><img src={Logo} alt="Mobiliza Amigos" /></Link>
      </div>
      <nav>
        <ul class="nav-links">
          <li><Link to="#home">Início</Link></li>
          <li><Link to="#sobre">Quem Somos</Link></li>
          <li><Link to="#doacoes">Doações</Link></li>
          <li><Link to="#inscricoes">Inscrições</Link></li>
          <li><Link to="#contato">Contatos</Link></li>
        </ul>
      </nav>
      <div class="cta-buttons">
        <a href="#doar" class="btn doar">Quero Doar</a>
        <a href="#patrocinar" class="btn patrocinar">Quero Patrocinar</a>
      </div>
    </div>
  </header>

    )
}

export default Header