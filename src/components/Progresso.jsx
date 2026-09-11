function ContadorProgresso({ concluidas, total }) {
  return (
    <div className="contador-progresso">
      <span className="contador-valor">{concluidas}</span>
      <span className="contador-rotulo">de {total} atividades concluídas</span>
    </div>
  )
}

function BarraProgresso({ concluidas, total }) {
  const percentual = total === 0 ? 0 : Math.round((concluidas / total) * 100)

  return (
    <div
      className="barra-progresso"
      role="progressbar"
      aria-valuenow={percentual}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progresso: ${percentual}% concluído`}
    >
      <div
        className="barra-preenchimento"
        style={{ width: `${percentual}%` }}
      />
    </div>
  )
}

export { ContadorProgresso, BarraProgresso }