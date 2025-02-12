'use client';

import React from 'react';
import './criarConta2.css'; 

const CriarConta2 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div><style>
    {`
     @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Macondo&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:wght@253&family=Nerko+One&family=Protest+Guerrilla&display=swap');

* {
    margin: 0;
    padding: 0;
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

.criarConta2-container {
    background-color: #474747;
    padding: 50px;
    border-radius: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 40%;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    position: relative;
}   

.criarConta2-container h2 {
    letter-spacing: 2px;
}

h2 {
    margin-top: 0;
    margin-bottom: 60px;
    font-size: 30px;
    text-align: center;
    color: #ffffff;
    font-weight: lighter;
}

.form-criar2 {
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
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    background-color: #ffffff; /* Melhor contraste com o texto */
    margin-bottom: 15px;
}

.button {
    font-size: 16px;
    padding: 12px;
    background-color: #52057B;
    color: white;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #690d9b;
}
  

    `}
  </style>
      
      <header className="rate-header">
        <h1>RATE</h1>
        <h2>MOVIE REVIEW</h2>
      </header>
      <div className="criarConta2-container">
        <h2>CRIAR CONTA</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-criar2">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua nova senha"
              required
            />
          </div>
          <div className="form-criar2">
            <label htmlFor="password">Confirmar Senha:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirme sua senha"
              required
            />
          </div>
          <button type="submit" className="button">Próxima</button>
        </form>
      </div>
    </div>
  );
};

export default CriarConta2;