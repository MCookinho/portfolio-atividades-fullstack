import { useState } from 'react'

function FormularioContato() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  function atualizarCampo(campo, valor) {
    setForm((anterior) => ({ ...anterior, [campo]: valor }))
  }

  function aoEnviar(evento) {
    evento.preventDefault()
    setEnviado(true)
    setForm({ nome: '', email: '', assunto: '', mensagem: '' })
  }

  return (
    <form className="formulario" onSubmit={aoEnviar}>
      <div className="formulario-duas-colunas">
        <div className="formulario-campo">
          <label htmlFor="contato-nome">Nome</label>
          <input
            type="text"
            id="contato-nome"
            required
            value={form.nome}
            onChange={(evento) => atualizarCampo('nome', evento.target.value)}
          />
        </div>
        <div className="formulario-campo">
          <label htmlFor="contato-email">E-mail</label>
          <input
            type="email"
            id="contato-email"
            required
            value={form.email}
            onChange={(evento) => atualizarCampo('email', evento.target.value)}
          />
        </div>
      </div>

      <div className="formulario-campo">
        <label htmlFor="contato-assunto">Assunto</label>
        <input
          type="text"
          id="contato-assunto"
          required
          value={form.assunto}
          onChange={(evento) => atualizarCampo('assunto', evento.target.value)}
        />
      </div>

      <div className="formulario-campo">
        <label htmlFor="contato-mensagem">Mensagem</label>
        <textarea
          id="contato-mensagem"
          rows="5"
          required
          value={form.mensagem}
          onChange={(evento) => atualizarCampo('mensagem', evento.target.value)}
        />
      </div>

      <button type="submit" className="botao-primario">
        Enviar mensagem
      </button>

      {enviado && (
        <div className="mensagem-confirmacao" role="alert">
          Mensagem enviada com sucesso (simulado). Obrigado pelo contato!
        </div>
      )}
    </form>
  )
}

export default FormularioContato