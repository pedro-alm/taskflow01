import { useState } from "react";

function Formulario({ adicionarTarefa }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("");

  function enviarFormulario(e) {
    e.preventDefault();

    const novaTarefa = {
      titulo,
      descricao,
      prioridade,
    };

    adicionarTarefa(novaTarefa);

    setTitulo("");
    setDescricao("");
    setPrioridade("");
  }

  return (
    <form onSubmit={enviarFormulario}>
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <input
        className="form-control mb-3"
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <input
        className="form-control mb-3"
        type="text"
        placeholder="Prioridade"
        value={prioridade}
        onChange={(e) => setPrioridade(e.target.value)}
      />

      <button className="btn btn-primary">
        Adicionar
      </button>
    </form>
  );
}

export default Formulario;
