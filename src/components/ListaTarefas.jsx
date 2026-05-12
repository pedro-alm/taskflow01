function ListaTarefas({
  tarefas,
  excluirTarefa,
}) {
  return (
    <div className="mt-4">
      {tarefas.map((tarefa, index) => (
        <div className="card p-3 mb-3" key={index}>
          <h3>{tarefa.titulo}</h3>

          <p>{tarefa.descricao}</p>

          <strong>{tarefa.prioridade}</strong>

          <p>
            <strong>Dia:</strong> {tarefa.dia}
          </p>

          <p>
<<<<<<< HEAD
            <strong>Horário:</strong> {tarefa.horario}
=======
            <strong>Horário:</strong>{" "}
            {tarefa.horario}
>>>>>>> 3b05666409d58bb918123325c3f6ab576a6b8d96
          </p>

          <button
            className="btn btn-danger mt-2"
<<<<<<< HEAD
            onClick={() => excluirTarefa(index)}
=======
            onClick={() =>
              excluirTarefa(index)
            }
>>>>>>> 3b05666409d58bb918123325c3f6ab576a6b8d96
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListaTarefas;