import React from "react";
import "../FaleConosco/FaleConosco.css";

import AboutUs1 from "../../assets/images-aboutus/aboutus1.webp";
import AboutUs2 from "../../assets/images-aboutus/aboutus2.webp";
import AboutUs3 from "../../assets/images-aboutus/aboutus3.webp";
import AboutUs4 from "../../assets/images-aboutus/aboutus4.webp";

const FaleConosco = () => {
  const contatos = [
    {
      titulo: "Incentivo",
      texto:
        "Tire dúvida sobre abertura de inscrições, próximas ações, fique ligado na nossa agenda.",
      link: "https://wa.me/5519989906423?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Incentivo!",
    },
    {
      titulo: "Financeiro",
      texto:
        "Tire dúvida sobre eventos, prestação de contas, se torne um patrocinador.",
      link: "https://wa.me/5519996813159?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Captação%20de%20Recursos!",
    },
    {
      titulo: "Coordenação Geral",
      texto: "Entre em contato direto com a presidente Tais Melo.",
      link: "https://wa.me/5519999063242?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Iniciativa%20Social!",
    },
    {
      titulo: "Lojinha do Bem",
      texto:
        "Converse com nosso time para adquirir um produto, e acesse nosso catálogo.",
      link: "https://wa.me/5519995022463?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Lojinha%20do%20Bem!",
    },
  ];

  return (
    <section id="fale-com-a-gente">
      <h2>FALE COM A GENTE</h2>
      <p className="descricao-contato">
        Entre em contato conosco através dos nossos canais de atendimento. Estamos aqui para tirar suas dúvidas,
        receber sugestões e ajudar você a se envolver em nossas ações de voluntariado.
      </p>
      <div className="contato-container">
        <div className="contatos">
          {contatos.map((contato, index) => (
            <article className="contato-opcao" key={index}>
              <h3>{contato.titulo}</h3>
              <p>{contato.texto}</p>
              <a
                href={contato.link}
                target="_blank"
                rel="noopener noreferrer"
                title={contato.titulo}
              >
                <img
                  src="/whatsapp.svg"
                  alt="Fale agora por WhatsApp"
                  width="24"
                  height="24"
                  loading="lazy"
                />
              </a>
            </article>
          ))}
        </div>
        <div className="imagens-sobre-nos">
          <img
            id="imgAboutUs1"
            src={AboutUs1}
            alt="Voluntários entregando alimentos para Comunidade Mandela Campinas-SP"
            width="300"
            height="200"
            loading="lazy"
          />
          <img
            id="imgAboutUs2"
            src={AboutUs2}
            alt="Voluntária na ação Amigo do Idoso"
            width="300"
            height="200"
            loading="lazy"
          />
          <img
            id="imgAboutUs3"
            src={AboutUs3}
            alt="Voluntários sorrindo"
            width="300"
            height="200"
            loading="lazy"
          />
          <img
            id="imgAboutUs4"
            src={AboutUs4}
            alt="Voluntários em ação de meio ambiente plantando flores"
            width="300"
            height="200"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default FaleConosco;