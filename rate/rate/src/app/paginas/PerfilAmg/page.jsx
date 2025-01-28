'use client';

import React, { useState } from "react";
import "../../paginas/PerfilAmg/perfil_amg.css";

const PerfilAmg = () => {
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

    let isValid = true;
    let errorMessage = '';

    if (!name.trim()) {
      isValid = false;
      errorMessage += 'O nome é obrigatório.\n';
    }

    if (!isValid) {
      alert(errorMessage);
    } else {
      alert('Perfil salvo com sucesso!');
    }
  };

  return (
    <div className="Body">
      <div className="top-icons">
        <p>Remover</p>
        <img
          src="img/🦆 icon _person remove_.png"
          alt="Adicionar amigo"
          className="top-icon"
          id="addamigo"
          role="button"
        />
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
                  <label htmlFor="name" className="info-text">
                    Nome (apelido):
                  </label>
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
                  <label htmlFor="bio" className="info-text">
                    Bio:
                  </label>
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

              <div className="buttons-container">
            
                <a href="ver-comentarios.html">
                  <button type="button" className="outer-button">
                    Ver comentários
                  </button>
                </a>
              </div>

              <button type="submit" className="cont-button">
                Voltar
              </button>
            </form>
          </div>
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="confirm-box">
          <p>Tem certeza que deseja excluir sua conta?</p>
          <div className="buttons-container">
            <button onClick={handleConfirmDelete} className="confirm-button">
              Sim
            </button>
            <button onClick={handleCancelDelete} className="cancel-button">
              Não
            </button>
          </div>
        </div>
      )}

      {showExitConfirm && (
        <div className="confirm-box">
          <p>Tem certeza que deseja sair da sua conta?</p>
          <div className="buttons-container">
            <button onClick={handleConfirmExit} className="confirm-button">
              Sim
            </button>
            <button onClick={handleCancelExit} className="cancel-button">
              Não
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfilAmg;
