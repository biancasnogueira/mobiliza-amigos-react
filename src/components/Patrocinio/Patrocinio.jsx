import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Patrocinio.css';

const Patrocinio = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulário enviado com sucesso! Obrigado pelo seu interesse.');
  };

  return (
    <div className="patrocinador-page">
      <p>
        <h1>Seja um Patrocinador do Mobiliza Amigos</h1>
          O <strong>Mobiliza Amigos</strong> é um projeto voluntário que faz a diferença na vida de muitas
          crianças. A sua empresa pode ajudar a transformar vidas através de patrocínios que
          financiam nossas atividades e eventos.
        </p>

      <section id="como-ajudar" className="como-ajudar">
        <h2>Como Sua Empresa Pode Ajudar</h2>
        <ul>
          <li>Patrocínio financeiro para eventos e atividades.</li>
          <li>Doação de produtos ou serviços.</li>
          <li>Engajamento com a comunidade local através de eventos.</li>
        </ul>
      </section>

      <section id="formulario-contato" className="formulario-contato">
        <h2>Entre em Contato Conosco</h2>
        <p>Preencha o formulário abaixo para mais informações sobre como sua empresa pode se envolver:</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome da Empresa:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email para Contato:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="telefone">Telefone para Contato:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn-enviar">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default Patrocinio;
