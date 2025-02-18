import React from "react";
import Header from "@/app/components/header/Header.jsx";
import styles from './sugestoes.module.css'
import LateralBar from "../../components/LateralBar";


const Sugestao = () => {


  return (
    <div>
      <Header/>

      <main>
        <section className={styles.blocos_sugs}>
          <div className={styles.card_sug}>
            <a href="minhas_sugestoes.html">
              <button id={styles.btn_mi_sugs}>Minhas sugestões</button>
            </a>
          </div>

          <div className={styles.info_sug}>
            <div className={styles.sugestoes}>
              <h1>Sugestões:</h1>
            </div>

            <div className={styles.card_blocos}>
              {Array.from({ length: 20 }).map((_, index) => (
                <a key={index} href="sugs_filme.html">
                  <div className={styles.blocos}>
                    <h1 className={styles.titulo}>Os Vingadores</h1>
                    <div className={styles.bloco2}></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section>
        <LateralBar />
        </section>
      </main>
    </div>
  );
};

export default Sugestao;
