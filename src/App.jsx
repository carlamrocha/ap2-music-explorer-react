
import { useState } from 'react';
import SearchForm from './components/SearchForm';
import MusicList from './components/MusicList';
import useFetch from './hooks/useFetch';
import './App.css';

function App() {
  const [busca, setBusca] = useState('');
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [erroFormulario, setErroFormulario] = useState('');

  const {
    musicas,
    carregando,
    erro,
    pesquisou
  } = useFetch(termoPesquisa);

  function buscarMusicas(evento) {
    evento.preventDefault();

    const termo = busca.trim();

    if (!termo) {
      setErroFormulario('Digite o nome de um artista ou música.');
      return;
    }

    setErroFormulario('');
    setTermoPesquisa(termo);
  }

  return (
    <div className="music-app">
      <header className="cabecalho">
        <h1>🎵 Music Explorer</h1>
        <p>Explore o universo da música!</p>
      </header>

      <main className="conteudo">
        <h2>Descubra sua próxima música favorita</h2>

        <p>
          Pesquise artistas, descubra músicas e explore
          novos estilos musicais.
        </p>

        <SearchForm
          busca={busca}
          setBusca={setBusca}
          buscarMusicas={buscarMusicas}
          carregando={carregando}
        />

        {erroFormulario && (
          <p role="alert">{erroFormulario}</p>
        )}

        {erro && <p role="alert">{erro}</p>}

        {carregando && (
          <p>🎧 Procurando músicas...</p>
        )}

        {!carregando && !pesquisou && !erro && (
          <section className="destaques">
            <h2>🎧 Explore a música</h2>
            <p>
              Pesquise seus artistas favoritos e descubra
              músicas incríveis!
            </p>
          </section>
        )}

        {!carregando && pesquisou && (
          <MusicList musicas={musicas} />
        )}
      </main>

      <footer className="rodape">
        <p>
          Music Explorer © 2026 | Projeto React AP2
        </p>
      </footer>
    </div>
  );
}

export default App;
