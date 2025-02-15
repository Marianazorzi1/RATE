'use client';

import React from 'react';
import styles from './criarConta2.module.css'; 

const CriarConta2 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.body}>
      
      <header className={styles.rate_header}>
        <h1>RATE</h1>
        <h2>MOVIE REVIEW</h2>
      </header>
      <div className={styles.criarConta2_container}>
        <h2 className={styles.h2}>CRIAR CONTA</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_criar2}>
            <label htmlFor="password" className={styles.label}>Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              placeholder="Digite sua nova senha"
              required
            />
          </div>
          <div className={styles.form_criar2}>
            <label htmlFor="confirmPassword" className={styles.label}>Confirmar Senha:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={styles.input}
              placeholder="Confirme sua senha"
              required
            />
          </div>
          <button type="submit" className={styles.button}>Próxima</button>
        </form>
      </div>
    </div>
  );
};

export default CriarConta2;
