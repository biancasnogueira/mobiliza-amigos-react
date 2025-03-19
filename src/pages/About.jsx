import { Helmet } from "react-helmet-async";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/AboutUs/AboutUs";
import Missao from "../components/Missao/Missao";

function About() {
    return (
        <>
            <Helmet>
                <title>Sobre Nós - Mobiliza Amigos</title>
                <meta 
                    name="description" 
                    content="Conheça o Mobiliza Amigos, um projeto voluntariado que transforma vidas em Campinas e Valinhos. Saiba mais sobre nossa missão e impacto!" 
                />
                <meta name="keywords" content="voluntariado, projeto social, Mobiliza Amigos, Campinas, Valinhos, missão social" />
                <meta property="og:title" content="Sobre Nós - Mobiliza Amigos" />
                <meta 
                    property="og:description" 
                    content="Descubra como o Mobiliza Amigos está ajudando a comunidade através do voluntariado. Junte-se a nós!" 
                />
                <meta property="og:image" content="/logo-mobiliza.png" />
                <meta property="og:url" content="https://mobilizaamigos.org/about" />
                
                {/* Tag Canônica */}
                <link rel="canonical" href="https://mobilizaamigos.org/about" />
            </Helmet>
            
            <Header />
            <AboutUs />
            <Missao />
            <Footer />
        </>
    );
}

export default About;