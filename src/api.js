const API_URL = 'mongodb+srv://admin_mobiliza:Tg4aafGCJwMIcMGm@cluster0.feek7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Substitua pela URL do seu back-end

export const enviarFormularioFaleConosco = async (dados) => {
  try {
    const resposta = await fetch(`${API_URL}/fale-conosco`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });
    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao enviar o formulário Fale Conosco:', erro);
    throw erro;
  }
};

export const enviarFormularioInscricao = async (dados) => {
  try {
    const resposta = await fetch(`${API_URL}/inscricao`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });
    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao enviar o formulário de Inscrição:', erro);
    throw erro;
  }
};
