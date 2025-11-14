const path = require('path');
const express = require('express');
const app = express();

// Configura pasta de arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Helper para enviar arquivos de view
function view(nome) {
  return path.join(__dirname, 'views', nome);
}

// Rotas de páginas (View Layer)
app.get('/', (_req, res) => res.sendFile(view('index.html')));
app.get('/cadastro', (_req, res) => res.sendFile(view('cadastro.html')));
app.get('/contas', (_req, res) => res.sendFile(view('contas.html')));
app.get('/emprestimos', (_req, res) => res.sendFile(view('emprestimos.html')));

// 404 simples
app.use((req, res) => {
  res.status(404).send('<h1>404</h1><p>Página não encontrada</p>');
});

const PORT = process.env.PORT || 5001;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Servidor ouvindo em http://localhost:${PORT}`));
}

module.exports = app;