import React from "react";
import "../../paginas/Favoritos/favoritos.css";
import Header from "../../components/Header";
import LateralBar from "../../components/LateralBar";

const Favoritos = () => {
  return (
    <>
      <Header/>

      <main>
        <section className="blocos_filmes">
          <div className="card_remover">
            <button id="btn_remover">Remover</button>
          </div>
          <div className="info_fav">
            <div className="favs">
              <h1>Favoritos:</h1>
            </div>
            <div className="card_blocos">
              {Array(21)
                .fill(null)
                .map((_, index) => (
                  <a key={index} href={index % 2 === 0 ? "class_ator.html" : "class_filmes.html"}>
                    <div className="blocos"></div>
                  </a>
                ))}
            </div>
          </div>
        </section>

        <LateralBar/>
      </main>
    </>
  );
};

export default Favoritos;
