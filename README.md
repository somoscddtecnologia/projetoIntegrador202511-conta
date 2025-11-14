<<<<<<< HEAD
# Projeto RPV - Conta Corrente

## Estrutura MVC (Camada Conta)

Este repositório agora contém uma estrutura base em MVC para evoluir a camada de **Conta**. Apenas a camada de **Views** foi implementada (HTML estático + CSS + JS) preservando o layout e funcionalidade visual do legado.

```
src/
	app.js              -> Servidor Express (entrypoint)
	views/              -> Páginas HTML (login, cadastro, contas, empréstimos)
	controllers/        -> (vazio) adicionar lógica de orquestração aqui
	models/             -> (vazio) adicionar modelos/dados aqui
public/
	assets/css/styles.css
	assets/js/app.js    -> Script para tema claro/escuro
	Logo.svg            -> Logo utilizado nas views
```

### Rotas disponíveis
| Rota | View |
|------|------|
| `/` | `index.html` (login) |
| `/cadastro` | `cadastro.html` |
| `/contas` | `contas.html` |
| `/emprestimos` | `emprestimos.html` |

### Como executar

Requisitos: Node.js 18+.

Instale dependências (já existe `express`). Em seguida:

```powershell
npm install
npm start
```

Acesse: http://localhost:5001

### Próximos passos sugeridos
1. Implementar controllers (ex.: `contaController.js`) para alimentar as views com dados reais.
2. Criar modelos (ex.: `Conta.js`, `Usuario.js`) para integração com banco ou API.
3. Substituir links estáticos por formulários com POST (login/cadastro) e proteger rotas com sessão/autenticação.
4. Adicionar testes automatizados (unitários e integração das rotas).

### Observações
- O arquivo legado permanece em `arquivoLegado/` para referência histórica.
- O antigo `src/index.js` pode ser removido após validação, pois `src/app.js` é o novo entrypoint.
- Tema escuro é persistido via `localStorage` (`rpb-ui-dark`).

## Repositório das Contas
=======
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
>>>>>>> feat/cadastroLogin
