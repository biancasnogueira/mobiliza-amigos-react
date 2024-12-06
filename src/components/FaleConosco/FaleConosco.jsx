import React from 'react';

const FaleConosco = () => {
  return (
    <section id="fale-com-a-gente">
      <h2>FALE COM A GENTE</h2>
      <div className="contato-container">
        <div className="contatos">
          <div className="contato-opcao">
            <h3>Incentivo</h3>
            <p>
              Tire dúvida sobre abertura de inscrições, sobre próximas ações,
              fique ligado na nossa agenda.
            </p>
            <a
              href="https://wa.me/5519989906423?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Incentivo!"
              target="_blank"
              rel="noopener noreferrer"
              title="Incentivo"
            >
              <img src="/whatsapp.svg" alt="Fale agora por WhatsApp" />
            </a>
          </div>
          <div className="contato-opcao">
            <h3>Captação de Recursos</h3>
            <p>
              Tire dúvida sobre financeiro, prestação de contas, se torne um
              patrocinador.
            </p>
            <a
              href="https://wa.me/5519996813159?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Incentivo!"
              target="_blank"
              rel="noopener noreferrer"
              title="Captação de Recursos"
            >
              <img src="/whatsapp.svg" alt="Fale agora por WhatsApp" />
            </a>
          </div>
          <div className="contato-opcao">
            <h3>Iniciativa Social</h3>
            <p>Entre em contato direto com a coordenação do nosso projeto.</p>
            <a
              href="https://wa.me/5519989906423?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Incentivo!"
              target="_blank"
              rel="noopener noreferrer"
              title="Iniciativa Social"
            >
              <img src="/whatsapp.svg" alt="Fale agora por WhatsApp" />
            </a>
          </div>
          <div className="contato-opcao">
            <h3>Lojinha do Bem</h3>
            <p>Converse com nosso time para adquirir um produto, e acesse nosso catálogo.</p>
            <a
              href="https://wa.me/5519995022463?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Incentivo!"
              target="_blank"
              rel="noopener noreferrer"
              title="Lojinha do Bem"
            >
              <img src="/whatsapp.svg" alt="Fale agora por WhatsApp" />
            </a>
          </div>
        </div>
        <div className="formulario-contato">
          <h3>Envie sua mensagem:</h3>
          <form>
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="E-mail" required />
            <textarea placeholder="Digite sua mensagem aqui..." required></textarea>
            <button type="submit">ENVIAR</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FaleConosco;
