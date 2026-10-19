

import MusicCard from './MusicCard';

function MusicList({ musicas }) {
  return (
    <section className="resultados">
      <h2>🎶 Resultados da pesquisa</h2>

      {musicas.length === 0 ? (
        <p>Nenhuma música encontrada.</p>
      ) : (
        <div className="grid-musicas">
          {musicas.map((musica) => (
            <MusicCard
              key={musica.trackId}
              musica={musica}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default MusicList;
