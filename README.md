# 🎵 Music Explorer

**Acadêmica:** Carla Magnus Rocha  
**Disciplina:** Desenvolvimento de Aplicações Front-End  
**Avaliação:** AP2 — Avaliação Prática  
**Ano:** 2026

---

## 📌 Descrição do projeto

O **Music Explorer** é uma aplicação web interativa desenvolvida em React como parte da Avaliação Prática AP2 da disciplina de Desenvolvimento de Aplicações Front-End.

O projeto tem como objetivo proporcionar uma experiência simples e dinâmica de exploração musical, permitindo que os usuários pesquisem artistas e músicas, visualizem capas de álbuns e escutem prévias de áudio.

Os dados são obtidos em tempo real por meio da API pública do iTunes.

## 🚀 Tecnologias utilizadas

- React
- JavaScript
- HTML5
- CSS3
- Tailwind CSS (classes utilitárias e Play CDN)
- Webpack
- API REST
- Git e GitHub

## 🎶 Funcionalidades

- Pesquisa de músicas e artistas.
- Listagem dinâmica dos resultados encontrados.
- Exibição de capas de álbuns.
- Visualização dos nomes das músicas, artistas e álbuns.
- Reprodução de prévias de áudio.
- Formulário de pesquisa controlado pelo React.
- Gerenciamento de estados com `useState`.
- Requisições à API utilizando `useEffect`.
- Custom hook `useFetch` para encapsular a lógica de requisições.
- Componentização e comunicação por props.
- Indicador de carregamento durante as pesquisas.
- Tratamento de erros nas requisições.
- Interface personalizada com CSS e classes utilitárias do Tailwind CSS.

## 🌐 API utilizada

A aplicação utiliza a **iTunes Search API**, uma API pública que disponibiliza informações sobre músicas, artistas e álbuns.

**Endpoint principal:**

`https://itunes.apple.com/search`

**Exemplo de requisição:**

`https://itunes.apple.com/search?term=capital%20inicial&entity=song&limit=24`

A API retorna dados em formato JSON, que são processados e apresentados na interface.

## ⚙️ Instalação e execução

Para executar o projeto localmente, é necessário ter o Node.js e o npm instalados.

**1. Clone o repositório:**

```bash
git clone URL_DO_REPOSITORIO
```

Substitua `URL_DO_REPOSITORIO` pelo endereço do repositório no GitHub.

**2. Acesse a pasta do projeto:**

```bash
cd AP2_MUSIC_EXPLORER
```

**3. Instale as dependências:**

```bash
npm install
```

**4. Inicie o servidor de desenvolvimento:**

```bash
npx webpack serve --config webpack.config.cjs
```

No PowerShell do Windows, também é possível utilizar:

```powershell
npx.cmd webpack serve --config webpack.config.cjs
```

**5. Abra a aplicação no navegador:**

`http://localhost:3000`

## 📁 Estrutura do projeto

```text
AP2_MUSIC_EXPLORER/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── MusicCard.jsx
│   │   ├── MusicList.jsx
│   │   └── SearchForm.jsx
│   ├── hooks/
│   │   └── useFetch.js
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── webpack.config.cjs
└── README.md
```

## 🧩 Componentização

A aplicação foi organizada em componentes reutilizáveis para facilitar a manutenção e a organização do código.

**SearchForm.jsx:** responsável pelo formulário de pesquisa, recebendo estados e funções por meio de props.

**MusicCard.jsx:** responsável pela apresentação individual das músicas, incluindo capa, artista, álbum e reprodução de áudio.

**MusicList.jsx:** responsável pela listagem dos resultados e renderização dos componentes MusicCard.

**App.jsx:** componente principal, responsável pela organização da interface e integração dos demais componentes.

## ⚛️ Hooks do React

### useState

Utilizado para gerenciar os estados da aplicação, incluindo o campo de pesquisa e o termo pesquisado.

### useEffect

Utilizado no custom hook para realizar requisições à API quando o termo de pesquisa é alterado.

### Custom Hook — useFetch

O hook personalizado `useFetch` foi desenvolvido para organizar e reutilizar a lógica de requisições HTTP.

Ele gerencia os resultados da pesquisa, o estado de carregamento e o tratamento de erros.

## 🎨 Estilização

O Music Explorer possui uma interface personalizada com predominância de tons roxos, cards de músicas e organização visual dos resultados.

O projeto utiliza CSS personalizado e inclui classes utilitárias do Tailwind CSS, com recursos de responsividade como `sm:flex-row`, `flex-col` e `max-w-2xl`.

O Tailwind foi incluído por meio do Play CDN para desenvolvimento.

## 📚 Objetivo acadêmico

Este projeto foi desenvolvido para demonstrar os conhecimentos adquiridos durante a disciplina, especialmente:

- Desenvolvimento de aplicações React.
- Criação de componentes reutilizáveis.
- Comunicação entre componentes utilizando props.
- Gerenciamento de estado.
- Utilização de hooks nativos e personalizados.
- Consumo de APIs REST públicas.
- Implementação de formulários controlados.
- Organização e boas práticas de desenvolvimento.
- Aplicação de técnicas modernas de estilização.

---

**Desenvolvido por Carla Magnus Rocha — 2026**

**Projeto acadêmico | Avaliação Prática AP2**