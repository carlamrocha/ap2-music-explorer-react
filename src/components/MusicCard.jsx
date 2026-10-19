

function MusicCard({ musica }) {
  return (
    <article className="card-musica">
      <img
        src={musica.artworkUrl100}
        alt={`Capa de ${musica.trackName}`}
      />

      <h3>{musica.trackName}</h3>

      <p>{musica.artistName}</p>

      <p>{musica.collectionName}</p>

      {musica.previewUrl && (
        <audio
          controls
          preload="none"
          src={musica.previewUrl}
        >
          Seu navegador não suporta áudio.
        </audio>
      )}
    </article>
  );
}

export default MusicCard;
