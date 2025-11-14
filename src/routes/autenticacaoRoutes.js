const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/autenticacaoController');

// POST /login -> Rota de Login real
router.post('/', AuthController.fazerLogin);

module.exports = router;