const mysql = require('mysql2/promise');
require('dotenv').config(); // Carrega as variáveis do .env

const pool = mysql.createPool({
    // As chaves no .env devem ser MAIÚSCULAS por convenção
    host: process.env.DB_HOST, 
    user: process.env.DB_USUARIO, 
    password: process.env.DB_SENHA,
    database: process.env.DB_NOME, 
    port: process.env.DB_PORT, 
    
    waitForConnections: true,
    connectionLimit: 10, 
    queueLimit: 0
});

console.log('Pool de conexões MySQL criado usando variáveis de ambiente.');

module.exports = pool;