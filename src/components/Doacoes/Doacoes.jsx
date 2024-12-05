import React from 'react'; 
import './Doacoes.css'; // Certifique-se de criar este arquivo de CSS

const Doacoes = () => {
  return (
    <section className="doacoes">
      <div className="doacao-header">
        <h2>Contribua para a nossa causa!</h2>
        <p>Escolha uma forma de apoiar e fazer a diferença na vida de muitas pessoas.</p>
      </div>

      <div className="doacoes-options">
        <div className="doacao-item">
          <h3>Doação Recorrente</h3>
          <p>Com menos de R$9,90 por mês você se torna um Amigo do Mobiliza e contribui mensalmente com nossos trabalhos.</p>
          <a 
            href="https://wa.me/5519996813159?text=Olá%20Mobiliza,%20gostaria%20de%20me%20tornar%20um%20Amigo%20do%20Mobiliza.%20Como%20faço%20para%20contribuir?" 
            className="btn-doacao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero ser Amigo do Mobiliza
          </a>
        </div>

        <div className="doacao-item">
          <h3>Depósito Bancário</h3>
          <p><strong>DOC e TED</strong><br />Associação Mobiliza Amigos</p>
          <p><strong>Banco Bradesco</strong><br />Agência: 54 - Conta: 554391-6</p>
          <p><strong>CNPJ</strong>: 73.077.588/0001-55</p>
          <a 
            href="https://wa.me/5519996813159?text=Olá%20Mobiliza,%20gostaria%20de%20realizar%20uma%20doação%20via%20depósito%20bancário.%20Poderiam%20me%20ajudar%20com%20mais%20informações?" 
            className="btn-doacao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Doar por Depósito
          </a>
        </div>

        <div className="doacao-item">
          <h3>Pix</h3>
          <p>Envie sua contribuição diretamente pelo Pix:</p>
          <p><strong>doar.mobilizaamigos@gmail.com</strong></p>
          <a 
            href="mailto:pix@mobilizaamigos.com.br" 
            className="btn-doacao"
          >
            Doar via Pix
          </a>
        </div>

        <div className="doacao-item">
          <h3>Cartão de Crédito / Boleto</h3>
          <p>Faça sua doação de forma rápida e segura com cartão de crédito ou boleto bancário.</p>
          <a 
            href="https://wa.me/5519996813159?text=Olá%20Mobiliza,%20gostaria%20de%20fazer%20uma%20doação%20via%20cartão%20de%20crédito%20ou%20boleto.%20Como%20funciona?" 
            className="btn-doacao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero DOAR
          </a>
        </div>
      </div>
    </section>
  );
};

export default Doacoes;
