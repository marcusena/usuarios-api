const express = require("express");
const app = express();
const consign = require("consign"); //responsável por carregar todos os arquivos que estão na raiz do projeto
const database = require("./database/db");


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.database = database;

consign()
  .then("/controller")
  .then("/routes/routes.js")
  .into(app);

const port = 8088;
app.listen(process.env.PORT || port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
