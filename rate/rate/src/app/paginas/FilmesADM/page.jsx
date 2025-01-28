import React from "react";
import "../../paginas/FilmesADM/filmes_ADM.css"; 
import Header from "../../components/Header.jsx";
import LateralBar from "../../components/LateralBar";

const FilmesADM = () => {
  return (
    <>
      
      <Header />

      <main>
        <section className="blocos_filmes">
          <div className="card_adc">
            <a href="add_filme.html">
              <button id="btn_adc">ADICIONAR +</button>
            </a>
          </div>
          <div className="info_filme">
            <div className="filmes">
              <h1>Filmes:</h1>
            </div>
            <div className="card_blocos">
              {Array(21)
                .fill(null)
                .map((_, index) => (
                  <a key={index} href="class_filmes_ADM.html">
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

export default FilmesADM;
