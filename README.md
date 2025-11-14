# Projeto RPV - Conta Corrente

## Repositório das Contas# 📘 API de Autenticação e Gerenciamento de Contas

Documentação de integração

## 📌 Sobre o Projeto

Esta API oferece recursos para **cadastro de usuários**, **validação de
e-mail**, **criação/atualização de senha** e **login**.\
A aplicação foi construída com **Node.js + Express + MySQL**, utilizando
pool de conexões e padrões REST.

## 🚀 Como rodar o projeto

### 1️⃣ Instalar dependências

    npm install

### 2️⃣ Criar o arquivo `.env`

    DB_HOST=localhost
    DB_USUARIO=root
    DB_SENHA=sua_senha
    DB_NOME=nome_do_banco
    DB_PORT=3306

    PORT=5001

### 3️⃣ Iniciar o servidor

    npm start

Servidor disponível em:\
**http://localhost:5001**

## 📁 Estrutura do Projeto

    /project
     ├─ controllers/
     ├─ routes/
     │   ├─ contaRoutes.js
     │   ├─ autenticacaoRoutes.js
     │   └─ index.js
     ├─ database/
     │   └─ mysql.pools.js
     ├─ app.js
     ├─ server.js
     └─ .env

## 🔌 Integração com a API

### 📍 Prefixos importantes

  Rota       Descrição
  ---------- ----------------------------
  `/conta`   Cadastro, validação, senha
  `/login`   Login real

## 🧑‍💻 1. Cadastro de Usuário

### POST /conta

**Body JSON**

    {
      "nome": "Fulano da Silva",
      "email": "fulano@email.com"
    }

## 📨 2. Validação de E-mail

### GET /conta/validaEmail?chave=XXXXX

## 🔐 3. Criar / Atualizar Senha

### POST /conta/criar-senha

## 🔑 4. Login

### POST /login

## 🧬 Fluxo de Integração

1.  Cadastro\
2.  Validação de e-mail\
3.  Criar senha\
4.  Login\
5.  Usar o token JWT

## ✔️ Teste rápido com Postman

POST /login

    {
      "email": "teste@teste.com",
      "senha": "123456"
    }
