import React, { useState } from 'react';

// ASSETS
import retangulo from '../../assets/retangulo.svg';
import setaEsquerda from '../../assets/seta-esquerda.svg';
import setaDireita from '../../assets/seta-direita.svg';
import carrossel2 from '../../assets/carrossel2.svg';
import carrossel3 from '../../assets/carrossel3.svg';
import carrossel4 from '../../assets/carrossel4.svg';
import carrossel5 from '../../assets/carrossel5.svg';
import carrossel6 from '../../assets/carrossel6.svg';
import carrossel7 from '../../assets/carrossel7.svg';

const Missao = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const items = [carrossel2, carrossel3, carrossel4, carrossel5, carrossel6, carrossel7];
  const maxItems = items.length;

  const handleControlClick = (isLeft) => {
    setCurrentItem((prevItem) =>
      isLeft ? (prevItem === 0 ? maxItems - 1 : prevItem - 1) :
      (prevItem === maxItems - 1 ? 0 : prevItem + 1)
    );
  };

  return (
    <section className="missao-mobiliza">
      <div className="conteudo-missao">
        <h2>O QUE NOS MOVE</h2>
        <img
          id="retangulo-abaixo-do-titulo"
          src={retangulo}
          alt="Mobiliza Amigos - Retângulo abaixo do título"
        />
        <div className="informacoes-container">
          <div className="informacao-item">
            <h3>MISSÃO</h3>
            <p>
              Nosso propósito é transformar vidas de crianças, adolescentes e
              famílias em vulnerabilidade, apoiando histórias individuais e
              semeando amor e esperança.
            </p>
          </div>
          <div className="informacao-item">
            <h3>VISÃO</h3>
            <p>
              Ser referência em voluntariado, promovendo equidade e justiça
              social em todas as suas formas. Lutamos pelo resgate da esperança
              por meio da união e do respeito.
            </p>
          </div>
          <div className="informacao-item">
            <h3>VALORES</h3>
            <p>
              Companheirismo - Compaixão - Empatia - Esperança - Humildade - 
              Solidariedade - Respeito ao ser vivo e ao meio ambiente.
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
          <div
            className="gallery"
            style={{
              transform: `translateX(-${currentItem * (30 / items.length)}%)`, // Ajuste na largura para o efeito de transição
              width: `${items.length * 30}%`, // Garante que a largura do carrossel se ajuste ao número de itens
            }}
          >
            {items.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`Imagem do carrossel ${index + 1}`}
                className={`item ${currentItem === index ? 'current-item' : ''}`} // Aplica a classe "current-item" ao item ativo
                style={{ width: `${30 / items.length}%` }} // Ajusta a largura do item dentro do carrossel
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
  );
};

export default Missao;
