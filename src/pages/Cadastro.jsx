import { useState, useEffect } from "react";

import Formulario from "../components/Formulario";
import ListaTarefas from "../components/ListaTarefas";

function Cadastro() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    buscarTarefas();
  }, []);

  async function buscarTarefas() {
    const resposta = await fetch(
      `${import.meta.env.VITE_API_URL}/api/tarefas`
    );

    const dados = await resposta.json();

    setTarefas(dados);
  }

  async function adicionarTarefa(tarefa) {
    await fetch(
      `${import.meta.env.VITE_API_URL}/api/tarefas`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(tarefa),
      }
    );

    buscarTarefas();
  }

  async function excluirTarefa(id) {
    await fetch(
      `${import.meta.env.VITE_API_URL}/api/tarefas/${id}`,
      {
        method: "DELETE",
      }
    );

    buscarTarefas();
  }

  return (
    <div>
      <h1>flarisn3</h1>

      <Formulario
        adicionarTarefa={adicionarTarefa}
      />

      <ListaTarefas
        tarefas={tarefas}
        excluirTarefa={excluirTarefa}
      />
    </div>
  );
}

export default Cadastro;