import React from "react";
import { Helmet } from "react-helmet"; // Importando o Helmet para gerenciar o head da página
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Doacoes from "../components/Doacoes/Doacoes";

function Donations() {
    return (
        <>
            <Helmet>
                <title>Doações - Mobiliza Amigos</title>
                <meta
                    name="description"
                    content="Faça uma doação e ajude o Mobiliza Amigos a continuar transformando vidas. Sua contribuição é essencial para o sucesso do nosso projeto."
                />
                <meta
                    name="keywords"
                    content="doações, contribuir, Mobiliza Amigos, apoio, doar, projeto social"
                />
                <meta property="og:title" content="Doações - Mobiliza Amigos" />
                <meta
                    property="og:description"
                    content="Faça uma doação e ajude o Mobiliza Amigos a continuar transformando vidas. Sua contribuição é essencial para o sucesso do nosso projeto."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mobilizaamigos.org/donations" />
                
                {/* Tag Canônica */}
                <link rel="canonical" href="https://mobilizaamigos.org/donations" />
            </Helmet>

            <Header />
            <Doacoes />
            <Footer />
        </>
    );
}

export default Donations;