import React, { useState } from "react";
import { useSwipeable } from "react-swipeable"; // Importe a biblioteca
import "./Missao.css";

// ASSETS
import retangulo from "../../assets/retangulo.svg";
import setaEsquerda from "../../assets/seta-esquerda.svg";
import setaDireita from "../../assets/seta-direita.svg";

// Importação dinâmica das imagens do carrossel
const images = Object.values(
  import.meta.glob("../../assets/images-carrossel/carrossel*.webp", {
    eager: true,
    import: "default",
  })
);

const Missao = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const maxItems = images.length;

  const handleControlClick = (isLeft) => {
    setCurrentItem((prevItem) => {
      if (isLeft) {
        return Math.max(0, prevItem - 1);
      } else {
        return Math.min(maxItems - 1, prevItem + 1);
      }
    });
  };

  // Configuração do swipe
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleControlClick(false), // Swipe para a esquerda = próxima imagem
    onSwipedRight: () => handleControlClick(true), // Swipe para a direita = imagem anterior
    preventDefaultTouchmoveEvent: true, // Evita comportamento padrão do touch
    trackMouse: true, // Permite testar o swipe com o mouse (opcional)
  });

  return (
    <section className="missao-mobiliza">
      <div className="conteudo-missao">
        <h2>O QUE NOS MOVE</h2>
        <img
          id="retangulo-abaixo-do-titulo"
          src={retangulo}
          alt="Mobiliza Amigos - Retângulo abaixo do título"
        />
      </div>

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
            Ser referência em voluntariado, promovendo equidade e justiça social
            em todas as suas formas. Lutamos pelo resgate da esperança por meio
            da união e do respeito.
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

      <div className="container-carrossel">
        <button
          className="arrow-left control"
          onClick={() => handleControlClick(true)}
          disabled={currentItem === 0}
        >
          <img src={setaEsquerda} alt="Previous" />
        </button>

        <div className="gallery-wrapper" {...swipeHandlers}>
          <div
            className="gallery"
            style={{
              transform: `translateX(-${currentItem * 100}%)`,
            }}
          >
            {images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`Imagem do carrossel ${index + 1}`}
                className="item"
              />
            ))}
          </div>
        </div>

        <button
          className="arrow-right control"
          onClick={() => handleControlClick(false)}
          disabled={currentItem >= maxItems - 1}
        >
          <img src={setaDireita} alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default Missao;
