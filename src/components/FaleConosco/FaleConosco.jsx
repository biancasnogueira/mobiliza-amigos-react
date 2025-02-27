import React, { useState } from "react";

const FaleConosco = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [formStatus, setFormStatus] = useState(""); // Status do envio do formulário

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
      const response = await fetch(
        "https://api.sheetmonkey.io/form/jfqAJnhfbm1K3QiSx6V3U3",
        {
          // URL do endpoint do SheetMonkey
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Logando a resposta da API
      console.log("Resposta do backend:", response);

      if (response.ok) {
        setFormStatus("Formulário enviado com sucesso!");
        setFormData({
          nome: "",
          email: "",
          mensagem: "",
        });
      } else {
        setFormStatus("Erro ao enviar o formulário. Tente novamente.");
      }
    } catch (error) {
      setFormStatus("Erro ao enviar o formulário. Tente novamente.");
      console.error("Erro:", error);
    }

    // Remove a mensagem de status após 5 segundos
    setTimeout(() => setFormStatus(""), 5000);
  };

  return (
    <section id="fale-com-a-gente">
      <h2>FALE COM A GENTE</h2>
      <div className="contato-container">
        <div className="contatos">
          {[
            {
              titulo: "Incentivo",
              texto:
                "Tire dúvida sobre abertura de inscrições, próximas ações, fique ligado na nossa agenda.",
              link: "https://wa.me/5519989906423?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Incentivo!",
            },
            {
              titulo: "Financeiro",
              texto:
                "Tire dúvida sobre eventos, prestação de contas, se torne um patrocinador.",
              link: "https://wa.me/5519996813159?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Captação%20de%20Recursos!",
            },
            {
              titulo: "Coordenação Geral",
              texto: "Entre em contato direto com a presidente Tais Melo.",
              link: "https://wa.me/5519999063242?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Iniciativa%20Social!",
            },
            {
              titulo: "Lojinha do Bem",
              texto:
                "Converse com nosso time para adquirir um produto, e acesse nosso catálogo.",
              link: "https://wa.me/5519995022463?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Lojinha%20do%20Bem!",
            },
          ].map((contato, index) => (
            <div className="contato-opcao" key={index}>
              <h3>{contato.titulo}</h3>
              <p>{contato.texto}</p>
              <a
                href={contato.link}
                target="_blank"
                rel="noopener noreferrer"
                title={contato.titulo}
              >
                <img src="/whatsapp.svg" alt="Fale agora por WhatsApp" />
              </a>
            </div>
          ))}
        </div>
        <div className="imagens-sobre-nos">
          <img src="/Image1.jpg" />
          <img src="/Image2.png" />
          <img src="/Image5.jpg" />
        </div>
      </div>
    </section>
  );
};

export default FaleConosco;
