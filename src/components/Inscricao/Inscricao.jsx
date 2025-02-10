import React, { useState } from 'react';
import './Inscricao.css';

const InscricaoForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
    telefone: '',
    endereco: '',
    interesse: '',
  });
  

  const [formStatus, setFormStatus] = useState('');

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
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Inscrição enviada com sucesso!');
        setFormData({
          nome: '',
          email: '',
          mensagem: '',
          telefone: '',
          endereco: '',
          interesse: '',
        });
      } else {
        setFormStatus('Erro ao enviar a inscrição. Tente novamente.');
      }
    } catch (error) {
      setFormStatus('Erro ao enviar a inscrição. Tente novamente.');
      console.error('Erro:', error);
    }

    // Limpa o status após 5 segundos
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <section className="inscricao">
      <div className="container-inscricao">
        <h1>Inscreva-se para o Mobiliza Amigos</h1>
        <p className='paragrafo-1'>
          Junte-se a nós e ajude a fazer a diferença! Complete o formulário abaixo para se inscrever como voluntário.
        </p>

        <div className="imagem-voluntario">
          <img src="/imagem-voluntario.svg" alt="Voluntário com criança" />
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
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              required
              placeholder="Digite seu endereço"
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
