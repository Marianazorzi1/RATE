import React from "react";
import "../../paginas/Generos/generos.css";
import LateralBar from "../../components/LateralBar";
import Header from "@/app/components/header/Header.jsx";

const Generos = () => {
  return (
    <>
      <Header />

      <main>
        <section className="blocos_gen">
          <div className="info_gen">
            <div className="generos">
              <h1>Gêneros: </h1>
            </div>
            <div className="card_blocos">
              {Array(21)
                .fill(null)
                .map((_, index) => (
                  <a key={index} href={`genero_${index}.html`}>
                    <div className="blocos"></div>
                  </a>
                ))}

            </div>
          </div>
        </section>

        <LateralBar />
      </main>
    </>
  );
};

export default Generos;
