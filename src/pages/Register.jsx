import React from "react";
import { Helmet } from "react-helmet"; // Importando o Helmet para gerenciar o head da página
import InscricaoForm from "../components/Inscricao/Inscricao";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Register() {
    return (
        <>
            <Helmet>
                <title>Inscrições - Mobiliza Amigos</title>
                <meta
                    name="description"
                    content="Faça parte do Mobiliza Amigos! Inscreva-se agora e entre na lista de espera. Entraremos em contato para mais informações sobre como você pode participar do nosso projeto voluntariado."
                />
                <meta
                    name="keywords"
                    content="inscrições, Mobiliza Amigos, lista de espera, projeto voluntariado, participar, voluntários"
                />
                <meta property="og:title" content="Inscrições - Mobiliza Amigos" />
                <meta
                    property="og:description"
                    content="Faça parte do Mobiliza Amigos! Inscreva-se agora e entre na lista de espera. Entraremos em contato para mais informações sobre como você pode participar do nosso projeto voluntariado."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mobilizaamigos.org/register" /> {/* URL correta */}
                <meta property="og:image" content="https://mobilizaamigos.org/inscricoes-image.jpg" /> {/* Imagem representativa */}
                
                {/* Tag Canônica */}
                <link rel="canonical" href="https://mobilizaamigos.org/register" />
            </Helmet>

            <Header />
            <InscricaoForm />
            <Footer />
        </>
    );
}

export default Register;