 'use client';  

import React from 'react';
import './login.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <style>
    {`
     @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Macondo&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:wght@253&family=Nerko+One&family=Protest+Guerrilla&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', Arial, sans-serif;
    background-color: #737373;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    position: relative;
}

.rate-header {
    position: absolute;
    top: 20px;
    left: 20px;
    text-align: left;
    color: #52057B;
    z-index: 1000;
}

.rate-header h1 {
    margin: 0;
    font-size: 40px;
    font-weight: 400;
    font-family: "Archivo Black", sans-serif;
}

.rate-header h2 {
    margin: 0;
    margin-left: 40px;
    color: #52057B;
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    font-weight: 600;
}

.criarConta {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
   
}

.criarConta p {
    margin: 0;
    font-size: 15px;
    background-color: transparent;
}

.criarConta-botao {
    padding: 5px;
    color: white;
    border-radius: 3px;
    text-decoration: none;
    font-weight: bold;
}

.criarConta-botao:hover {
    background-color: #474747;
}

.login-container {
    background-color: #474747;
    padding: 10%;
    border-radius: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 410px;
    height: auto;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    margin-top: 30%;
}

.login-container h2 {
    letter-spacing: 2px;
}

h2 {
    margin-top: 0;
    margin-bottom: 40px;
    font-size: 40px;
    text-align: center;
    color: #ffffff;
    font-weight: lighter;
}

.form-login {
    font-size: 17px;
    margin-bottom: 20px;
    width: 100%;
}

label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
    color: #737373;
    font-weight: bold;
}

input {
    width: 90%;
    padding: 10px;
    border: none;
    border-radius: 3px;
    background-color: #D9D9D9;
}

p {
    color: #474747;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
}

.botao {
    font-size: 16px;
    padding: 12px;
    background-color: #52057B;
    color: white;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    width: 100%;
}

.botao:hover {
    background-color: #690d9b;
}

.senha {
    font-size: 15px;
    display: block;
    text-align: center;
    color: #A8A8A8;
    text-decoration: none;
    margin-bottom: 5%;
}

.senha:hover {
    text-decoration: underline;
}

.opcoes-login {
    margin-top: 30px;
    text-align: center;
}

.login {
    display: inline-block;
    margin: 5px;
}

.icone {
    width: 40px;
    height: auto;
    border-radius: 5px;
}

.login:hover .icone {
    opacity: 0.8;
}
  

    `}
  </style>
      <header className="rate-header">
        <h1>RATE</h1>
        <h2>MOVIE REVIEW</h2>
      </header>

      <div className="criarConta">
        <p>Não tem uma conta?</p>
        <a href="criarConta1.html" className="criarConta-botao">Inscreva-se</a>
      </div>

      <div className="login-container">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-login">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className="form-login">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <a href="redef_se1.html" className="senha">Esqueceu sua senha?</a>
          <button type="submit" className="botao">Entrar</button>
        </form>

        <div className="opcoes-login">
          <a href="#" className="login google">
            <img src="img/google.png" alt="Google" className="icone" />
          </a>
          <a href="#" className="login facebook">
            <img src="img/facebook.png" alt="Facebook" className="icone" />
          </a>
          <a href="#" className="login instagram">
            <img src="img/instagram.png" alt="Instagram" className="icone" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;