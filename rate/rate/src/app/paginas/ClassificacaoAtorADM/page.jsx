import React from "react";
import styles from "./class_ator_ADM.module.css";
import Header from "@/app/components/header/Header.jsx";
import LateralBar from "@/app/components/LateralBar";

const ClassificacaoAtor = () => {
  return (
    <div className={styles.body}>
      <Header />
      
      <main>
        <section className={styles.secao_ator}>
          <div className={styles.area_botoes}>
            <div className={styles.botao_voltar}>
              <button className={styles.botao_voltar_icon}>←</button>
            </div>
          </div>
          <div className={styles.info_ator}>
            <div className={styles.dados_ator}>
              <h1>Nome do ator: </h1>
              <div className={styles.imagem_ator}>
                <img src="./" alt="" />
              </div>
              <div className={styles.texto_ator}>
                <p><strong>Idade:</strong> 35 anos</p>
                <p><strong>Nascimento:</strong> 10 de março de 1988</p>
              </div>
              <div className={styles.mod_remov_button}>
                <div className={styles.remover}>
                  <button className={styles.remove_button}>Remover</button>
                </div>
                <a href="mod_sugs_ator.html">
                  <div className={styles.modificar}>
                    <button className={styles.mod_button}>Modificar</button>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.secao_filmes}>
              <h2>Filmes:</h2>
              <div className={styles.area_filmes}>
                {[...Array(8)].map((_, index) => (
                  <a key={index} href="class_filmes.html">
                    <div className={styles.bloco_filme}></div>
                  </a>
                ))}
              </div>
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

export default ClassificacaoAtor;
