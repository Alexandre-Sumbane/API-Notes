const express = require("express");

const app = express();

const rotas = require("./src/routes/index");

app.use(express.json());
app.use(rotas);


app.listen(3000, (req, res)=>{
    console.log(`Servidor rodando na porta, http://localhost:3000`);
})




