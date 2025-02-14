import React from 'react';
import styles from './adcAtor.module.css'
import FormMenor from '../../components/FormMenor';

const AdcAtor = () => {

//   const goBack = () => {
//     window.history.back();
//   };

  return (
    <div className={styles.cards}>
      <div className={styles.seta_voltar}>
        <button className={styles.back_button} >&#8592;</button>
      </div>
      <div className={styles.container}>
        <h2 className={styles.h2}>ADICIONAR ATOR</h2>
        <div className={styles.form_container}>
          <img src="img/ator.webp" alt="Ator" className={styles.ator_image} />
          <FormMenor/>
          <form className={styles.atorForm}>
            
            <div className={styles.button_group}>
              <a href="vizu_mi_sugs.html">
                <button type="button" className={styles.cance}>Cancelar</button>
              </a>
              <button type="submit" className={styles.add}>Adicionar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdcAtor;
