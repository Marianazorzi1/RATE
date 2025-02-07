import React from "react";

const LateralBar = () => {
  return (
    <section>
      <div className="lateral_bar">
        <nav className="nav_botoes_lateral">
          <div className="botoes_acima">
            <a href="#">
              <img className="botoes" src="/img/menu.png" alt="Menu" />
            </a>
            <a href="inicial.html">
              <img className="botoes" src="/img/home.png" alt="Home" />
            </a>
            <a href="comentarios.html">
              <img className="botoes" src="/img/comentários.png" alt="Comentários" />
            </a>
            <a href="filmes.html">
              <img className="botoes" src="/img/filmes.png" alt="Filmes" />
            </a>
            <a href="/paginas/Generos">
              <img className="botoes" src="/img/generos.png" alt="Gêneros" />
            </a>
            <a href="/paginas/Atores">
              <img className="botoes" src="/img/atores.png" alt="Atores" />
            </a>
            <a href="/paginas/Favoritos">
              <img className="botoes" src="/img/favoritos.png" alt="Favoritos" />
            </a>
          </div>
          <div className="ultimo_botao">
            <a href="sugestoes.html">
              <img className="botoes" src="/img/sugestoes.png" alt="Sugestões" />
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default LateralBar;
