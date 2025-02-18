import React, { useState } from 'react';
import './Patrocinio.css';
import Button from '../Button/Button'; // Componente de botão estilizado

const Patrocinio = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [formStatus, setFormStatus] = useState(''); // Status do envio do formulário

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envio para o SheetMonkey
      const response = await fetch('https://api.sheetmonkey.io/form/jfqAJnhfbm1K3QiSx6V3U3', { // Substitua com seu URL do SheetMonkey
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Formulário enviado com sucesso!');
        setFormData({
          nome: '',
          email: '',
          mensagem: '',
        });
      } else {
        setFormStatus('Erro ao enviar o formulário. Tente novamente.');
      }
    } catch (error) {
      setFormStatus('Erro ao enviar o formulário. Tente novamente.');
      console.error('Erro:', error);
    }

    // Remove a mensagem de status após 5 segundos
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <div className="container">
      <section className="patrocinador-section">
        {/* Texto do Patrocinador */}
        <div className="patrocinador-texto">
          <h2>Seja um Patrocinador do Mobiliza Amigos</h2>
          <p>
            O Mobiliza Amigos é um projeto voluntário que faz a diferença na
            vida de muitas crianças. A sua empresa pode ajudar a transformar
            vidas através de patrocínios que financiam nossas atividades e
            eventos.
          </p>
          <p>Contribua junto de:</p>
          <div className="logos-patrocinadores">
            <img src="/logo-feav.png" alt="Logo FEAV" className="logo" />
            <img src="/logo-pururucas.jpg" alt="Logo Pururucas" className="logo" />
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="formulario-contato">
          <h3>Envie sua mensagem:</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="mensagem"
              placeholder="Digite sua mensagem aqui..."
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">ENVIAR</button>
          </form>

          {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
      </section>
    </div>
  );
};

export default Patrocinio;
