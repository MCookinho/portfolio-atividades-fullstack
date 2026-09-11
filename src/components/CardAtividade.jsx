const CLASSE_STATUS = {
  'Concluída': 'status-concluida',
  'Em andamento': 'status-em-andamento',
  'Planejada': 'status-planejada',
}

function CardAtividade({ atividade, onVerDetalhes }) {
  return (
    <article className="card-atividade">
      <div className="card-cabecalho">
        <span className="card-numero" aria-hidden="true">
          {atividade.numero}
        </span>
        <span className={`status ${CLASSE_STATUS[atividade.status]}`}>
          {atividade.status}
        </span>
      </div>

      <div>
        <h3 className="card-titulo">{atividade.titulo}</h3>
        <p className="card-descricao">{atividade.descricao}</p>
      </div>

      <ul className="card-tecnologias" aria-label="Tecnologias da atividade">
        {atividade.tecnologias.map((tecnologia) => (
          <li className="chip-tecnologia" key={tecnologia}>
            {tecnologia}
          </li>
        ))}
      </ul>

      <div className="card-rodape">
        <button
          type="button"
          className="botao-ver"
          onClick={() => onVerDetalhes(atividade)}
        >
          Ver atividade
        </button>
        {atividade.link && (
          <a
            className="botao-abrir"
            href={atividade.link}
            target="_blank"
            rel="noreferrer"
          >
            Abrir
          </a>
        )}
      </div>
    </article>
  )
}

export default CardAtividade