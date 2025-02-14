import React from "react";
import styles from "./atores_ADM.module.css"
import LateralBar from "../../components/LateralBar";
import Header from "@/app/components/header/Header.jsx";

const Atores = () => {
  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_ato}>
          <div className={styles.info_ato}>
            <div className={styles.atores}>
            <a href="add_filme.html">
              <button id={styles.btn_adc}>ADICIONAR +</button>
            </a>
              <h1>Atores: </h1>
            </div>
            <div className={styles.card_blocos}>
              {Array(21)
                .fill(null)
                .map((_, index) => (
                  <a key={index} href={`atores_${index}.html`}>
                    <div className={styles.blocos}></div>
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

export default Atores;
