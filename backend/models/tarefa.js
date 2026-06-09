import mongoose from "mongoose";

const tarefaSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  prioridade: String,
  dia: String,
  horario: String,
});

const Tarefa = mongoose.model(
  "Tarefa",
  tarefaSchema
);

export default Tarefa;