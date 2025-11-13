const express = require('express');
const app = express();

const PORT = process.env.PORT || 5001; 

app.get('/', (req, res) => {
  res.send('Hello World Conta!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});