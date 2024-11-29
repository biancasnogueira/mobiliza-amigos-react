import { Link } from 'react-router-dom'

//ASSETS
import './Footer.css'
import LogoInstagram from '../../assets/logo-instagram.svg'
import LogoTiktok from '../../assets/logo-tiktok.svg'
import FooterMobiliza from '../../assets/footer-mobiliza.svg'

function Footer() {

    return (

    <footer>
    <div class="footer-container">
        <div class="footer-column logo-column">
            <img src={footer-mobiliza.svg} alt="Mobiliza Amigos" />
        </div>
        <div class="footer-column links-column">
            <a href="#">Quem somos</a><br />
            <a href="#">Doações</a><br />
            <a href="#">Fale conosco</a>
        </div>
        <div class="footer-column contacts-column">
            <h4>Contatos</h4>
            <p>📍R. Mato Grosso, 612 -<br /> Vila Santana, Valinhos - SP, 13274-120</p>
            <p>📞(19)98990-6423</p>
            <p>📧tais.mobilizaamigos@gmail.com</p>
        </div>
        <div class="footer-column social-column">
            <h4>Siga nossas redes:</h4>
            <a href="https://www.instagram.com/mobilizaamigos/" target="_blank" rel="noopener noreferrer">
            <img src={logo-instagram.svg} alt="Mobiliza Amigos" />
          </a>
          <a href="https://www.tiktok.com/@mobiliza.amigos" target="_blank" rel="noopener noreferrer">
            <img src={logo-tiktok.svg} alt="Mobiliza Amigos" />
          </a>
        </div>
    </div>
    <div class="footer-bottom">
        © 2024 por BN Development | Política de Proteção de Dados
    </div>
  </footer>

    )
}

export default Footer