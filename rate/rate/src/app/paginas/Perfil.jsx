'use client';

import React, { useState } from "react";
import "../../../../rate_projeto/css/perfil.css";

const Perfil = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showCard, setShowCard] = useState(false); 

  const handleDeleteAccount = () => {
    setShowDeleteConfirm(true);
  };

  const handleExitAccount = () => {
    setShowExitConfirm(true);
  };

  const handleConfirmDelete = () => {
    setName('');
    setEmail('');
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

  const perfuncao = () => {
    setShowCard(true); 
    setTimeout(() => {
      setShowCard(false); 
    }, 5000);
  };

  const handleSave = (event) => {
    event.preventDefault();

    let isValid = true;
    let errorMessage = '';

    if (!name.trim()) {
      isValid = false;
      errorMessage += 'O nome é obrigatório.\n';
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.trim()) {
      isValid = false;
      errorMessage += 'O email é obrigatório.\n';
    } else if (!emailRegex.test(email.trim())) {
      isValid = false;
      errorMessage += 'O email não tem um formato válido.\n';
    }

    if (!isValid) {
      alert(errorMessage);
    } else {
      perfuncao(); 
    }
  };

  return (
    <>
      <div className="top-icons">
        <button onClick={handleDeleteAccount} className="top-icon">
          <img src="img/🦆 icon _Trash_.png" alt="Trash Icon" className="volta" />
        </button>
        <button onClick={handleExitAccount} className="top-icon">
          <img src="img/🦆 icon _door leave_.png" alt="Exit Icon" className="lixo" />
        </button>
      </div>

      <div className="containe">
        <div className="content">
          <div className="left-container">
            <div className="profile-picture">
              <img src="img/Group 44.png" alt="User Icon" id="edicao" />
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
                  <label htmlFor="email" className="info-text">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-text"
                    placeholder="exemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
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

              <button type="submit" className="cont-button">Salvar</button>
            </form>
          </div>
        </div>
      </div>

      {showCard && (
        <div className="card-cinza">
          <p className="texto">Suas mudanças foram <br/> salvas com sucesso</p>
        </div>
      )}

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

export default Perfil;
