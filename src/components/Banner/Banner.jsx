import React from 'react';
import '../Banner/Banner.css';

function Banner(props) {
  return (
    <>
      {/* Hero Section com fundo dinâmico usando a imagem passada como prop */}
      <div className="hero displayFlex" style={{ backgroundImage: `url(${props.image})` }}>
        <div className="container">
          <div className="hero-text">
            <p>Conectamos sonhos e ações para transformar vidas e inspirar comunidades através do voluntariado.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
