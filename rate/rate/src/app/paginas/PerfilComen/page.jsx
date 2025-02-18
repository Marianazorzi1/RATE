'use client'; 

import React, { useState } from "react";
import styles from './perfil_comen.module.css'

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
      <div className={styles.top-icons}>
            <p className={styles.rev}>Amigo</p>
            <img src="img/🦆 icon _person add_.png" alt="Adicionar amigo" className={styles.desamigo} id={styles.addamigo} role="button"/>
        </div>

      <div className={styles.containe}>
        <div className={styles.content}>
          <div className={styles.left-container}>
            <div className={styles.profile-picture}>
              <img src="img/Group-44.png" alt="User Icon" id={styles.edicao} />
            </div>
          </div>

          <div className={styles.right-container}>
            <form id={styles.profile-form} onSubmit={handleSave}>
              <div className={styles.info-container}>
                <div className={styles.info}>
                  <label htmlFor="name" className={styles.info-text}>Nome (apelido):</label>
                  <div className={styles.input-wrapper}>
                    <input
                      type="text"
                      id={styles.name}
                      name="name"
                      className={styles.input-text}
                      placeholder="Digite seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.info}>
                  <label htmlFor="bio" className={styles.info-text}>Bio:</label>
                  <input
                    type="text"
                    id={styles.bio}
                    name="bio"
                    className={styles.input-text}
                    placeholder="Uma breve bio aqui"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className={styles.conta-botao}>Voltar</button>
            </form>
          </div>
        </div>
      </div>

      {showDeleteConfirm && (
        <div className={styles.confirm-box}>
          <p>Tem certeza que deseja excluir sua conta?</p>
          <div className={styles.buttons-container}>
            <button onClick={handleConfirmDelete} className={styles.confirm-button}>Sim</button>
            <button onClick={handleCancelDelete} className={styles.cancel-button}>Não</button>
          </div>
        </div>
      )}

      {showExitConfirm && (
        <div className={styles.confirm-box}>
          <p>Tem certeza que deseja sair da sua conta?</p>
          <div className={styles.buttons-container}>
            <button onClick={handleConfirmExit} className={styles.confirm-button}>Sim</button>
            <button onClick={handleCancelExit} className={styles.cancel-button}>Não</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PerfilComen;
