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