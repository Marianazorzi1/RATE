import React from 'react';
import styles from './add_gen.module.css'

const AdcGenero = () => {
//   const goBack = () => {
//     window.history.back();
//   };

  return (
    <div className={styles.cards}>
      <div className={styles.seta_voltar}>
        <button className={styles.back-button}>&#8592;</button>
      </div>
      <div className={styles.container}>
        <h2>ADICIONAR GÊNERO</h2>
        <div className={styles.form-container}>
          <img src="/img/animacao.avif" alt="Ator" className={styles.ator-image} />
          <form id={styles.atorForm}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id={styles.nome} name="nome" placeholder="Digite o nome" required />
            <div className={styles.button-group}>
              <button type="button" id={styles.ca} >
                Cancelar
              </button>
              <button type="submit" id={styles.add}>Adicionar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdcGenero;
