'use client';
import React, { useState } from "react";
import styles from './perfil.module.css'

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
    <><style>
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
        <button onClick={handleDeleteAccount} className={styles.top-icones}>
          <img src="img/🦆 icon _Trash_.png" alt="Trash Icon" className={styles.volta} />
        </button>
        <button onClick={handleExitAccount} className={styles.top-icones}>
          <img src="img/🦆 icon _door leave_.png" alt="Exit Icon" className={styles.lixo} />
        </button>
      </div>

      <div className={styles.containe}>
        <div className={styles.content}>
          <div className={styles.left-container}>
            <div className={styles.profile-picture}>
              <img src="img/Group-44.png" alt="User Icon" id="edicao" />
            </div>
          </div>

          <div className={styles.right-container}>
            <form id="profile-form" onSubmit={handleSave}>
              <div className={styles.info-container}>
                <div className={styles.info}>
                  <label htmlFor="name" className={styles.info-text}>Nome (apelido):</label>
                  <div className={styles.input-wrapper}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={styles.input-text}
                      placeholder="Digite seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.info}>
                  <label htmlFor="email" className={styles.Bio}>Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input-text}
                    placeholder="exemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className={styles.info}>
                  <label htmlFor="bio" className={styles.Bio}>Bio:</label>
                  <input
                    type="text"
                    id="bio"
                    name="bio"
                    className={styles.input-text}
                    placeholder="Uma breve bio aqui"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className={styles.conta-botao}>Salvar</button>
            </form>
          </div>
        </div>
      </div>

      {showCard && (
        <div className={styles.card-cinza}>
          <p className={styles.texto}>Suas mudanças foram <br/> salvas com sucesso</p>
        </div>
      )}

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

export default Perfil;
