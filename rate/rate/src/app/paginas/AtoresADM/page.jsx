import React from "react";
import "../../paginas/AtoresADM/atores_ADM.css"; 
import Header from "../../components/Header";
import LateralBar from "../../components/LateralBar";

const AtoresADM = () => {
  return (
    <>
      <Header/>

      <main>
        <section className="blocos_atores">
          <div className="card_adc">
            <a href="add_ator.html">
              <button id="btn_adc">ADICIONAR +</button>
            </a>
          </div>
          <div className="info_ator">
            <div className="atores">
              <h1>Atores: </h1>
            </div>
            <div className="card_blocos">
              {Array(21)
                .fill(null)
                .map((_, index) => (
                  <a key={index} href="class_ator_ADM.html">
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

export default AtoresADM;
