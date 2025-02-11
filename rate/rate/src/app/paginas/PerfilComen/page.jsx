'use client'; 

import React, { useState } from "react";
import "../../paginas/PerfilComen/perfil_comen.css";

const PerfilComen = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const handleDeleteAccount = () => {
    setShowDeleteConfirm(true);
  };

  const handleExitAccount = () => {
    setShowExitConfirm(true);
  };

  const handleConfirmDelete = () => {
    setName('');
    setBio('');
    setShowDeleteConfirm(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  const handleConfirmExit = () => {
    setShowExitConfirm(false);
  };

  const handleCancelExit = () => {
    setShowExitConfirm(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
  }
  


    

  return (
    <>
    <style>
        {`
          body {
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            background-color: #52057B; 
            color: #D9D9D9; 
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

        `}
      </style>
      <div className="top-icons">
            <p className="rev">Amigo</p>
            <img src="img/🦆 icon _person add_.png" alt="Adicionar amigo" className="desamigo" id="addamigo" role="button"/>
        </div>

      <div className="containe">
        <div className="content">
          <div className="left-container">
            <div className="profile-picture">
              <img src="img/Group-44.png" alt="User Icon" id="edicao" />
            </div>
          </div>

          <div className="right-container">
            <form id="profile-form" onSubmit={handleSave}>
              <div className="info-container">
                <div className="info">
                  <label htmlFor="name" className="info-text">Nome (apelido):</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input-text"
                      placeholder="Digite seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="info">
                  <label htmlFor="bio" className="info-text">Bio:</label>
                  <input
                    type="text"
                    id="bio"
                    name="bio"
                    className="input-text"
                    placeholder="Uma breve bio aqui"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="conta-botao">Voltar</button>
            </form>
          </div>
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="confirm-box">
          <p>Tem certeza que deseja excluir sua conta?</p>
          <div className="buttons-container">
            <button onClick={handleConfirmDelete} className="confirm-button">Sim</button>
            <button onClick={handleCancelDelete} className="cancel-button">Não</button>
          </div>
        </div>
      )}

      {showExitConfirm && (
        <div className="confirm-box">
          <p>Tem certeza que deseja sair da sua conta?</p>
          <div className="buttons-container">
            <button onClick={handleConfirmExit} className="confirm-button">Sim</button>
            <button onClick={handleCancelExit} className="cancel-button">Não</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PerfilComen;
