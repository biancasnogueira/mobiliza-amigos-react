import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const maxItems = items.length;
  const itemWidth = 265; // Ajuste conforme necessário

  // Função para controlar o carrossel
  const handleControlClick = (isLeft) => {
    setCurrentItem((prevItem) =>
      isLeft ? (prevItem - 1 + maxItems) % maxItems : (prevItem + 1) % maxItems
    );
  };

  return (
    <div className="carousel">
      <button
        className="arrow-left control"
        onClick={() => handleControlClick(true)}
        aria-label="Previous image"
      >
        &lt;
      </button>
      <div className="gallery-wrapper">
        <div
          className="gallery"
          style={{
            display: "flex",
            transform: `translateX(-${currentItem * itemWidth}px)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {items.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Carousel item ${index + 1}`}
              className={`item ${index === currentItem ? "current-item" : ""}`}
              style={{ width: `${itemWidth}px` }}
            />
          ))}
        </div>
      </div>
      <button
        className="arrow-right control"
        onClick={() => handleControlClick(false)}
        aria-label="Next image"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
