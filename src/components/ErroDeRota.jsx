import { Component } from "react";

/* O code splitting das rotas trouxe um modo de falha que o bundle único não
   tinha: se o chunk de uma rota não chega, o `lazy` lança, e sem uma fronteira
   de erro o React desmonta a árvore inteira — o <div id="root"> fica vazio e a
   página aparece completamente em branco, sem nada que explique.

   O gatilho mais comum é o navegador com um index.html antigo em cache,
   apontando para nomes de arquivo com hash que o deploy novo já não serve. Uma
   rede instável no meio do carregamento dá no mesmo. */
class ErroDeRota extends Component {
  constructor(props) {
    super(props);
    this.state = { falhou: false };
  }

  static getDerivedStateFromError() {
    return { falhou: true };
  }

  componentDidCatch(erro, info) {
    console.error("Falha ao carregar a rota:", erro, info);
  }

  render() {
    if (!this.state.falhou) return this.props.children;

    return (
      <div className="erro-rota">
        <p className="erro-rota__titulo">Não foi possível carregar esta página</p>
        <p className="erro-rota__texto">
          Em geral é uma versão antiga guardada no navegador. Recarregar resolve.
        </p>
        <button
          type="button"
          className="erro-rota__btn"
          onClick={() => window.location.reload()}
        >
          Recarregar
        </button>
      </div>
    );
  }
}

export default ErroDeRota;
