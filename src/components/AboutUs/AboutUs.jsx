import React, { useState, useEffect } from 'react';
import { initializeCarousel } from '../../utils/carouselFunction';

// ASSETS
import imgAboutUs1 from '../../assets/aboutus1.svg';
import imgAboutUs2 from '../../assets/aboutus2.svg';
import imgAboutUs3 from '../../assets/aboutus3.svg';
import retangulo from '../../assets/retangulo.svg';
import setaEsquerda from '../../assets/seta-esquerda.svg';
import setaDireita from '../../assets/seta-direita.svg';
import carrossel2 from '../../assets/carrossel2.svg';
import carrossel3 from '../../assets/carrossel3.svg';
import carrossel4 from '../../assets/carrossel4.svg';
import carrossel5 from '../../assets/carrossel5.svg';
import carrossel6 from '../../assets/carrossel6.svg';
import carrossel7 from '../../assets/carrossel7.svg';
import carrossel8 from '../../assets/carrossel8.svg';
import carrossel9 from '../../assets/carrossel9.svg';
import carrossel10 from '../../assets/carrossel10.svg';
import carrossel11 from '../../assets/carrossel11.svg';
import carrossel12 from '../../assets/carrossel12.svg';

const AboutUs = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [count, setCount] = useState(0);
  const items = [
    carrossel2, carrossel3, carrossel4, carrossel5, carrossel6, carrossel7, 
    carrossel8, carrossel9, carrossel10, carrossel11, carrossel12,
  ];
  const maxItems = items.length;

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

    return () => clearInterval(timer); // Limpa o timer ao desmontar
  }, []);

  // Controle do carrossel
  const handleControlClick = (isLeft) => {
    setCurrentItem((prevItem) => 
      isLeft ? (prevItem === 0 ? maxItems - 1 : prevItem - 1) : 
               (prevItem === maxItems - 1 ? 0 : prevItem + 1)
    );
  };

  return (
    <>
      <section className="sobre-nos">
        <div className="conteudo-sobre-nos">
          <h2>SOBRE NÓS</h2>
          <p>
            Mobiliza Amigos é uma iniciativa social sem fins lucrativos, fundada em 2020 por Aila Nadiele da Silva, José Alfredo Rodrigues de Andrade Júnior e Taís Melo dos Santos. 
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

      <section className="missao-mobiliza">
        <div className="conteudo-missao">
          <h2>O QUE NOS MOVE</h2>
          <img id="retangulo-abaixo-do-titulo" src={retangulo} alt="Mobiliza Amigos - Retângulo abaixo do título" />
          <div className="informacoes-container">
            <div className="informacao-item">
              <h3>MISSÃO</h3>
              <p>
                Nosso propósito é transformar vidas de crianças, adolescentes e famílias em vulnerabilidade, 
                apoiando histórias individuais e semeando amor e esperança.
              </p>
            </div>
            <div className="informacao-item">
              <h3>VISÃO</h3>
              <p>
                Ser referência em voluntariado, promovendo equidade e justiça social em todas as suas formas. 
                Lutamos pelo resgate da esperança por meio da união e do respeito.
              </p>
            </div>
            <div className="informacao-item">
              <h3>VALORES</h3>
              <p>
                Companheirismo - Compaixão - Empatia - Esperança - Humildade - Solidariedade - 
                Respeito ao ser vivo e ao meio ambiente.
              </p>
            </div>
          </div>
        </div>

        <div className="container-carrossel">
          <div className="gallery-wrapper">
            <button 
              className="arrow-left control" 
              aria-label="Previous image" 
              onClick={() => handleControlClick(true)}
            >
              <img src={setaEsquerda} alt="Previous" />
            </button>
            <div className="gallery">
              {items.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={`Imagem do carrossel ${index + 1}`}
                  className={`item ${index === currentItem ? 'current-item' : ''}`}
                />
              ))}
            </div>
            <button 
              className="arrow-right control" 
              aria-label="Next Image" 
              onClick={() => handleControlClick(false)}
            >
              <img src={setaDireita} alt="Next" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
