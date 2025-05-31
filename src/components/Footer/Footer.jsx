import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Doacoes from "../Doacoes/Doacoes";
import Contatos from "../FaleConosco/FaleConosco";

// ASSETS
import "./Footer.css";
import LogoInstagram from "../../assets/logo-instagram.webp";
import LogoTiktok from "../../assets/logo-tiktok.webp";
import FooterMobiliza from "../../assets/footer-mobiliza.webp";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column logo-column">
          <img src={FooterMobiliza} alt="Mobiliza Amigos" />
        </div>
        <div className="footer-column links-column">
          <ul>
            <li>
              <Link to="/about">Quem Somos</Link>
            </li>
            <li>
              <Link to="/donations">Doações</Link>
            </li>
            <li>
              <Link to="/contact">Contatos</Link>
            </li>
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
            <a href="tel:+5519999063242" className="footer-link">
              (19) 99906-3242
            </a>
          </p>
          <p>
            📧
            <a
              href="mailto:contato.mobilizaamigos@gmail.com"
              className="footer-link"
            >
              contato.mobilizaamigos@gmail.com
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
        © 2025 Mobiliza Amigos. Todos os direitos reservados. <br />
        <Link to="/cookie-policy" className="footer-link">
          Política de Privacidade
        </Link>
        <br />
        Desenvolvido por{" "}
        <a
          href="https://www.biancanogueira.com/"
          target="_blank"
          className="footer-link"
        >
          Sovich .Co Tech
        </a>
      </div>
    </footer>
  );
}

export default Footer;
