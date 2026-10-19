
function SearchForm({ busca, setBusca, buscarMusicas, carregando }) {
  return (
    <form
      className="pesquisa flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-2xl mx-auto"
      onSubmit={buscarMusicas}
    >
      <input
        type="text"
        placeholder="Digite um artista ou música..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="flex-1 min-w-0 px-4 py-3 rounded-lg border border-purple-400 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <button
        type="submit"
        disabled={carregando}
        className="px-6 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 cursor-pointer"
      >
        {carregando ? 'Buscando...' : 'Buscar'}
      </button>
    </form>
  );
}

export default SearchForm;
