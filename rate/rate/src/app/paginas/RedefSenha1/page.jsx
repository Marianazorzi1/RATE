'use client';

import React from "react";
import styles from './redefSenha1.module.css'

const RedefinirSenha1 = () => {
  return (
    <div>
      <header className={styles.rate-header}>
        <h1>RATE</h1>
        <h2>MOVIE REVIEW</h2>
      </header>
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>REDEFINIR SENHA</h2>
        <label className={styles.label} htmlFor="email">
          E-mail:
        </label>
        <input
          type="email"
          id={styles.email}
          className={styles.input}
          placeholder="Digite seu e-mail"
        />
        <button className={styles.button}>Enviar</button>
      </div>
    </div>
    </div>
  );
};

export default RedefinirSenha1;