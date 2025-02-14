import React from 'react';
import styles from './add_gen.module.css'

const AdcGenero = () => {
//   const goBack = () => {
//     window.history.back();
//   };

  return (
    <div className={styles.cards}>
      <div className={styles.seta_voltar}>
        <button className={styles.back_button}>&#8592;</button>
      </div>
      <div className={styles.container}>
        <h2 className={styles.h2}>ADICIONAR GÊNERO</h2>
        <div className={styles.form_container}>
          <img src="/img/animacao.avif" alt="Ator" className={styles.ator_image} />
          <form id={styles.atorForm}>
            <label htmlFor="nome" className={styles.label}>Nome:</label>
            <input type="text" id={styles.nome} name="nome" placeholder="Digite o nome" required className={styles.input}/>
            <div className={styles.button_group}>
              <button type="button" className={styles.ca} >
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
