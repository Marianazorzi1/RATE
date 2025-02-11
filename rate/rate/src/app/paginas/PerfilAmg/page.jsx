'use client';

import React, { useState } from "react";
import "../../paginas/PerfilAmg/perfil_amg.css";


const PerfilAmg = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const handleDeleteAccount = () => setShowDeleteConfirm(true);
  const handleExitAccount = () => setShowExitConfirm(true);
  const handleConfirmDelete = () => {
    setName('');
    setBio('');
    setShowDeleteConfirm(false);
  };
  const handleCancelDelete = () => setShowDeleteConfirm(false);
  const handleConfirmExit = () => setShowExitConfirm(false);
  const handleCancelExit = () => setShowExitConfirm(false);

  const handleSave = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      alert('O nome é obrigatório.');
    } else {
      alert('Perfil salvo com sucesso!');
    }
  };

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
            <p className="rev">Remover</p>
            <img src="/img/🦆 icon _person remove_.png" alt="Ícone de remover amigo" className="desamigo" id="removamigo" role="button"/>

      </div>

      <div className="containe">
        <div className="content">
          <div className="left-container">
          <div className="profile-picture">
            <img src="img/Group-44.png" alt="User Icon" id="edicao" className="profile-picture" />
          </div>
          </div>

          <div className="right-container">
            <form id="profile-form" onSubmit={handleSave}>
              <div className="apelido">
                <label className="info-text">Nome (apelido):</label>
                <input
                  type="text"
                  className="input-text"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="apelido">
                <label className="Bio">Bio:</label>
                <input
                  type="text"
                  className="input-text"
                  placeholder="Uma breve bio aqui"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>

              <div>
                <a href="ver-comentarios.html">
                  <button type="button" className="conta-botao">
                    Ver comentários
                  </button>
                </a>
              </div>

              <button type="submit" className="conta-botao">
                Voltar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilAmg;
