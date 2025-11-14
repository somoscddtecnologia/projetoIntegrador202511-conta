const express = require('express');
const router = express.Router();

// Importa os Controllers
const CadastroController = require('../controllers/cadastroController');
const AuthController = require('../controllers/autenticacaoController');

// Rotas de Cadastro (prefixo /conta)
// POST /conta -> Cadastrar usuário
router.post('/', CadastroController.cadastrarUsuario);

// GET /conta/validaEmail?chave={chave} -> Validar e-mail
router.get('/validaEmail', CadastroController.validarEmail);

// POST /conta/criar-senha -> Criar/Atualizar senha
router.post('/criar-senha', AuthController.criarSenha);


module.exports = router;