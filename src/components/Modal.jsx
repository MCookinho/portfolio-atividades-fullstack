import { useEffect, useRef } from 'react'

function Modal({ atividade, onFechar }) {
  const botaoFecharRef = useRef(null)

  useEffect(() => {
    function aoPressionarTecla(evento) {
      if (evento.key === 'Escape') {
        onFechar()
      }
    }

    document.addEventListener('keydown', aoPressionarTecla)
    botaoFecharRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', aoPressionarTecla)
    }
  }, [onFechar])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      className="modal-sobreposicao"
      onClick={(evento) => {
        if (evento.target === evento.currentTarget) {
          onFechar()
        }
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-label={`Atividade ${atividade.numero}`}>
        <div className="modal-cabecalho">
          <div>
            <span className="modal-numero">Atividade {atividade.numero}</span>
            <h3 className="modal-titulo">{atividade.titulo}</h3>
          </div>
          <button
            type="button"
            className="modal-fechar"
            onClick={onFechar}
            ref={botaoFecharRef}
            aria-label="Fechar detalhes"
          >
            ×
          </button>
        </div>

        <div className="modal-tecnologias">
          {atividade.tecnologias.map((tecnologia) => (
            <span className="chip-tecnologia" key={tecnologia}>
              {tecnologia}
            </span>
          ))}
        </div>

        <div className="modal-bloco">
          <h4 className="modal-bloco-titulo">Descrição</h4>
          <p>{atividade.descricao}</p>
        </div>

        <div className="modal-bloco">
          <h4 className="modal-bloco-titulo">O que aprendi</h4>
          <p>{atividade.aprendizagem}</p>
        </div>

        <div className="modal-bloco">
          <h4 className="modal-bloco-titulo">Evidência</h4>
          <p>{atividade.evidencia}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal