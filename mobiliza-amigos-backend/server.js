const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware para aceitar JSON no corpo das requisições
app.use(express.json());


// Habilitar CORS para permitir requisições do frontend
app.use(cors({
    origin: 'http://localhost:5173', // Permite apenas essa origem específica
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type'], // Cabeçalhos permitidos
  }));    

// Conexão com o MongoDB (Atlas)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ Conectado ao MongoDB com sucesso!'))
  .catch((err) => console.error('❌ Erro de conexão:', err));

// Criando um modelo para armazenar os dados do formulário
const FormData = mongoose.model('FormData', new mongoose.Schema({
    nome: String,
    email: String,
    mensagem: String,
    telefone: String, // Exemplo de adição de campo
    endereco: String,
    interesse: String, // Exemplo de adição de campo
  }));
  
// Rota para receber dados do formulário e salvar no MongoDB
app.post('/submit-form', async (req, res) => {
    try {
      const { nome, email, mensagem, telefone, endereco, interesse } = req.body;
  
      // Verifique se todos os campos estão presentes
      if (!nome || !email || !mensagem || !telefone || !endereco || !interesse) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      }
  
      // Criar um novo formulário com todos os campos
      const newForm = new FormData({ nome, email, mensagem, telefone, endereco, interesse });
  
      // Salvar os dados no banco de dados
      await newForm.save();
  
      console.log('📩 Novo formulário salvo:', newForm);
      res.status(201).json({ message: 'Formulário enviado com sucesso!' });
    } catch (error) {
      console.error('❌ Erro ao salvar formulário:', error);
      res.status(500).json({ error: 'Erro ao processar o formulário.' });
    }
  });

// Rota para obter todos os formulários cadastrados (acessar via URL)
app.get('/get-forms', async (req, res) => {
  try {
    const forms = await FormData.find();
    res.status(200).json(forms);
  } catch (error) {
    console.error('❌ Erro ao buscar formulários:', error);
    res.status(500).json({ error: 'Erro ao buscar dados.' });
  }
});

// Porta onde o servidor vai rodar
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
