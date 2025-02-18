'use client';

import React, { useState } from "react";
import styles from './perfil_amg.module.css'


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
      <div className={styles.top-icons}>
            <p className={styles.rev}>Remover</p>
            <img src="/img/🦆 icon _person remove_.png" alt="Ícone de remover amigo" className={styles.desamigo} id={styles.removamigo} role="button"/>

      </div>

      <div className={styles.containe}>
        <div className={styles.content}>
          <div className={styles.left-container}>
          <div className={styles.profile-picture}>
            <img src="img/Group-44.png" alt="User Icon" id={styles.edicao} className={styles.profile-picture}/>
          </div>
          </div>

          <div className={styles.right-container}>
            <form id={styles.profile-form} onSubmit={handleSave}>
              <div className={styles.apelido}>
                <label className={styles.info-text}>Nome (apelido):</label>
                <input
                  type="text"
                  className={styles.input-text}
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className={styles.apelido}>
                <label className={styles.Bio}>Bio:</label>
                <input
                  type="text"
                  className={styles.input-text}
                  placeholder="Uma breve bio aqui"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>

              <div>
                <a href="ver-comentarios.html">
                  <button type="button" className={styles.conta-botao}>
                    Ver comentários
                  </button>
                </a>
              </div>

              <button type="submit" className={styles.conta-botao}>
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
