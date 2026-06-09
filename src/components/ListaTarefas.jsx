function ListaTarefas({
  tarefas,
  excluirTarefa,
}) {
  return (
    <div className="mt-4">
      {tarefas.map((tarefa) => (
        <div
          className="card p-3 mb-3"
          key={tarefa._id}
        >
          <h3>{tarefa.titulo}</h3>

          <p>{tarefa.descricao}</p>

          <strong>{tarefa.prioridade}</strong>

          <p>
            <strong>Dia:</strong> {tarefa.dia}
          </p>

          <p>
            <strong>Mês:</strong> {tarefa.mes}
          </p>

          <p>
            <strong>Horário:</strong>{" "}
            {tarefa.horario}
          </p>

          <button
            className="btn btn-danger mt-2"
            onClick={() =>
              excluirTarefa(tarefa._id)
            }
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListaTarefas;