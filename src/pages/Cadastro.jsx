import { useEffect, useState } from "react";

import Formulario from "../components/Formulario";
import ListaTarefas from "../components/ListaTarefas";

function Cadastro() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("tarefas");

    if (dadosSalvos) {
      setTarefas(JSON.parse(dadosSalvos));
    }
  }, []);

  function adicionarTarefa(tarefa) {
    const novasTarefas = [...tarefas, tarefa];

    setTarefas(novasTarefas);

    localStorage.setItem(
      "tarefas",
      JSON.stringify(novasTarefas)
    );
  }

  function excluirTarefa(index) {
    const novasTarefas = tarefas.filter(
      (_, i) => i !== index
    );

    setTarefas(novasTarefas);

    localStorage.setItem(
      "tarefas",
      JSON.stringify(novasTarefas)
    );
  }

  return (
    <div>
      <h1>Cadastro de Tarefas</h1>

      <Formulario adicionarTarefa={adicionarTarefa} />

      <ListaTarefas
        tarefas={tarefas}
        excluirTarefa={excluirTarefa}
      />
    </div>
  );
}

export default Cadastro;