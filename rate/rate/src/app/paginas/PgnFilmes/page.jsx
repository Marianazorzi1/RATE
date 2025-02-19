import React from 'react';
import styles from './filmes.module.css'
import Header from '@/app/components/header/Header.jsx';
import LateralBar from '../../components/LateralBar';

const Filmes = () => {
  return (
    <div>
      <Header />

      <main>
        <section className={styles.blocos_filmes}>
          {/* <div className="card_login">
            <a href="login.html">
              <button id="btn_login">Login</button>
            </a>
          </div> */}
          <div className={styles.info_inicio}>
            <div className={styles.tit_film}>
              <h1>Filmes: </h1>
            </div>
            <div className={styles.card_blocos}>
              {[...Array(7)].map((_, index) => (
                <a key={index} href={`genero_${index}.html`}>
                  <div className={styles.blocos}></div>
                </a>
              ))}
              

            </div>
            {/* <div className="tit_ator">
              <h1>Atores: </h1>
            </div> */}
            <div className={styles.card_blocos}>
              {[...Array(14)].map((_, index) => (
                <a key={index} href={`genero_${index}.html`}>
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

export default Filmes;