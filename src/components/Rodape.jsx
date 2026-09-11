function Rodape() {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className="rodape">
      <div className="rodape-interno">
        <span>
          Peu Borges · Desenvolvimento Full Stack · {anoAtual}
        </span>
        <a href="#inicio">Voltar ao início</a>
      </div>
    </footer>
  )
}

export default Rodape