import React, { useState, useEffect } from "react";
import "./Missao.css";

// ASSETS
import retangulo from "../../assets/retangulo.svg";
import setaEsquerda from "../../assets/seta-esquerda.svg";
import setaDireita from "../../assets/seta-direita.svg";

// Importação dinâmica das imagens do carrossel
const images = Object.values(
  import.meta.glob("../../assets/carrossel*.webp", {
    eager: true,
    import: "default",
  })
);

const Missao = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(3);
  const maxItems = images.length;

  useEffect(() => {
    const updateItemsVisible = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setItemsVisible(1);
      } else if (width <= 900) {
        setItemsVisible(2);
      } else {
        setItemsVisible(3);
      }
    };

    updateItemsVisible();
    window.addEventListener("resize", updateItemsVisible);
    return () => window.removeEventListener("resize", updateItemsVisible);
  }, []);

  const handleControlClick = (isLeft) => {
    setCurrentItem((prevItem) => {
      if (isLeft) {
        return Math.max(0, prevItem - 1);
      } else {
        return Math.min(maxItems - itemsVisible, prevItem + 1);
      }
    });
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

        <div className="gallery-wrapper">
          <div
            className="gallery"
            style={{
              transform: `translateX(-${(currentItem / maxItems) * 100}%)`,
              width: `${(maxItems / itemsVisible) * 100}%`,
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
          disabled={currentItem >= maxItems - itemsVisible}
        >
          <img src={setaDireita} alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default Missao;
