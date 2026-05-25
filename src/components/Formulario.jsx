import { useState } from "react";

function Formulario({ adicionarTarefa }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] =
    useState("");
  const [prioridade, setPrioridade] =
    useState("");
  const [dia, setDia] = useState("");
  const [horario, setHorario] =
    useState("");
  const [mes, setMes] = useState("");

  function enviarFormulario(e) {
    e.preventDefault();

    const novaTarefa = {
      titulo,
      descricao,
      prioridade,
      dia,
      mes,
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

      <select
        className="form-control mb-3"
        value={mes}
        onChange={(e) =>
         setMes(e.target.value)
        }
      >
        <option value="">
          Selecione o mês
        </option>

        <option>Janeiro</option>
        <option>Fevereiro</option>
        <option>Março</option>
        <option>Abril</option>
        <option>Maio</option>
        <option>Junho</option>
        <option>Julho</option>
        <option>Agosto</option>
        <option>Setembro</option>
        <option>Outubro</option>
        <option>Novembro</option>
        <option>Dezembro</option>
      </select>

      <input
        className="form-control mb-3"
        type="time"
        value={horario}
        onChange={(e) =>
          setHorario(e.target.value)
        }
      />

      <button className="btn btn-primary">
        Adicionar
      </button>
    </form>
  );
}

export default Formulario;