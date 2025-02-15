import React from "react";
import styles from "./filmes_ADM.module.css";  // Importa o arquivo de CSS Module
import Header from "@/app/components/header/Header.jsx";
import LateralBar from "../../components/LateralBar";

const FilmesADM = () => {
  return (
    <div className={styles.body}> {/* Usando o CSS module com styles */}
      
      <Header />

      <main>
        <section className={styles.blocos_filmes}> {/* Aplicando a classe via styles */}
          <div className={styles.card_adc}> {/* Aplicando a classe via styles */}
            <a href="add_filme.html">
              <button id="btn_adc">ADICIONAR +</button>
            </a>
          </div>
          <div className={styles.info_filme}> {/* Aplicando a classe via styles */}
            <div className={styles.filmes}> {/* Aplicando a classe via styles */}
              <h1>Filmes:</h1>
            </div>
            <div className={styles.card_blocos}> {/* Aplicando a classe via styles */}
              {Array(21)
                .fill(null)
                .map((_, index) => (
                  <a key={index} href="class_filmes_ADM.html">
                    <div className={styles.blocos}></div> {/* Aplicando a classe via styles */}
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

export default FilmesADM;
