import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Doacoes from '../Doacoes/Doacoes';
import Contatos from '../FaleConosco/FaleConosco';

// ASSETS
import './Footer.css';
import LogoInstagram from '../../assets/logo-instagram.svg';
import LogoTiktok from '../../assets/logo-tiktok.svg';
import FooterMobiliza from '../../assets/footer-mobiliza.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column logo-column">
          <img src={FooterMobiliza} alt="Mobiliza Amigos" />
        </div>
        <div className="footer-column links-column">
          <ul>
            <li><Link to="/about">Quem Somos</Link></li>
            <li><Link to="/donations">Doações</Link></li>
            <li><Link to="/contact">Contatos</Link></li>
          </ul>
        </div>
        <div className="footer-column contacts-column">
          <h4>Contatos</h4>
          <p>
            📍
            <a
              href="https://www.google.com/maps?q=R.+Mato+Grosso,+612+-+Vila+Santana,+Valinhos+-+SP,+13274-120"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              R. Mato Grosso, 612 -<br /> Vila Santana, Valinhos - SP, 13274-120
            </a>
          </p>
          <p>
            📞
            <a href="tel:+5519989906423" className="footer-link">
              (19) 98990-6423
            </a>
          </p>
          <p>
            📧
            <a href="mailto:tais.mobilizaamigos@gmail.com" className="footer-link">
              tais.mobilizaamigos@gmail.com
            </a>
          </p>
        </div>
        <div className="footer-column social-column">
          <h4>Siga nossas redes:</h4>
          <a
            href="https://www.instagram.com/mobilizaamigos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LogoInstagram} alt="Instagram Mobiliza Amigos" />
          </a>
          <a
            href="https://www.tiktok.com/@mobiliza.amigos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LogoTiktok} alt="TikTok Mobiliza Amigos" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2024 por BN Development | Política de Proteção de Dados
      </div>
    </footer>
  );
}

export default Footer;
