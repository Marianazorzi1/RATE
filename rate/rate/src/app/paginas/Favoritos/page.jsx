import React from "react";
import styles from "./favoritos.module.css";  // Importa o arquivo de CSS Module
import Header from "@/app/components/header/Header.jsx";
import LateralBar from "../../components/LateralBar";

const Favoritos = () => {
  return (
    <div className={styles.body}> 
      <Header />

      <main>
        <section className={styles.blocos_filmes}> 
          <div className={styles.card_remover}> 
            <button className={styles.btn_remover}>Remover</button>
          </div>
          <div className={styles.info_fav}> 
            <div className={styles.favs}> 
              <h1>Favoritos:</h1>
            </div>
            <div className={styles.card_blocos}> 
              {Array(21)
                .fill(null)
                .map((_, index) => (
                  <a key={index} href={index % 2 === 0 ? "class_ator.html" : "class_filmes.html"}>
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

export default Favoritos;
