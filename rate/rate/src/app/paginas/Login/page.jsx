'use client';

import React from 'react';
import styles from './login.module.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.body}>
      
      <header className={styles.rate_header}>
        <h1>RATE</h1>
        <h2 className={styles.h2}>MOVIE REVIEW</h2>
      </header>

      <div className={styles.criarConta}>
        <p className={styles.p}>Não tem uma conta?</p>
        <a href="criarConta1.html" className={styles.criarConta_botao}>Inscreva-se</a>
      </div>

      <div className={styles.login_container}>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_login}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className={styles.form_login}>
            <label htmlFor="password" className={styles.label}>Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              placeholder="Digite sua senha"
              required
            />
          </div>
          <a href="redef_se1.html" className={styles.senha}>Esqueceu sua senha?</a>
          <button type="submit" className={styles.botao}>Entrar</button>
        </form>

        <div className={styles.opcoes_login}>
          <a href="#" className={styles.login_google}>
            <img src="img/google.png" alt="Google" className={styles.icone} />
          </a>
          <a href="#" className={styles.login_facebook}>
            <img src="img/facebook.png" alt="Facebook" className={styles.icone} />
          </a>
          <a href="#" className={styles.login_instagram}>
            <img src="img/instagram.png" alt="Instagram" className={styles.icone} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
