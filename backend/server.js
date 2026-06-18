import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Tarefa from "./models/tarefa.js";
import process from "process";

const app = express();
app.use(cors());
app.use(express.json());

// Só conecta ao banco fora do ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  mongoose
    .connect("mongodb+srv://taskflow01:saulon3@cluster0.6fnac6x.mongodb.net/?appName=Cluster0")
    .then(() => console.log("MongoDB conectado!"))
    .catch((erro) => console.log("Erro:", erro));
}

app.get("/api/tarefas", async (req, res) => {
  try {
    const tarefas = await Tarefa.find();
    res.json(tarefas);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.post("/api/tarefas", async (req, res) => {
  try {
    const tarefa = await Tarefa.create(req.body);
    res.status(201).json(tarefa);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.put("/api/tarefas/:id", async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(tarefa);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.delete("/api/tarefas/:id", async (req, res) => {
  try {
    await Tarefa.findByIdAndDelete(req.params.id);
    res.json({ mensagem: "Tarefa removida com sucesso" });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

// Só inicia o servidor fora do ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
  });
}

export default app;