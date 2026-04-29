function ListaTarefas({ tarefas }) {
  return (
    <div className="mt-4">
      {tarefas.map((tarefa, index) => (
        <div className="card p-3 mb-3" key={index}>
          <h3>{tarefa.titulo}</h3>

          <p>{tarefa.descricao}</p>

          <strong>{tarefa.prioridade}</strong>
        </div>
      ))}
    </div>
  );
}

export default ListaTarefas;
