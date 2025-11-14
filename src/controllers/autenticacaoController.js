// src/controllers/AuthController.js

const bcrypt = require('bcrypt');
const pool = require('../mysql/mysqlPool'); // Caminho do seu pool de conexões MySQL
const jwt = require('jsonwebtoken'); 
require('dotenv').config(); // Para carregar JWT_SECRET

// Chaves secretas e tempo de expiração do .env
const JWT_SECRET = process.env.JWT_SECRET; 
const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME || '1h'; 
const saltRounds = 10; // Custo do hash, usado em criarSenha

class AuthController {

    // POST /conta/criar-senha (Usado para Reset de Senha ou Primeira Senha)
    static async criarSenha(req, res) {
        const { chave, novaSenha } = req.body;

        if (!chave || !novaSenha) {
            return res.status(400).json({ erro: 'Chave e nova senha são obrigatórias.' });
        }

        try {
             // 1. Buscar a conta pela chave de validação/reset
             const [contas] = await pool.query(
                 'SELECT id FROM conta WHERE chave_validacao = ?', 
                 [chave] 
             );

             if (contas.length === 0) {
                 return res.status(404).json({ erro: 'Chave inválida ou expirada.' });
             }

             const conta = contas[0];

             // 2. Hashing da nova senha
             const novaSenhaHash = await bcrypt.hash(novaSenha, saltRounds);
             
             // 3. Atualizar a senha e limpar a chave
             await pool.query(
                 'UPDATE conta SET senha = ?, chave_validacao = NULL WHERE id = ?', 
                 [novaSenhaHash, conta.id]
             );

             res.status(200).json({ mensagem: 'Senha atualizada com sucesso!' });

        } catch (error) {
            console.error('Erro ao criar senha:', error);
            res.status(500).json({ erro: 'Erro interno ao processar criação de senha.' });
        }
    }

    // POST /login (Fazer Login)
    static async fazerLogin(req, res) { 
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ erro: 'E-mail e senha são obrigatórios.' });
        }

        if (!JWT_SECRET) {
             console.error('JWT_SECRET não configurado no .env!');
             return res.status(500).json({ erro: 'Erro de configuração do servidor. JWT_SECRET ausente.' });
        }

        try {
            // 1. Buscar a conta pelo e-mail
            const [contas] = await pool.query(
                'SELECT id, nome, email, senha FROM conta WHERE email = ?', // Status removido da seleção, pois não é mais verificado
                [email]
            );

            if (contas.length === 0) {
                return res.status(401).json({ erro: 'E-mail ou senha incorretos.' });
            }
            
            const conta = contas[0];

            // 2. Comparar a senha fornecida com o hash salvo (bcrypt)
            const senhaCorreta = await bcrypt.compare(senha, conta.senha);

            if (!senhaCorreta) {
                return res.status(401).json({ erro: 'E-mail ou senha incorretos.' });
            }
            
            // 3. Geração do JWT
            const payload = {
                id: conta.id,
                nome: conta.nome,
                email: conta.email,
            };

            const token = jwt.sign(
                payload, 
                JWT_SECRET, 
                { expiresIn: JWT_EXPIRATION_TIME } // Expira conforme configurado no .env (ex: 1h)
            ); 

            res.status(200).json({ 
                mensagem: 'Login bem-sucedido!', 
                token: token, // O token JWT para futuras requisições
                conta: { id: conta.id, email: conta.email, nome: conta.nome }
            });

        } catch (error) {
            console.error('Erro durante o login:', error);
            res.status(500).json({ erro: 'Erro interno durante o login.' });
        }
    }
}

module.exports = AuthController;