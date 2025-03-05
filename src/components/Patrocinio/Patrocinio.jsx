import React from "react";
import "./Patrocinio.css";

const Patrocinio = () => {
  return (
    <div className="container">
      <section className="patrocinador-section">
        {/* Texto do Patrocinador */}
        <div className="patrocinador-texto">
          <h2>Seja um Patrocinador do Mobiliza Amigos</h2>
          <p>
            O Mobiliza Amigos é uma iniciativa social que transforma vidas de
            crianças, idosos e animais resgatados. Sua empresa pode apoiar
            nossos projetos e eventos, levando mais impacto positivo à
            comunidade.
          </p>
          <p>Alguns dos nossos patrocinadores:</p>
          <div className="logos-patrocinadores">
            <img src="/adelpho.webp" alt="Logo Adelpho" className="logo" />
            <img
              src="/logo-pururucas.webp"
              alt="Logo Pururucas"
              className="logo"
            />
            <img
              src="/PapelariaUmSonhoDePapel.webp"
              alt="Logo Papelaria Um Sonho De Papel Valinhos"
              className="logo"
              id="Papelaria"
            />
            <img
              src="/Brincar.webp"
              alt="Logo Brincar Locação de Brinquedos"
              className="logo"
            />
            <img
              src="/lendarios.webp"
              alt="Logo Lendarios Bar & Burguer"
              className="logo"
            />
          </div>
        </div>

        {/* Botão de Envio */}
        <div className="formulario-contato">
          <h3>Fale Conosco</h3>
          <a
            href="https://wa.me/5519996813159?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20como%20me%20tornar%20um%20patrocinador%20do%20Mobiliza%20Amigos."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entre em contato pelo WhatsApp para saber mais sobre o patrocínio"
          >
            <button className="btn-patrocinar">Quero Patrocinar</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Patrocinio;
