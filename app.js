const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const db = require('./db/connection');
const bodyParser = require('body-parser');
const Job = require('./models/Job');

const port = 3000;

app.listen(port, function () {
  console.log(`O express está rodando na porta ${port}`);
});

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

//handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//static folder
app.use(express.static(path.join(__dirname, 'public')));

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
  res.render('index');
});

//jobs routes
app.use('/jobs', require('./routes/jobs'));