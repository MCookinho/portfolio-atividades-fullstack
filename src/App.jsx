import { useEffect, useMemo, useState } from 'react'

import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape.jsx'
import CardAtividade from './components/CardAtividade.jsx'
import Modal from './components/Modal.jsx'
import Sobre from './components/Sobre.jsx'
import FormularioContato from './components/FormularioContato.jsx'
import { BarraProgresso, ContadorProgresso } from './components/Progresso.jsx'

import { atividades } from './data/atividades.js'

import './styles/variables.css'
import './styles/global.css'
import './styles/app.css'
import './styles/hero.css'
import './styles/cabecalho.css'
import './styles/cards.css'
import './styles/filtros.css'
import './styles/progresso.css'
import './styles/modal.css'
import './styles/formulario.css'
import './styles/sobre.css'
import './styles/rodape.css'

const TECNOLOGIAS_FILTRO = ['Todos', 'HTML', 'CSS', 'React', 'Git', 'Vercel']

const ERROS_FLEXBOX = [
  'Menu espaçado com gap em vez de margens individuais',
  'Botões do cabeçalho alinhados verticalmente com align-items',
  'Marca e menu distribuídos com justify-content: space-between',
]

const REGRAS_GRID = [
  'grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))',
  'Sem larguras fixas, evitando rolagem horizontal',
  'Colunas criam linhas automaticamente conforme o espaço',
]

const RESPONSIVIDADE_TESTES = [
  '360px – menu empilhado, grade com 1 coluna',
  '768px – grade com 2 colunas',
  '1440px – grade com 3 colunas',
]

const CHECKLIST_ACESSIBILIDADE = [
  'Hierarquia de headings: um único h1 e títulos em ordem h2 > h3',
  'Todos os campos do formulário possuem label associado',
  'Foco visível em links, botões e campos',
  'Status também indicado por texto, não só por cor',
  'Modal fecha com Escape e é navegável por teclado',
]

const CHECKLIST_FINAL = [
  'Menu e âncoras funcionando',
  'Filtros e busca respondendo',
  'Barra de progresso sincronizada com o contador',
  'Modal abrindo e fechando',
  'Formulário validando e mostrando confirmação',
  'Tema claro/escuro persistindo a preferência',
  'Responsividade validada em 360px, 768px e 1440px',
]

const STATUS_DEMO = ['Concluída', 'Em andamento', 'Planejada']

function App() {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem('tema-portfolio') || 'claro'
  })
  const [filtro, setFiltro] = useState('Todos')
  const [busca, setBusca] = useState('')
  const [atividadeAtiva, setAtividadeAtiva] = useState(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema)
    localStorage.setItem('tema-portfolio', tema)
  }, [tema])

  const concluidas = atividades.filter(
    (atividade) => atividade.status === 'Concluída',
  ).length

  const atividadesFiltradas = useMemo(() => {
    const textoBusca = busca.trim().toLowerCase()

    return atividades.filter((atividade) => {
      const porTecnologia =
        filtro === 'Todos' || atividade.tecnologias.includes(filtro)

      const porBusca =
        textoBusca === '' ||
        atividade.titulo.toLowerCase().includes(textoBusca) ||
        atividade.descricao.toLowerCase().includes(textoBusca)

      return porTecnologia && porBusca
    })
  }, [filtro, busca])

  return (
    <div className="app">
      <Cabecalho
        tema={tema}
        aoAlternarTema={() =>
          setTema((atual) => (atual === 'escuro' ? 'claro' : 'escuro'))
        }
      />

      <main className="main">
        <section className="hero" id="inicio" aria-labelledby="hero-titulo">
          <div className="hero-linha">
            <img
              className="hero-foto"
              src="/foto-perfil.jpg"
              alt="Foto de João Pedro Borges, estudante de Engenharia da Computação na SENAI Cimatec"
              width="128"
              height="128"
            />
            <div>
              <h1 id="hero-titulo" className="hero-titulo">
                João Pedro Borges
              </h1>
              <p className="hero-funcao">
                Eng. da Computação · Desenvolvedor Full-Stack · Game Dev
              </p>
            </div>
          </div>
          <p className="hero-descricao">
            Este portfólio reúne as 30 atividades do roteiro de revisão: HTML,
            CSS, React, Git e Vercel. Cada cartão descreve uma entrega, a
            tecnologia usada e o que foi aprendido.
          </p>
          <p className="hero-versoes">
            Ambiente pronto: Node v24.20.0 · npm 12.0.2 · Git 2.55.0
          </p>
          <a className="botao-primario" href="#atividades">
            Ver as atividades
          </a>
        </section>

        <section className="secao" id="sobre" aria-labelledby="sobre-titulo">
          <h2 id="sobre-titulo" className="secao-titulo">
            Sobre
          </h2>
          <Sobre />
        </section>

        <section className="secao" id="atividades" aria-labelledby="atividades-titulo">
          <h2 id="atividades-titulo" className="secao-titulo">
            Atividades
          </h2>
          <p className="secao-subtitulo">
            As 30 entregas do roteiro, numeradas de 1 a 30. Use os filtros para
            navegar por tecnologia ou busque por texto.
          </p>

          <div className="controle-progresso">
            <ContadorProgresso concluidas={concluidas} total={atividades.length} />
            <BarraProgresso concluidas={concluidas} total={atividades.length} />
          </div>

          <div className="barra-ferramentas">
            <div className="grupo-filtros" role="group" aria-label="Filtrar por tecnologia">
              {TECNOLOGIAS_FILTRO.map((tecnologia) => (
                <button
                  type="button"
                  key={tecnologia}
                  className={`filtro-btn ${filtro === tecnologia ? 'ativo' : ''}`}
                  aria-pressed={filtro === tecnologia}
                  onClick={() => setFiltro(tecnologia)}
                >
                  {tecnologia}
                </button>
              ))}
            </div>
            <input
              type="search"
              className="busca"
              placeholder="Buscar atividade..."
              aria-label="Buscar atividades"
              value={busca}
              onChange={(evento) => setBusca(evento.target.value)}
            />
          </div>

          {atividadesFiltradas.length > 0 ? (
            <div className="grade-atividades">
              {atividadesFiltradas.map((atividade) => (
                <CardAtividade
                  key={atividade.id}
                  atividade={atividade}
                  onVerDetalhes={setAtividadeAtiva}
                />
              ))}
            </div>
          ) : (
            <p className="mensagem-vazia" role="status">
              Nenhuma atividade encontrada com esses critérios.
            </p>
          )}

          <div className="bloco-registros" aria-label="Registros das atividades">
            <div className="registro">
              <h3>Atividade 14 – Exemplo de objeto de dados</h3>
              <p>Estrutura usada para separar conteúdo da apresentação.</p>
              <pre className="exemplo-objeto">{JSON.stringify(atividades[13], null, 2)}</pre>
            </div>

            <div className="registro">
              <h3>Atividade 16 – Estados de status</h3>
              <p>Os três estados possíveis, aplicados aos cartões:</p>
              <div className="legenda-status">
                {STATUS_DEMO.map((statusNome) => (
                  <span
                    key={statusNome}
                    className={`status status-${statusNome
                      .toLowerCase()
                      .replace(' ', '-')}`}
                  >
                    {statusNome}
                  </span>
                ))}
              </div>
            </div>

            <div className="registro">
              <h3>Atividade 8 – Problemas resolvidos com Flexbox</h3>
              <ul className="registro-lista">
                {ERROS_FLEXBOX.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="registro">
              <h3>Atividade 9 – Regra do Grid aplicada</h3>
              <ul className="registro-lista">
                {REGRAS_GRID.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="registro">
              <h3>Atividade 10 – Testes de responsividade</h3>
              <ul className="registro-lista">
                {RESPONSIVIDADE_TESTES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="registro">
              <h3>Atividade 26 – Verificações de acessibilidade</h3>
              <ul className="checklist">
                {CHECKLIST_ACESSIBILIDADE.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="registro" id="card-30">
              <h3>Atividade 30 – Checklist final</h3>
              <p>
                Publicado em{' '}
                <a href="https://revisao-full-stack.vercel.app" target="_blank" rel="noreferrer">
                  https://revisao-full-stack.vercel.app
                </a>
              </p>
              <ul className="checklist">
                {CHECKLIST_FINAL.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="secao" id="contato" aria-labelledby="contato-titulo">
          <h2 id="contato-titulo" className="secao-titulo">
            Contato
          </h2>
          <p className="secao-subtitulo">
            Preencha o formulário para enviar uma mensagem. O envio é simulado.
          </p>
          <FormularioContato />
        </section>
      </main>

      <Rodape />

      {atividadeAtiva && (
        <Modal atividade={atividadeAtiva} onFechar={() => setAtividadeAtiva(null)} />
      )}
    </div>
  )
}

export default App