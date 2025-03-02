import React, { useEffect, useState } from "react";
import "./AboutUs.css";

import AboutUs1 from "../../assets/aboutus1.webp";
import AboutUs2 from "../../assets/aboutus2.webp";
import AboutUs3 from "../../assets/aboutus3.webp";
import AboutUs4 from "../../assets/aboutus4.webp";

const AboutUs = () => {
  const [count, setCount] = useState(0);

  // Contador animado
  useEffect(() => {
    let start = 0;
    const end = 2000;
    const duration = 2000;
    const startTime = performance.now();

    const animateCount = (time) => {
      const elapsedTime = time - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, []);

  return (
    <section className="sobre-nos">
      <div className="conteudo-sobre-nos">
        <h2>SOBRE NÓS</h2>
        <p>
          Mobiliza Amigos é uma iniciativa social sem fins lucrativos, fundada
          em 2020 por Aila Nadiele da Silva, José Alfredo Rodrigues de Andrade
          Júnior e Taís Melo dos Santos. Em apenas quatro anos de atuação, já
          transformamos a vida de{" "}
          <span id="contador" className="contador">
            {count}
          </span>{" "}
          pessoas, conectando sonhos e inspirando ações através do poder do
          voluntariado.
        </p>
        <blockquote>
          "Mobilizar é a nossa desculpa para levar amor, inspiração e
          transformação para crianças e comunidades que precisam de esperança."
        </blockquote>
      </div>

      <div className="imagens-sobre-nos">
        <img
          id="imgAboutUs1"
          src={AboutUs1}
          alt="Voluntários entregando alimentos para Comunidade Mandela Campinas-SP"
        />
        <img
          id="imgAboutUs2"
          src={AboutUs2}
          alt="Voluntária na ação Amigo do Idoso"
        />
        <img id="imgAboutUs3" src={AboutUs3} alt="Voluntários sorrindo" />
        <img
          id="imgAboutUs4"
          src={AboutUs4}
          alt="Voluntários em ação de meio ambiente plantando flores"
        />
      </div>
    </section>
  );
};

export default AboutUs;
