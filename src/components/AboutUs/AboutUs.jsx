import React, { useEffect, useState } from 'react';

// ASSETS
import imgAboutUs1 from '../../assets/aboutus1.svg';
import imgAboutUs2 from '../../assets/aboutus2.svg';
import imgAboutUs3 from '../../assets/aboutus3.svg';

const AboutUs = () => {
  const [count, setCount] = useState(0);

  // Contador animado
  useEffect(() => {
    let current = 0;
    const increment = 1000 / 200;
    const timer = setInterval(() => {
      current += increment;
      if (current >= 1000) {
        setCount(1000);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, 10);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="sobre-nos">
      <div className="conteudo-sobre-nos">
        <h2>SOBRE NÓS</h2>
        <p>
          Mobiliza Amigos é uma iniciativa social sem fins lucrativos, fundada em 2020 <br />
          por Aila Nadiele da Silva, José Alfredo Rodrigues de Andrade Júnior e Taís Melo dos Santos. 
          Em apenas quatro anos de atuação, já transformamos a vida de <span id="contador" className="contador">{count}</span> crianças, conectando sonhos e inspirando ações através do poder do voluntariado.
        </p>
        <blockquote>
          "Mobilizar é a nossa desculpa para levar amor, inspiração e transformação para crianças e comunidades que precisam de esperança."
        </blockquote>
      </div>

      <div className="imagens-sobre-nos">
        <img 
          id="imgAboutUs1" 
          src={imgAboutUs1} 
          alt="Imagem de crianças sorrindo em uma atividade organizada pela Mobiliza Amigos" 
        />
        <img 
          id="imgAboutUs2" 
          src={imgAboutUs2}
          alt="Voluntários entregando brinquedos para crianças" 
        />
        <img 
          id="imgAboutUs3" 
          src={imgAboutUs3} 
          alt="Evento de arrecadação de doações da Mobiliza Amigos" 
        />
      </div>
    </section>
  );
};

export default AboutUs;
