import React from "react";
import backgroundImg from "../../assets/background.webp";
import "../Banner/Banner.css";

function Banner() {
  return (
    <>
      {/* Hero Section com fundo otimizado */}
      <div
        className="hero displayFlex"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="hero-text">
            <p>
              Conectamos sonhos e ações para transformar vidas e inspirar
              comunidades através do voluntariado.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
