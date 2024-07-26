const express = require('express');
const app = express();


const port = 3000;

app.listen(port, function () {
  console.log(`O express está rodando na porta ${port}`);
});

app.get('/', (req, res) => {
  res.send('Está funcionando');
});