import React from "react";
import Header from "@/app/components/header/Header.jsx";
import styles from './PgnSugestoes.module.css'
import LateralBar from '../../components/lateralBarAdm/index';


const SugestaoADM = () => {


  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_sugs}>

          <div className={styles.info_sug}>
            <div className={styles.sugestoes}>
              <h1>Sugestões de filme:</h1>
            </div>
            <div className={styles.card_blocos}>
              {Array.from({ length: 9 }).map((_, index) => (
                <a className={styles.ancoraMap} key={index} href="/paginas/VisuSugsFilmeAdm">
                  <div className={styles.blocos}>
                    <h1 className={styles.titulo}>Os Vingadores</h1>
                    <div className={styles.bloco2}></div>
                  </div>
                </a>
              ))}
            </div>
            <div className={styles.sugestoes}>
              <h1>Sugestões de ator:</h1>
            </div>
            <div className={styles.card_blocos}>
              {Array.from({ length: 9 }).map((_, index) => (
                <a className={styles.ancoraMap} key={index} href="/paginas/VisuSugsAtorADM">
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

export default SugestaoADM;
