// components/Header.jsx
import React from 'react';
import Image from 'next/image'; 
import styles from './Header.module.css'


const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.cor1}>
          <h1 className={styles.rate}>RATE</h1>
          <h2 className={styles.movie}>MOVIE REVIEW</h2>
        </div>
        <div className={styles.cinzacl}></div>
        <div className={styles.cinzaes}>
          <i className={styles.lupa}></i>
        </div>
        <div className={styles.preto}>
          <div className={styles.botoes_perfil}>
            <button>
              <Image
                id={styles.sino}
                src="/img/notificacao.png" 
                alt="Sino de notificação"
                width={24} 
                height={24} 
              />
            </button>
            <button>
              <a href="amigos.html">
                <Image
                  id={styles.tres}
                  src="/img/amigos.png" 
                  alt="Ícone de amigos"
                  width={24}
                  height={24}
                />
              </a>
            </button>
            <button>
              <a href="perfil.html">
                <Image
                  id={styles.perfil}
                  src="https://img.icons8.com/?size=100&id=85147&format=png&color=737373" 
                  alt="Ícone de perfil"
                  width={24}
                  height={24}
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
