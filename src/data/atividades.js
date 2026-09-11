export const atividades = [
  {
    id: 1,
    numero: 1,
    titulo: 'Preparar o ambiente e criar o projeto',
    descricao:
      'Verifiquei as ferramentas instaladas (Node.js, npm, Git e editor) e criei a aplicação React com Vite.',
    tecnologias: ['React', 'Git'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Entendi como o Vite monta um projeto React rapidamente, diferenciando arquivos-fonte (src) de arquivos públicos (public).',
    evidencia:
      'Node v24.20.0, npm 12.0.2, Git 2.55.0 e o projeto executando em http://localhost:5173.',
  },
  {
    id: 2,
    numero: 2,
    titulo: 'Inicializar o repositório Git',
    descricao:
      'Iniciei o versionamento com git init, validei o .gitignore e defini a branch principal como main.',
    tecnologias: ['Git'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Repositório guarda o histórico do projeto; commit é uma foto do código em um momento; branch é uma linha de desenvolvimento.',
    evidencia:
      'git log disponível com o histórico do projeto e node_modules ignorado pelo .gitignore.',
  },
  {
    id: 3,
    numero: 3,
    titulo: 'Construir a estrutura semântica',
    descricao:
      'Organizei a página com elementos HTML semânticos: header, nav, main, section e footer.',
    tecnologias: ['HTML'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Elementos semânticos dão significado ao conteúdo, ajudam acessibilidade e SEO, em vez de divs genéricas.',
    evidencia:
      'A página usa um único h1 e headings em hierarquia (h2 > h3).',
  },
  {
    id: 4,
    numero: 4,
    titulo: 'Criar cabeçalho e identidade',
    descricao:
      'Adicionei nome, curso, descrição objetiva, avatar com alt adequado e botão para a seção de atividades.',
    tecnologias: ['HTML', 'CSS'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'A identidade visual precisa comunicar quem sou de forma rápida, com imagem descrita por texto alternativo.',
    evidencia:
      'Hero com foto de perfil (alt adequado), nome, formação e chamada para as atividades.',
  },
  {
    id: 5,
    numero: 5,
    titulo: 'Criar menu de navegação',
    descricao:
      'Criei links internos para Início, Sobre, Atividades e Contato, com rolagem suave e foco visível.',
    tecnologias: ['HTML', 'CSS'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Navegação por âncoras leva o usuário às seções; :focus-visible garante que o teclado mostre onde está.',
    evidencia: 'Menu funcional no cabeçalho; todos os links testados.',
  },
  {
    id: 6,
    numero: 6,
    titulo: 'Definir o sistema visual em CSS',
    descricao:
      'Criei variáveis CSS para cores, espaçamentos, raios e sombras, além de normalização básica.',
    tecnologias: ['CSS'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Variáveis CSS centralizam decisões de design em um só lugar e facilitam a troca de tema depois.',
    evidencia: 'Paleta, tipografia e espaçamentos definidos em variables.css.',
  },
  {
    id: 7,
    numero: 7,
    titulo: 'Construir cartões de atividades',
    descricao:
      'Desenvolvi o estilo do cartão com número, título, descrição, tecnologia e ação, com hover e focus.',
    tecnologias: ['CSS'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Estados interativos (hover e focus) guiam o usuário sem depender só de cor, mantendo contraste de leitura.',
    evidencia: 'Cartões com transições suaves e contraste AA.',
  },
  {
    id: 8,
    numero: 8,
    titulo: 'Organizar o layout com Flexbox',
    descricao:
      'Usei Flexbox no cabeçalho, menu e grupo de botões com justify-content, align-items e gap.',
    tecnologias: ['CSS'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Flexbox resolve alinhamentos em uma dimensão: distribuir elementos em linha com espaçamento uniforme.',
    evidencia:
      'Cabeçalho e menu alinhados; problemas de espaçamento entre botões resolvidos com gap.',
  },
  {
    id: 9,
    numero: 9,
    titulo: 'Organizar atividades com CSS Grid',
    descricao:
      'Criei uma grade responsiva para os cartões usando grid-template-columns com auto-fit e minmax.',
    tecnologias: ['CSS'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Grid organiza em duas dimensões; auto-fit + minmax cria colunas que se ajustam sozinhas à largura.',
    evidencia: 'Cards fluem em colunas conforme o tamanho da tela.',
  },
  {
    id: 10,
    numero: 10,
    titulo: 'Tornar a homepage responsiva',
    descricao:
      'Criei media queries e testei em 360px, 768px e 1440px, ajustando menu, tipografia e a grade.',
    tecnologias: ['CSS'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Media queries aplicam CSS conforme a largura; testar em vários tamanhos evita rolagem horizontal.',
    evidencia:
      'Layout íntegro nos três tamanhos; menu se reorganiza em telas pequenas.',
  },
  {
    id: 11,
    numero: 11,
    titulo: 'Criar o componente Cabecalho',
    descricao:
      'Extraí o cabeçalho para um componente próprio (Cabecalho.jsx) e o importei em App.jsx.',
    tecnologias: ['React'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Componentização divide a interface em partes com responsabilidade clara e facilita a manutenção.',
    evidencia: 'src/components/Cabecalho.jsx usado no topo da aplicação.',
  },
  {
    id: 12,
    numero: 12,
    titulo: 'Criar o componente Rodape',
    descricao:
      'Criei Rodape.jsx com o nome do autor, o ano atual calculado no código e link de retorno ao início.',
    tecnologias: ['React'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Calcular o ano com new Date().getFullYear() evita valores fixos desatualizados.',
    evidencia: 'Rodapé no fim da página mostra 2026 automaticamente.',
  },
  {
    id: 13,
    numero: 13,
    titulo: 'Criar o componente CardAtividade',
    descricao:
      'Transformei os cartões em um componente reutilizável que recebe as informações por props.',
    tecnologias: ['React'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Props são as entradas de um componente; o mesmo CardAtividade serve para as 30 atividades.',
    evidencia:
      'CardAtividade recebe numero, titulo, descricao, tecnologias, status e onVerDetalhes.',
  },
  {
    id: 14,
    numero: 14,
    titulo: 'Modelar os dados das atividades',
    descricao:
      'Separei conteúdo e apresentação: criei um array de objetos com id, numero, titulo, descricao e mais.',
    tecnologias: ['React'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Centralizar os dados em um arquivo permite alterar conteúdo sem tocar nos componentes.',
    evidencia: 'Veja abaixo um objeto de exemplo da estrutura de dados.',
  },
  {
    id: 15,
    numero: 15,
    titulo: 'Renderizar a lista com map',
    descricao:
      'Usei map para transformar o array em componentes CardAtividade, com key única para cada um.',
    tecnologias: ['React'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'map cria um componente para cada item; a key ajuda o React a identificar cada elemento na lista.',
    evidencia: '30 cartões renderizados com numeração correta de 1 a 30.',
  },
  {
    id: 16,
    numero: 16,
    titulo: 'Mostrar status condicional',
    descricao:
      'Cada cartão exibe o status Planejada, Em andamento ou Concluída com classes visuais distintas.',
    tecnologias: ['React', 'CSS'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Renderização condicional decide o que mostrar a partir de uma condição, sem poluir o JSX.',
    evidencia:
      'Os três estados possíveis estão demonstrados e aplicados aos cartões.',
  },
  {
    id: 17,
    numero: 17,
    titulo: 'Criar filtro por tecnologia',
    descricao:
      'Criei botões Todos, HTML, CSS, React, Git e Vercel que filtram a lista usando useState.',
    tecnologias: ['React'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'useState guarda o filtro selecionado; a lista exibida deriva do filtro sem alterar o array original.',
    evidencia: 'Filtre a grade acima e veja os cartões sendo atualizados.',
  },
  {
    id: 18,
    numero: 18,
    titulo: 'Criar busca por texto',
    descricao:
      'Adicionei um campo de busca controlado que filtra por título ou descrição, sem diferenciar maiúsculas.',
    tecnologias: ['React'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Campos controlados guardam o texto no estado; comparar com toLowerCase() torna a busca case-insensitive.',
    evidencia: 'Digite "grid" ou "modal" e veja o resultado; tente algo inexistente.',
  },
  {
    id: 19,
    numero: 19,
    titulo: 'Criar contador de progresso',
    descricao:
      'Calculei quantas atividades estão concluídas e exibi no formato "concluídas de 30".',
    tecnologias: ['React'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Valores que podem ser calculados dos dados não devem ser duplicados no estado; derivar é mais simples.',
    evidencia: 'O contador no topo da seção de atividades é atualizado sozinho.',
  },
  {
    id: 20,
    numero: 20,
    titulo: 'Criar barra de progresso',
    descricao:
      'Criei uma barra acessível que representa o percentual de conclusão, com texto e atributos adequados.',
    tecnologias: ['React', 'CSS'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Usar role="progressbar" com aria-valuenow garante que leitores de tela entendam o valor.',
    evidencia: 'A barra acima acompanha o contador e aceita 0% e 100%.',
  },
  {
    id: 21,
    numero: 21,
    titulo: 'Criar modal de detalhes',
    descricao:
      'Ao clicar em Ver atividade, abre um modal com descrição, aprendizagem e evidência; fecha por botão e Escape.',
    tecnologias: ['React', 'CSS'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Modal é composição de componentes; gerenciar foco e responder à tecla Escape melhora o uso por teclado.',
    evidencia: 'Clique em qualquer "Ver atividade" desta página.',
  },
  {
    id: 22,
    numero: 22,
    titulo: 'Criar formulário de contato',
    descricao:
      'Construí um formulário com nome, e-mail, assunto e mensagem, com validação nativa e confirmação simulada.',
    tecnologias: ['React'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Labels associadas, required e type="email" dão validação no navegador sem backend.',
    evidencia: 'Preencha o formulário na seção Contato e veja a confirmação.',
  },
  {
    id: 23,
    numero: 23,
    titulo: 'Implementar alternância de tema',
    descricao:
      'Criei um botão que alterna entre tema claro e escuro aplicando um atributo no elemento raiz.',
    tecnologias: ['React', 'CSS'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'O tema é controlado por estado; o CSS reage com um atributo data no <html> ou container.',
    evidencia: 'Use o botão de tema ao lado do menu e veja as cores mudarem.',
  },
  {
    id: 24,
    numero: 24,
    titulo: 'Persistir preferência local',
    descricao:
      'Salvei o tema no localStorage e restauro ao iniciar, com valor padrão quando não há dado.',
    tecnologias: ['React'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'localStorage guarda preferências no navegador; é preciso tratar a ausência de dados com um padrão seguro.',
    evidencia: 'Recarregue a página com o tema escuro ativo e ele será mantido.',
  },
  {
    id: 25,
    numero: 25,
    titulo: 'Adicionar seção Sobre',
    descricao:
      'Criei o componente Sobre com a bio autoral e a lista de tecnologias praticadas.',
    tecnologias: ['React'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Uma seção Sobre comunica autoria e competências de forma honesta, sem exagerar no nível de domínio.',
    evidencia:
      'Seção Sobre com a bio de João Pedro Borges (Peu Borges) e tecnologias do projeto.',
  },
  {
    id: 26,
    numero: 26,
    titulo: 'Revisar acessibilidade',
    descricao:
      'Revisei headings, labels, alt, foco, contraste e uso por teclado; status nunca é transmitido só por cor.',
    tecnologias: ['HTML', 'CSS'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Acessibilidade é processo contínuo: texto de contraste, símbolo ao lado da cor e navegação por teclado.',
    evidencia:
      'Cinco verificações realizadas: headings, labels, foco visível, contraste e teclado.',
  },
  {
    id: 27,
    numero: 27,
    titulo: 'Criar o README do repositório',
    descricao:
      'Documentei instalação, execução, tecnologias, estrutura de pastas e autoria no README.md.',
    tecnologias: ['Git'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Um bom README ensina qualquer pessoa a rodar o projeto em poucos comandos.',
    evidencia: 'Instruções de instalação e execução documentadas no projeto.',
  },
  {
    id: 28,
    numero: 28,
    titulo: 'Organizar o histórico Git',
    descricao:
      'Revisei git status e git log para garantir um histórico claro e publicável.',
    tecnologias: ['Git'],
    status: 'Concluída',
    link: null,
    aprendizagem:
      'Revisar o histórico antes de publicar evita arquivos desnecessários no repositório.',
    evidencia: 'Branch main com o commit inicial e o projeto completo publicado.',
  },
  {
    id: 29,
    numero: 29,
    titulo: 'Enviar o projeto ao repositório remoto',
    descricao:
      'Criei o repositório remoto, associei ao projeto local e enviei a branch main.',
    tecnologias: ['Git', 'Vercel'],
    status: 'Concluída',
    link: 'https://github.com/MCookinho/portfolio-atividades-fullstack',
    aprendizagem:
      'Origin é o apelido do repositório remoto; o push envia o histórico para ele.',
    evidencia: 'Repositório público com o código completo publicado.',
  },
  {
    id: 30,
    numero: 30,
    titulo: 'Publicar e validar na Vercel',
    descricao:
      'Importei o repositório na Vercel, publiquei a aplicação e validei menu, filtros, busca, modal e formulário.',
    tecnologias: ['Vercel'],
    status: 'Concluída',
    link: 'https://revisao-full-stack.vercel.app',
    aprendizagem:
      'A Vercel detecta o build do Vite automaticamente e gera uma URL pública com implantação contínua.',
    evidencia:
      'Publicado em https://revisao-full-stack.vercel.app com checklist final aprovado.',
  },
]