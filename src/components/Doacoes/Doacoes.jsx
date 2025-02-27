import React, { useState } from "react";
import "./Doacoes.css";

const Doacoes = () => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const copyPixKey = () => {
    const pixKey = "doar.mobilizaamigos@gmail.com";

    // Tenta usar a API Clipboard (funciona na maioria dos navegadores modernos)
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(pixKey)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          setError(true);
          setTimeout(() => setError(false), 2000);
        });
    } else {
      // Fallback para navegadores mais antigos ou Safari em iPhones (sem suporte completo à API Clipboard)
      const textArea = document.createElement("textarea");
      textArea.value = pixKey;
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, 99999); // Para dispositivos móveis, seleciona todo o texto

      try {
        document.execCommand("copy"); // Copia o texto selecionado
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        setError(true);
        setTimeout(() => setError(false), 2000);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <section className="doacoes">
      <div className="doacao-header">
        <h2>Contribua para a nossa causa!</h2>
        <p>
          Escolha uma forma de apoiar e fazer a diferença na vida de muitas
          pessoas.
        </p>
      </div>

      <div className="doacoes-options">
        <div className="doacao-item">
          <h3>Doa Legal</h3>
          <p>
            Com a contribuição de R$10,00 por mês você se torna um Amigo do Mobiliza e
            contribui mensalmente com nossos trabalhos.
          </p>
          <a
            href="https://pag.ae/7_q2Wo_TN"
            className="btn-doacao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero ser Amigo do Mobiliza
          </a>
        </div>

        <div className="doacao-item">
          <h3>Depósito Bancário</h3>
          <p>
            <strong>DOC e TED</strong>
            <br />
            LIONS CLUBE DE VALINHOS
          </p>
          <p>
            <strong>Banco PagBank - 290</strong>
            <br />
            Agência: 0001 - Conta: 78443568-7
          </p>
          <p>
            <strong>CNPJ</strong>: 73.077.588/0001-55
          </p>
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
          <p>
            <strong>doar.mobilizaamigos@gmail.com</strong>
          </p>
          <button onClick={copyPixKey} className="btn-doacao">
            {copied ? "Chave Pix Copiada!" : "Copiar chave pix"}
          </button>
          {error && (
            <p style={{ color: "red" }}>
              Não foi possível copiar. Tente novamente.
            </p>
          )}
        </div>

        <div className="doacao-item">
          <h3>Cartão de Crédito</h3>
          <p>
            Faça sua doação de forma rápida e segura com cartão de crédito ou
            boleto bancário.
          </p>
          <a
            href="https://pag.ae/7_q2Wo_TN"
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
