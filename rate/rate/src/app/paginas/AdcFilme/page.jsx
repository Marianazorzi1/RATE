import React from 'react';
import styles from './adcFilme.module.css'
import FormField from '../../components/FormField';
import Classificacao from '../../components/ClassificacaoIMG';

const AdcFilm = () => {

//   const goBack = () => {
//     window.history.back();
//   };

  return (
    <div className={styles.cards}>
      <div className={styles.botoes}>
        <div className={styles.seta_voltar}>
          <button className={styles.back-button}>&#8592;</button>
        </div>
      </div>
      <div className={styles.container}>
        <h2>MODIFICAR SUGESTÃO</h2>
        <div className={styles.form-container}>
          <img src="img/marvel.jpeg" alt="Ator" className={styles.ator-image} />
          <FormField/>
          <form className={styles.atorForm}>
           
            <Classificacao/>
            <div className={styles.button-group}>
              <a href="vizu_mi_sugs.html">
                <button type="button" className={styles.cancela}>Cancelar</button>
              </a>
              <button type="submit" className={styles.addd}>Modificar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdcFilm;
