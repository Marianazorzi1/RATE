import React from "react";
import styles from "./vizu_sugs_filme.module.css"
import Header from "@/app/components/header/Header.jsx";
import LateralBar from "@/app/components/LateralBar";

const VisualizarSugestaoFilme = () => {

  return (
    <div>
      <Header/>

      <main>
        <section className={styles.blocos_filmes}>
          <div className={styles.seta_voltar}>
            <button className={styles.backa-button}>&#8592;</button>
          </div>
          <div className={styles.movie-details}>
            <div className={styles.part1}>
              <h1 className={styles.movi-name}>Nome do filme</h1>
              <div className={styles.movie-image}>
                <div className={styles.postera-frame}></div>
              </div>
            </div>
            <div className={styles.parte2}>
              <p className={styles.nam}>Diretor:</p>
              <p className={styles.nam}>Sinopse:</p>
              <p className={styles.nam}>Produtor:</p>
              <p className={styles.nam}>Elenco:</p>
              <p className={styles.nam}>Gênero:</p>
              <p className={styles.nam}>Data de Lançamento:</p>
              <div className={styles.movie-rating-badge}>
                <img className={styles.livre} src="img/AL.jpg" alt="Indicação livre" />
              </div>
            </div>
            <div className={styles.parte3}>
              <a href="perfil_comen.html">
                <div className={styles.use-card}>
                  <div className={styles.profile-icon}>
                    <img className={styles.perfil} src="img/Perfil.png" alt="Ícone de usuário" />
                  </div>
                  <span className={styles.username}>@fulanotany</span>
                </div>
              </a>
              <div className={styles.avaliacao}>
                <button className={styles.ok}>
                  {/* <span className="likes">0 </span> */}
                  <i className={styles.fasfa-thumbs-up}></i>
                </button>
                <button className={styles.nok}>
                  {/* <span className="likes">0 </span> */}
                  <i className={styles.fasfa-thumbs-down}></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <LateralBar/>
        </section>
      </main>
    </div>
  );
};

export default VisualizarSugestaoFilme;
