'use client';  

import React, { useState } from "react";
import "./redefSenha2.css";

const RedefinirSenha2 = () => {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  return (
    <div className="container">
      <style>
    {`
     @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Montserrat:wght@400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: #737373;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.rate-header {
  position: absolute;
  top: 20px;
  left: 20px;
  color: #52057B;
}

.rate-header h1 {
  font-size: 40px;
  font-family: "Archivo Black", sans-serif;
}

.rate-header h2 {
  font-size: 15px;
  font-weight: 600;
  margin-left: 40px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vh;
  margin-top: 50%;
}

.card { 
  border-radius: 15px;
  text-align: center;
}

.title {
  color: white;
  margin-bottom: 5px;
  font-size: 30px;
}

.subtitle {
  color: black;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bolder;
  background-color: transparent;
}

.code-inputs {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.code-input {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: #585858;
}

.expire-text {
  color: black;
  font-size: 12px;
  margin-bottom: 1px;
  font-weight: bolder;
  background-color: transparent;
}

.button {
  background-color: #52057B;
  color: white;
  padding: 10px;
  border: none;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
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
      <div className="card">
        <h2 className="title">REDEFINIR SENHA</h2>
        <p className="subtitle">Código de verificação</p>
        <div className="code-inputs">
          {code.map((num, index) => (
            <input
              key={index}
              type="text"
              className="code-input"
              maxLength="1"
              value={num}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>
        <p className="expire-text">Expira em 1:00</p>
        <button className="button">Próximo</button>
      </div>
    </div>
  );
};

export default RedefinirSenha2;