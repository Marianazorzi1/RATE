import React from "react";
import styles from "./generos_ADM.module.css";  // Importa o arquivo de CSS Module
import Header from "@/app/components/header/Header.jsx";
import LateralBar from "../../components/LateralBar";

const GenerosADM = () => {
  return (
    <div className={styles.body}> {/* Usando o CSS module com styles */}
      <Header />

      <main>
        <section className={styles.blocos_gen}> {/* Aplicando a classe via styles */}
          <div className={styles.card_adc}> {/* Aplicando a classe via styles */}
            <a href="add_gen.html">
              <button className={styles.btn_adc}>ADICIONAR +</button>
            </a>
          </div>
          <div className={styles.info_gen}> {/* Aplicando a classe via styles */}
            <div className={styles.generos}> {/* Aplicando a classe via styles */}
              <h1>Gêneros:</h1>
            </div>
            <div className={styles.card_blocos}> {/* Aplicando a classe via styles */}
              {[...Array(21)].map((_, index) => (
                <a key={index} href={`genero_${index}.html`}>
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

export default GenerosADM;
