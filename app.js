const express = require('express');
const app = express();
const db = require('./db/connection');

const port = 3000;

app.listen(port, function () {
  console.log(`O express está rodando na porta ${port}`);
});

//db connection
db.authenticate()
  .then(() => {
    console.log('Conexão realizada com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });


//routes
app.get('/', (req, res) => {
  res.send('Está funcionando');
});