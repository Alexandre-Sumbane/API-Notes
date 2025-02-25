import express from "express";

const app = express();


app.use(express.json());

import usersRouter from "./src/routes/usersRoutes.js";

app.use("/register", usersRouter);


app.listen(3000, (req, res)=>{
    console.log(`Servidor rodando na porta, http://localhost:3000`);
})




