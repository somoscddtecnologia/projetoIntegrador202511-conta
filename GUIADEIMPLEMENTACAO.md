# 📘 **GUIA OFICIAL PARA EQUIPES – IMPLEMENTAÇÃO DE ROTAS NO PROJETO MVC**

Este documento define **como cada equipe deve desenvolver, versionar e integrar** suas funcionalidades no projeto seguindo o padrão **MVC (Model – View – Controller)** e o fluxo de trabalho adotado no repositório principal.

---

# 🧱 1. Arquitetura do Projeto

A arquitetura completa já está disponível no repositório principal e segue este padrão:

```
src/
  controllers/
  models/
  routes/
  views/
app.js
package.json
```

Cada equipe deve **criar e alterar somente os arquivos correspondentes à sua área**, sempre respeitando essa estrutura.

---

# 👥 2. Responsabilidades das Equipes

| Equipe          | Responsabilidade                                                    |
| --------------- | ------------------------------------------------------------------- |
| **Contas**      | Rotas, controllers e models relacionados a contas bancárias         |
| **Empréstimos** | Rotas, controllers e models de empréstimos e operações relacionadas |
| **Cadastro**    | Rotas, controllers e models de cadastro de clientes                 |

📌 **Nenhuma equipe deve alterar arquivos de outra área** sem alinhamento prévio.
📌 A pasta `views/` só deve ser alterada se necessário para a sua funcionalidade.

---

# 🌿 3. Fluxo de Trabalho com Git (Obrigatório)

### 🔹 3.1. Criar branch própria

Cada equipe deve trabalhar em uma branch própria seguindo a convenção:

```
feature/<nome-da-equipe>
```

Exemplos:

```
feature/contas
feature/emprestimos
feature/cadastro
```

Criar a branch:

```
git checkout -b feature/contas
```

---

### 🔹 3.2. Manter a branch atualizada

Antes de iniciar o desenvolvimento:

```
git checkout main
git pull
git checkout feature/contas
git merge main
```

---

### 🔹 3.3. Commitar alterações

```
git add .
git commit -m "Implementa rotas de contas"
```

---

### 🔹 3.4. Enviar branch para o GitHub

```
git push origin feature/contas
```

---

### 🔹 3.5. Abrir Pull Request (PR)

No GitHub → **Compare & Pull Request**

Alguém do time principal fará a revisão e o merge.

---

# 🔧 4. Como Implementar Rotas no Padrão MVC

Cada equipe deve criar **3 arquivos principais**:

---

## 📁 4.1. Arquivo de Rotas — `routes/`

Exemplo (routes/contasRoutes.js):

```js
const express = require("express");
const router = express.Router();
const contasController = require("../controllers/contasController");

router.get("/", contasController.listarContas);
router.post("/", contasController.criarConta);
router.get("/:id", contasController.obterConta);
router.put("/:id", contasController.atualizarConta);
router.delete("/:id", contasController.deletarConta);

module.exports = router;
```

---

## 📁 4.2. Controller — `controllers/`

Exemplo (controllers/contasController.js):

```js
exports.listarContas = (req, res) => {
  res.send("Listagem de contas");
};

exports.criarConta = (req, res) => {
  res.send("Conta criada");
};

exports.obterConta = (req, res) => {
  res.send(`Conta ID ${req.params.id}`);
};

exports.atualizarConta = (req, res) => {
  res.send(`Conta ${req.params.id} atualizada`);
};

exports.deletarConta = (req, res) => {
  res.send(`Conta ${req.params.id} removida`);
};
```

---

## 📁 4.3. Model — `models/`

Se o projeto usar banco de dados, o model centraliza a lógica.

Exemplo (models/contasModel.js):

```js
class Conta {
  constructor(id, nome, saldo) {
    this.id = id;
    this.nome = nome;
    this.saldo = saldo;
  }
}

module.exports = Conta;
```

---

# 🔌 5. Como Registrar Rotas no `app.js`

O arquivo `app.js` já está preparado para registrar rotas.
Cada equipe deve adicionar somente sua própria rota (ou isso será feito no merge do PR).

Exemplo:

```js
const contasRoutes = require("./src/routes/contasRoutes");
app.use("/contas", contasRoutes);
```

Regras importantes:

* A rota deve estar sob um prefixo correto (`/contas`, `/emprestimos`, `/cadastro`)
* Não remover nem alterar rotas de outras equipes

---

# 🧪 6. Testes Locais

Antes de enviar o PR:

1. Rodar o servidor:

```
npm start
```

2. Testar sua rota:

```
http://localhost:3000/contas
```

3. Verificar mensagens de erro no console

---

# 📦 7. Boas Práticas Obrigatórias

### ✔ Nome de arquivos padronizado

`<area>Routes.js`, `<area>Controller.js`, `<area>Model.js`

### ✔ Código limpo

* Sem console.log desnecessário
* Controllers não devem conter lógica pesada
* Models não devem acessar o Express

### ✔ Não alterar a arquitetura

As pastas devem permanecer assim:

```
routes/
controllers/
models/
views/
```

---

# 📤 8. Processo de Aprovação de PR

O PR será aceito quando:

* Estrutura MVC está correta
* Código segue o padrão definido acima
* Não há alterações em áreas de outras equipes
* O build sobe localmente sem erros
* Não há arquivos desnecessários (ex: .env, node_modules)

---

# 🏁 9. Em caso de dúvida

Entrar em contato com a equipe de arquitetura ou abrir uma issue com o formato:

**Issue template:**

* Equipe:
* Arquivo:
* Dúvida:
* Impacto:
* Sugestão: