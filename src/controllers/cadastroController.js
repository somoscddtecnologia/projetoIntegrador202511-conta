// src/controllers/CadastroController.js

const bcrypt = require('bcrypt');
const pool = require('../mysql/mysqlPool'); 
// O uuidv4 e enviarEmailDeValidacao NÃO são mais necessários
const saltRounds = 10;

// Removemos a função enviarEmailDeValidacao

class CadastroController {
    
    // POST /conta (Cadastrar Usuário)
    static async cadastrarUsuario(req, res) { 
        
        const { nome, email, senha, documento, numero } = req.body;
    
        if (!nome || !email || !senha || !documento || !numero) {
            return res.status(400).json({ erro: 'Todos os campos (nome, email, senha, documento, numero) são obrigatórios.' });
        }

        try {
            // 1. Verificar se o e-mail já existe
            const [rows] = await pool.query('SELECT id FROM conta WHERE email = ?', [email]);
            if (rows.length > 0) {
                return res.status(409).json({ erro: 'E-mail já cadastrado.' });
            }

            // 2. Hashing da senha
            const senhaHash = await bcrypt.hash(senha, saltRounds); 
            
            // 3. Salvar a nova conta no banco de dados (SQL na tabela 'conta')
            // O status é definido como 'ativo'
            const sql = `
                INSERT INTO conta (documento, numero, saldo, nome, email, senha, status, chave_validacao)
                VALUES (?, ?, 10.00, ?, ?, ?, 'ativo', NULL)
            `;
            const [result] = await pool.query(sql, [
                documento, 
                numero, 
                nome, 
                email, 
                senhaHash, 
                // A chave_validacao é inserida como NULL, pois não é mais usada
            ]);
    
            res.status(201).json({ 
                mensagem: 'Conta cadastrada com sucesso! Usuário ativo imediatamente.', 
                conta: { id: result.insertId, email }
            });

        } catch (error) {
            console.error('Erro ao cadastrar conta:', error);
            res.status(500).json({ erro: 'Erro interno do servidor ao cadastrar conta.' });
        }
    }

    // GET /conta/validaEmail?chave={chave} (Removemos a necessidade desta rota)
    static validarEmail(req, res) {
        // A rota não será usada, mas a função deve existir ou ser removida das rotas
        res.status(404).json({ erro: 'Rota de validação de e-mail desativada.' });
    }
}

module.exports = CadastroController;