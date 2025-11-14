const express = require("express")
const router = express.Router()

// Importa os módulos de rotas
const contaRoutes = require('./contaRoutes'); // Renomeado para seguir o padrão
const authRoutes = require('./autenticacaoRoutes'); 
// Rota de teste
router.get('/', (req, res) => {
    res.status(200).send('API Root - Servidor rodando e rotas principais configuradas.');
});

// Define o prefixo '/conta' para todas as rotas em contaRoutes
router.use('/conta', contaRoutes); 

// Definindo explicitamente a rota de Login no caminho raiz '/login'
// O AuthController.login estará dentro de contaRoutes.js e será reexportado
router.use('/login', authRoutes); 

// Você pode adicionar outras rotas aqui:
// router.use('/arquivos', arquivosRoutes);

module.exports = router