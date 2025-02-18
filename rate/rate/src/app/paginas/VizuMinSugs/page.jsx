import React from "react";
import styles from './vizu_min_sug.module.css'
import Header from "@/app/components/header/Header.jsx";
import LateralBar from "@/app/components/LateralBar";

const VizuMinSugs = () => {

  return (
    <div>
      <Header/>

      <main>
        <section className={styles.blocos_filmes}>
          <div className={styles.seta_voltar}>
            <button className={styles.bac-butto}>&#8592;</button>
          </div>
          <div className={styles.movie-details}>
            <div className={styles.part1}>
              <h1 className={styles.movi-name}>Nome do filme</h1>
              <div className={styles.movie-image}>
                <div className={styles.postera-frame}></div>
              </div>
            </div>
            <div className={styles.parte2}>
              <p className={styles.nam}>Nome:</p>
              <p className={styles.nam}>Idade:</p>
              <p className={styles.nam}>Nascimento:</p>
              
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
              <div className={styles.adc_remov_button}>
                        <a href="add_sugs_ator_ADM.html">
                            <div className={styles.adicionar}><button className={styles.ad_button}>Modificar</button></div>
                        </a>
                        <a href="sugestoes_ADM.html">
                            <div className={styles.remover}><button className={styles.remove_butto}>Remover</button></div>
                        </a>
                    </div>
              <div className={styles.avaliacao}>
                <button className={styles.k}>
                  {/* <span className="likes">0 </span> */}
                  <i className={styles.fasfa-thumbs-up}></i>
                </button>
                <button className={styles.n}>
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

export default VizuMinSugs;

