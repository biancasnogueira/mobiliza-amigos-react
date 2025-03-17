import React from "react";
import { Helmet } from "react-helmet"; // Importando o Helmet para gerenciar o head da página
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Voluntariado from "../components/Voluntariado/Voluntariado";
import AboutUs from "../components/AboutUs/AboutUs";

function Home() {
    return (
        <>
            <Helmet>
                <title>Mobiliza Amigos - Transformando vidas através de doações e voluntariado</title>
                <meta
                    name="description"
                    content="O Mobiliza Amigos é um projeto social que conecta doadores e voluntários para transformar vidas. Conheça nossas iniciativas e saiba como você pode ajudar."
                />
                <meta
                    name="keywords"
                    content="Mobiliza Amigos, doações, voluntariado, projeto social, ajudar, transformar vidas"
                />
                <meta property="og:title" content="Mobiliza Amigos - Transformando vidas através de doações e voluntariado" />
                <meta
                    property="og:description"
                    content="O Mobiliza Amigos é um projeto social que conecta doadores e voluntários para transformar vidas. Conheça nossas iniciativas e saiba como você pode ajudar."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mobilizaamigos.org" /> {/* URL correta */}
                <meta property="og:image" content="https://mobilizaamigos.org/volunteer-background.svg" /> {/* Imagem representativa */}
                
                {/* Tag Canônica */}
                <link rel="canonical" href="https://mobilizaamigos.org" />
            </Helmet>

            <Header />
            <div className="home">
                <Banner title="Doacoes" image="volunteer-background.svg" />
            </div>
            <Voluntariado />
            <AboutUs />
            <Footer />
        </>
    );
}

export default Home;