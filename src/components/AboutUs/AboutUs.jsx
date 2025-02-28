import React, { useEffect, useState } from "react";
import "./AboutUs.css";

// ASSETS
// import imgAboutUs1 from "/Image1.webp";
// import imgAboutUs2 from "/AFE539E8-7AC9-41B9-964C-FC59B84F3D74.webp";
// import imgAboutUs3 from "../../assets/aboutus3.svg";

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
          src="/Image1.webp"
          alt="Voluntários entregando alimentos para Comunidade Mandela Campinas-SP"
        />
        <img
          id="imgAboutUs2"
          src="/IMG_8958.webp"
          alt="Voluntária na ação Amigo do Idoso"
        />
        <img id="imgAboutUs3" src="/Foto.png" alt="Voluntários sorrindo" />
        <img
          id="imgAboutUs4"
          src="/MeioAmbiente.webp"
          alt="Voluntários em ação de meio ambiente plantando flores"
        />
      </div>
    </section>
  );
};

export default AboutUs;
