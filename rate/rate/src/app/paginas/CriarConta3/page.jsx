'use client';  

import React from 'react';
import './criarConta3.css'; 

const CriarConta3 = () => {
  return (
    <div>
      <style>
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

.criarConta3-container {
    background-color: #474747;
    padding: 70px; 
    border-radius: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 35%;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    height: auto;
}

.criarConta3-container h2 {
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

p {
    background-color: #D9D9D9;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 50px;
    color: #000000; /* Para melhorar a visibilidade do texto */
}

.button {
    padding: 12px 20px; /* Aumentei o padding para uma área de clique maior */
    background-color: #52057B;
    color: white;
    border-radius: 5px;
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
      <div className="criarConta3-container">
        <h2>BEM VINDO AO RATE!</h2>
        <p>Conta criada com sucesso!</p>
        <a href="login.html" className="button">Fazer Login</a>
      </div>
    </div>
  );
};

export default CriarConta3;