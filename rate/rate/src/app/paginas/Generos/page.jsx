import React from "react";
import "../../paginas/Generos/generos.css"; 
import LateralBar from "../../components/LateralBar";
import Header from "../../components/Header";

const Generos = () => {
  return (
    <>
      <Header/>

      <main>
        <section className="blocos_gen">
          <div className="info_gen">
            <div className="generos">
              <h1>Gêneros: </h1>
            </div>
            <div className="card_blocos">
              {Array(50)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="blocos"></div>
                ))}
            </div>
          </div>
        </section>

        <LateralBar/>
      </main>
    </>
  );
};

export default Generos;
