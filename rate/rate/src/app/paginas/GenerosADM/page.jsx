import React from "react";
import "../../paginas/GenerosADM/generos_ADM.css";
import Header from "../../components/header/Header";
import LateralBar from "../../components/LateralBar";



const GenerosADM = () => {
  return (
    <div>
      <Header />

      <main>
        <section className="blocos_gen">
          <div className="card_adc">
            <a href="add_gen.html">
              <button id="btn_adc">ADICIONAR +</button>
            </a>
          </div>
          <div className="info_gen">
            <div className="genenos">
              <h1>Gêneros:</h1>
            </div>
            <div className="card_blocos">
              {[...Array(21)].map((_, index) => (
                <a key={index} href={`genero_${index}.html`}>
                  <div className="blocos"></div>
                </a>
              ))}

            </div>
          </div>
        </section>

        <LateralBar />
      </main>
    </div>
  );
};

export default GenerosADM;
