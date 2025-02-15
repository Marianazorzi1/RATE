import React from 'react';
import styles from './mod_sugs_filme.module.css'
import FormField from '../../components/FormField';
import Classificacao from '../../components/ClassificacaoIMG';

const ModSugsFilm = () => {

//   const goBack = () => {
//     window.history.back();
//   };

  return (
    <div className={styles.cards}>
      <div className={styles.botoes}>
        <div className={styles.seta_voltar}>
          <button className={styles.back_button}>&#8592;</button>
        </div>
      </div>
      
      <div className={styles.container}>
      
        <div className={styles.form_container}>
        <h2 className={styles.h2}>MODIFICAR SUGESTÃO</h2>
          <img src="img/marvel.jpeg" alt="Ator" className={styles.ator_image} />
          <FormField/>
          <form className={styles.atorForm}>
           
            <Classificacao/>
            <div className={styles.button_group}>
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

export default ModSugsFilm;
