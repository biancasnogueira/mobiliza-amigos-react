import React from "react";
import { Helmet } from "react-helmet"; // Importando o Helmet para gerenciar o head da página
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Patrocinio from "../components/Patrocinio/Patrocinio";

function Patrocinador() {
    return (
        <>
            <Helmet>
                <title>Seja um Patrocinador - Mobiliza Amigos</title>
                <meta
                    name="description"
                    content="Seja um patrocinador do Mobiliza Amigos e ajude a transformar vidas. Sua marca pode fazer a diferença no nosso projeto voluntariado."
                />
                <meta
                    name="keywords"
                    content="patrocinador, Mobiliza Amigos, patrocínio, projeto voluntariado, ajudar, transformar vidas"
                />
                <meta property="og:title" content="Seja um Patrocinador - Mobiliza Amigos" />
                <meta
                    property="og:description"
                    content="Seja um patrocinador do Mobiliza Amigos e ajude a transformar vidas. Sua marca pode fazer a diferença no nosso projeto voluntariado."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mobilizaamigos.org/patrocinador" /> {/* URL correta */}
                <meta property="og:image" content="https://mobilizaamigos.org/patrocinador-image.jpg" /> {/* Imagem representativa */}
                
                {/* Tag Canônica */}
                <link rel="canonical" href="https://mobilizaamigos.org/patrocinador" />
            </Helmet>

            <Header />
            <Patrocinio />
            <Footer />
        </>
    );
}

export default Patrocinador;