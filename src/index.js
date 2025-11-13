const PORT = process.env.PORT || 5001; 

const express = require('express');
const app = express();
const routes = require('./routes.js')

app.use(express.json()); // permite receber JSON no body
app.use('/', routes);     // usa as rotas

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});