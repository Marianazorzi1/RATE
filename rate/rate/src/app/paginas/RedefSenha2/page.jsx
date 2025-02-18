'use client';  

import React, { useState } from "react";
import styles from './redefSenha2.module.css';

const RedefinirSenha2 = () => {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  return (
      <div className={styles.container}>
      <header className={styles.rate-header}>
        <h1>RATE</h1>
        <h2>MOVIE REVIEW</h2>
      </header>
      <div className={styles.card}>
        <h2 className={styles.title}>REDEFINIR SENHA</h2>
        <p className={styles.subtitle}>Código de verificação</p>
        <div className={styles.code-inputs}>
          {code.map((num, index) => (
            <input
              key={index}
              type="text"
              className={styles.code-input}
              maxLength="1"
              value={num}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>
        <p className={styles.expire-text}>Expira em 1:00</p>
        <button className={styles.button}>Próximo</button>
      </div>
    </div>
  );
}; 

export default RedefinirSenha2;