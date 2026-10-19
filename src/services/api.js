
const API_URL = 'https://itunes.apple.com/search';

export async function buscarMusicasAPI(termo) {
  const resposta = await fetch(
    `${API_URL}?term=${encodeURIComponent(termo)}&entity=song&limit=24`
  );

  if (!resposta.ok) {
    throw new Error('Não foi possível consultar a API.');
  }

  const dados = await resposta.json();

  return dados.results || [];
}
