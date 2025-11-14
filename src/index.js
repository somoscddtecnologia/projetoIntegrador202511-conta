const path = require('path');
const express = require('express');
const app = express();

// PORT
const PORT = process.env.PORT || 5001;

// Static assets (public folder)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Helper to send a view file
function sendView(res, viewName) {
  return res.sendFile(path.join(__dirname, 'views', `${viewName}.html`));
}

// Routes (Views)
app.get('/', (_req, res) => sendView(res, 'index'));
app.get('/cadastro', (_req, res) => sendView(res, 'cadastro'));
app.get('/contas', (_req, res) => sendView(res, 'contas'));
app.get('/emprestimos', (_req, res) => sendView(res, 'emprestimos'));

// Simple 404 fallback
app.use((_req, res) => res.status(404).send('<h1>404</h1><p>Página não encontrada</p>'));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} -> http://localhost:${PORT}`);
});