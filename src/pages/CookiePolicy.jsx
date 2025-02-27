import React from 'react';
import Header from "../components/Header/Header"; // Importando o Header
import Footer from "../components/Footer/Footer"; // Importando o Footer
import './CookiePolicy.css'; // Estilo da página CookiePolicy

const CookiePolicy = () => {
  return (
    <>
      <Header /> {/* Adicionando o Header */}

      <div className="cookie-policy-container">
        <h1>Política de Cookies do Mobiliza Amigos</h1>

        <section className="intro">
          <p>
            A privacidade e a segurança dos nossos usuários são muito importantes para nós. 
            Esta página tem como objetivo explicar como utilizamos cookies em nosso site e como isso impacta sua experiência de navegação.
          </p>
        </section>

        <section className="what-are-cookies">
          <h2>O que são cookies?</h2>
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu navegador ou dispositivo móvel quando você visita um site. 
            Eles são usados para melhorar a sua experiência de navegação, proporcionando uma navegação mais personalizada e lembrando suas preferências. 
          </p>
        </section>

        

        <section className="how-we-use-cookies">
          <h2>Como Utilizamos os Cookies?</h2>
          <p>
            No Mobiliza Amigos, os cookies são usados para melhorar sua experiência no nosso site. 
            Eles ajudam a personalizar o conteúdo e os anúncios, fornecer recursos de mídia social e analisar nosso tráfego. 
            Além disso, os cookies permitem que a experiência de navegação seja mais eficiente, guardando suas preferências e facilitando o acesso ao conteúdo.
          </p>
        </section>

        <section className="formulario-de-inscricao">
          <h2>Formulários de Inscrição</h2>
          <p>
            Os formulários de inscrição no nosso site são utilizados de forma restrita pelos coordenadores do projeto. 
            As informações coletadas através dos formulários são tratadas com total confidencialidade e são utilizadas exclusivamente para fins administrativos e organizacionais dentro do projeto.
          </p>
          <p>
            Os coordenadores têm acesso restrito aos dados fornecidos nos formulários e os utilizam apenas para gerenciar inscrições e coordenar as atividades do projeto. 
            Garantimos que suas informações pessoais não são compartilhadas com terceiros e são usadas apenas para os fins descritos.
          </p>
        </section>

        <section className="managing-cookies">
          <h2>Gerenciamento de Cookies</h2>
          <p>
            Você pode gerenciar suas preferências de cookies a qualquer momento através das configurações do seu navegador. 
            Caso prefira não aceitar cookies, pode configurar seu navegador para bloquear cookies ou avisá-lo quando estiver prestes a ser configurado um cookie.
          </p>
        </section>

        <section className="privacy-policy-link">
          <p>
            Para mais informações sobre como tratamos seus dados pessoais, leia nossa <a href="/privacy-policy">Política de Privacidade</a>.
          </p>
        </section>
      </div>

      <Footer /> {/* Adicionando o Footer */}
    </>
  );
};

export default CookiePolicy;
