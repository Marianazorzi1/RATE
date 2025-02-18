'use client';

import React, { useState } from "react";
import styles from './redefSenha3.module.css'

const RedefinirSenha3 = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={styles.container}>
      <header className={styles.rate-header}>
        <h1>RATE</h1>
        <h2>MOVIE REVIEW</h2>
      </header>
      <div>
        <h2 className={styles.title}>REDEFINIR SENHA</h2>
        <label className={styles.label} htmlFor="password">
          Nova senha:
        </label>
        <input
          type="password"
          id={styles.password}
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className={styles.label} htmlFor="confirmPassword">
          Confirmar senha:
        </label>
        <input
          type="password"
          id={styles.confirmPassword}
          className={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className={styles.button}>Redefinir</button>
      </div>
    </div>
  );
};

export default RedefinirSenha3;