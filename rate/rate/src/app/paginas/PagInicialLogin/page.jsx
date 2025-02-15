import React from 'react';
import styles from './inicial_login.module.css';
import Header from '@/app/components/header/Header.jsx';
import LateralBar from '../../components/LateralBar';

const PaginaInicialLogin = () => {
  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_filmes}>
          <div className={styles.card_login}>
            <a href="login.html">
              <button className={styles.btn_login}>Login</button>
            </a>
          </div>
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
            <div className={styles.tit_ator}>
              <h1>Atores: </h1>
            </div>
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

export default PaginaInicialLogin;
