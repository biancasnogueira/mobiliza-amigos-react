import React from "react";
import { Helmet } from "react-helmet"; // Importando o Helmet para gerenciar o head da página
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Lojinha from "../components/Lojinha/lojinha";

function Loja() {
  return (
    <>
      <Helmet>
        <title>Lojinha do Bem - Mobiliza Amigos</title>
        <meta
          name="description"
          content="Compre na Lojinha do Bem do Mobiliza Amigos e ajude a transformar vidas. Cada compra contribui para o sucesso do nosso projeto voluntariado."
        />
        <meta
          name="keywords"
          content="Lojinha do Bem, Mobiliza Amigos, compras solidárias, projeto voluntariado, ajudar, doações"
        />
        <meta property="og:title" content="Lojinha do Bem - Mobiliza Amigos" />
        <meta
          property="og:description"
          content="Compre na Lojinha do Bem do Mobiliza Amigos e ajude a transformar vidas. Cada compra contribui para o sucesso do nosso projeto voluntariado."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mobilizaamigos.org/loja" /> {/* URL correta */}
        <meta property="og:image" content="https://mobilizaamigos.org/lojinha-image.jpg" /> {/* Imagem representativa */}
        
        {/* Tag Canônica */}
        <link rel="canonical" href="https://mobilizaamigos.org/loja" />
      </Helmet>

      <Header />
      <Lojinha />
      <Footer />
    </>
  );
}

export default Loja;