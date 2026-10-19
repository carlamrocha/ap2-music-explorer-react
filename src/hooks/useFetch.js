
import { useEffect, useState } from 'react';
import { buscarMusicasAPI } from '../services/api.js';

function useFetch(termo) {
  const [musicas, setMusicas] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const [pesquisou, setPesquisou] = useState(false);

  useEffect(() => {
    if (!termo) {
      return;
    }

    let ativo = true;

    async function carregarMusicas() {
      setCarregando(true);
      setErro('');
      setPesquisou(false);
      setMusicas([]);

      try {
        const resultados = await buscarMusicasAPI(termo);

        if (ativo) {
          setMusicas(resultados);
          setPesquisou(true);
        }
      } catch (error) {
        if (ativo) {
          setErro('Erro ao buscar músicas. Tente novamente.');
          console.error(error);
        }
      } finally {
        if (ativo) {
          setCarregando(false);
        }
      }
    }

    carregarMusicas();

    return () => {
      ativo = false;
    };
  }, [termo]);

  return {
    musicas,
    carregando,
    erro,
    pesquisou
  };
}

export default useFetch;
