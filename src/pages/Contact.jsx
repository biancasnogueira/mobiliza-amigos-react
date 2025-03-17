import { Helmet } from "react-helmet-async";
import FaleConosco from "../components/FaleConosco/FaleConosco";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Contact() {
    return (
        <>
            <Helmet>
                <title>Fale Conosco - Mobiliza Amigos</title>
                <meta 
                    name="description" 
                    content="Entre em contato com o Mobiliza Amigos! Tire suas dúvidas, envie sugestões ou saiba como se envolver no voluntariado em Campinas e Valinhos." 
                />
                <meta name="keywords" content="contato, fale conosco, voluntariado, Mobiliza Amigos, Campinas, Valinhos" />
                <meta property="og:title" content="Fale Conosco - Mobiliza Amigos" />
                <meta 
                    property="og:description" 
                    content="Entre em contato com o Mobiliza Amigos e descubra como você pode fazer a diferença!" 
                />
                <meta property="og:image" content="/logo-mobiliza.png" />
                <meta property="og:url" content="https://mobilizaamigos.org/contact" />
                
                {/* Tag Canônica */}
                <link rel="canonical" href="https://mobilizaamigos.org/contact" />
            </Helmet>
            
            <Header />
            <FaleConosco />
            <Footer />
        </>
    );
}

export default Contact;