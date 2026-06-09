import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://taskflow01:saulon3@cluster0.6fnac6x.mongodb.net/?appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB conectado!");
  })
  .catch((erro) => {
    console.log("Erro:", erro);
  });

app.listen(3001, () => {
  console.log(
    "Servidor rodando na porta 3001"
  );
});