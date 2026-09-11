import { useState } from 'react'

const LINKS = [
  { href: '#inicio', texto: 'Início' },
  { href: '#sobre', texto: 'Sobre' },
  { href: '#atividades', texto: 'Atividades' },
  { href: '#contato', texto: 'Contato' },
]

function Cabecalho({ tema, aoAlternarTema }) {
  const [secaoAtiva, setSecaoAtiva] = useState('inicio')

  return (
    <header className="cabecalho">
      <div className="cabecalho-interno">
        <a className="marca" href="#inicio" onClick={() => setSecaoAtiva('inicio')}>
          <span>
            <span className="marca-titulo">Peu Borges</span>
            <span className="marca-legenda">Portfólio Full Stack</span>
          </span>
        </a>

        <nav aria-label="Navegação principal">
          <ul className="menu">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={secaoAtiva === link.href.slice(1) ? 'true' : undefined}
                  onClick={() => setSecaoAtiva(link.href.slice(1))}
                >
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="botao-tema"
          onClick={aoAlternarTema}
          aria-pressed={tema === 'escuro'}
        >
          {tema === 'escuro' ? 'Tema claro' : 'Tema escuro'}
        </button>
      </div>
    </header>
  )
}

export default Cabecalho