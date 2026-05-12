import { useState } from "react";

function Formulario({ adicionarTarefa }) {
  const [titulo, setTitulo] = useState("");
<<<<<<< HEAD
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [dia, setDia] = useState("");
  const [horario, setHorario] = useState("");
=======
  const [descricao, setDescricao] =
    useState("");
  const [prioridade, setPrioridade] =
    useState("");
  const [dia, setDia] = useState("");
  const [horario, setHorario] =
    useState("");
>>>>>>> 3b05666409d58bb918123325c3f6ab576a6b8d96

  function enviarFormulario(e) {
    e.preventDefault();

    const novaTarefa = {
      titulo,
      descricao,
      prioridade,
      dia,
      horario,
    };

    adicionarTarefa(novaTarefa);

    setTitulo("");
    setDescricao("");
    setPrioridade("");
    setDia("");
    setHorario("");
  }

  return (
    <form onSubmit={enviarFormulario}>
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) =>
          setTitulo(e.target.value)
        }
      />

      <input
        className="form-control mb-3"
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) =>
          setDescricao(e.target.value)
        }
      />

      <input
        className="form-control mb-3"
        type="text"
        placeholder="Prioridade"
        value={prioridade}
        onChange={(e) =>
          setPrioridade(e.target.value)
        }
      />

      <select
        className="form-control mb-3"
        value={dia}
        onChange={(e) =>
          setDia(e.target.value)
        }
      >
        <option value="">
          Selecione o dia
        </option>

        <option>Segunda</option>
        <option>Terça</option>
        <option>Quarta</option>
        <option>Quinta</option>
        <option>Sexta</option>
      </select>

      <input
        className="form-control mb-3"
        type="time"
        value={horario}
        onChange={(e) =>
          setHorario(e.target.value)
        }
      />

      <select
        className="form-control mb-3"
        value={dia}
        onChange={(e) => setDia(e.target.value)}
      >
        <option value="">Selecione o dia</option>
        <option>Segunda</option>
        <option>Terça</option>
        <option>Quarta</option>
        <option>Quinta</option>
        <option>Sexta</option>
      </select>

      <input
        className="form-control mb-3"
        type="time"
        value={horario}
        onChange={(e) => setHorario(e.target.value)}
      />

      <button className="btn btn-primary">
        Adicionar
      </button>

<<<<<<< HEAD
<input
  className="form-control mb-3"
  type="time"
  value={horario}
  onChange={(e) => setHorario(e.target.value)}
/>

<button className="btn btn-primary">
  Adicionar
</button>

</form>
);
}
export default Formulario;
=======
export default Formulario;
>>>>>>> 3b05666409d58bb918123325c3f6ab576a6b8d96
