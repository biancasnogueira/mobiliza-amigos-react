import React, { useState } from "react";
import "./Inscricao.css";

const InscricaoForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    email: "",
    telefone: "",
    cidade: "",
    interesse: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    try {
      const response = await fetch(
        "https://api.sheetmonkey.io/form/mC9QAR5G6GfDoa6GwL7Xew",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormStatus("Inscrição enviada com sucesso!");
        setFormData({
          nome: "",
          idade: "",
          email: "",
          telefone: "",
          cidade: "",
          interesse: "",
        });
      } else {
        setFormStatus("Erro ao enviar a inscrição. Tente novamente.");
      }
    } catch (error) {
      setFormStatus("Erro ao enviar a inscrição. Tente novamente.");
      console.error("Erro:", error);
    }

    // Limpa o status após 5 segundos
    setTimeout(() => setFormStatus(""), 5000);
  };

  return (
    <section className="inscricao">
      <div className="container-inscricao">
        <h1>Inscreva-se para o Mobiliza Amigos</h1>
        <p className="paragrafo-1">
          Junte-se a nós e ajude a fazer a diferença!
        </p>

        {/* Container para posicionar imagem e parágrafo informativo */}
        <div className="info-wrapper">
          <p className="paragrafo-2">
            Ao encaminhar seus dados, você será adicionado à nossa lista de
            espera. Assim que as inscrições estiverem abertas, entraremos em
            contato.
          </p>
          <div className="imagem-voluntario">
            <img src="/imagem-voluntario.svg" alt="Voluntário com criança" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="form-inscricao">
          <div className="input-group">
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Digite seu nome completo"
            />
          </div>
          <div className="input-group">
            <label htmlFor="idade">Sua idade</label>
            <input
              type="text"
              id="idade"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              required
              placeholder="Digite sua idade"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="input-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              placeholder="Digite seu telefone"
            />
          </div>

          <div className="input-group">
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              required
              placeholder="Digite sua cidade"
            />
          </div>

          <div className="input-group">
            <label htmlFor="interesse">Por que você quer se voluntariar?</label>
            <textarea
              id="interesse"
              name="interesse"
              value={formData.interesse}
              onChange={handleChange}
              required
              placeholder="Fale um pouco sobre o que o motivou a se inscrever como voluntário"
            />
          </div>

          <div className="botao">
            <button type="submit">Enviar Inscrição</button>
          </div>
        </form>

        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>
    </section>
  );
};

export default InscricaoForm;
