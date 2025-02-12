'use client'; 

import React from 'react';
import './criarConta1.css';

const CriarConta = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div><style>
    {`
     body {
  font-family: 'Montserrat', Arial, sans-serif;
  background-color: #737373;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.rate-header {
  position: absolute;
  top: 20px;
  left: 20px;
  text-align: left;
  color: #52057B;
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

.criarConta-container {
  background-color: #474747;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;
  margin-top: 30%;
}

.criarConta-container h2 {
  font-size: 24px;
  color: #b3b3b3;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.form-criar {
  font-size: 16px;
  margin-bottom: 15px;
  text-align: left;
 
}

label {
  font-weight: bold;
  color: #737373;
  display: block;
  margin-bottom: 5px;
}


input,
select {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #444;
  color: #737373;
  font-size: 14px;
}

.genero-opcoes {
  display: flex;
  justify-content: space-between;
}

.genero-box {
  flex: 1;
  background-color: #444;
  text-align: center;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  margin: 0 5px;
}

.genero-box:hover {
  background-color: #3a3a3a;
}

.data-nascimento {
  display: flex;
  justify-content: space-between;
}

.data-nascimento select {
  width: 32%;
}

.button {
  width: 100%;
  padding: 12px;
  background-color: #52057B;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
}

.button:hover {
  background-color: #6a1b9a;
}   
  

    `}
  </style>
      <header className="rate-header">
        <h1>RATE</h1>
        <h2>MOVIE REVIEW</h2>
      </header>
      <div className="criarConta-container">
        <h2>CRIAR CONTA</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-criar">
            <label htmlFor="name">Nome (Apelido):</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div className="form-criar">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className="form-criar">
            <label>Gênero:</label>
            <div className="genero-opcoes">
              <label className="genero-box">
                <input
                  type="radio"
                  name="genero"
                  value="masculino"
                  required
                />
                Masculino
              </label>
              <label className="genero-box">
                <input
                  type="radio"
                  name="genero"
                  value="feminino"
                  required
                />
                Feminino
              </label>
              <label className="genero-box">
                <input
                  type="radio"
                  name="genero"
                  value="outros"
                  required
                />
                Outros
              </label>
            </div>
          </div>
          <div className="form-criar">
            <label>Data de Nascimento:</label>
            <div className="data-nascimento">
              <select name="dia" defaultValue="" required>
                <option value="" disabled>Dia</option>
                {[...Array(31)].map((_, index) => (
                  <option key={index} value={index + 1}>{index + 1}</option>
                ))}
              </select>
              <select name="mes" defaultValue="" required>
                <option value="" disabled>Mês</option>
                {['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'].map((mes, index) => (
                  <option key={index} value={index + 1}>{mes}</option>
                ))}
              </select>
              <select name="ano" defaultValue="" required>
                <option value="" disabled>Ano</option>
                {[...Array(40)].map((_, index) => {
                  const ano = new Date().getFullYear() - index;
                  return <option key={ano} value={ano}>{ano}</option>;
                })}
              </select>
            </div>
          </div>
          <button type="submit" className="button">Próxima</button>
        </form>
      </div>
    </div>
  );
};

export default CriarConta;