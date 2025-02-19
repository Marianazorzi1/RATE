import React from 'react';
import styles from './adcAtor.module.css';
import FormMenor from '../../components/FormMenor';

const AdcAtor = () => {
  //   const goBack = () => {
  //     window.history.back();
  //   };
  return (
    <div className={styles.cartoes}>
      <div className={styles.setaVoltar}>
        <button className={styles.botaoVoltar}>&#8592;</button>
      </div>
      <div className={styles.conteiner}>
        <h2 className={styles.titulo}>ADICIONAR ATOR</h2>
        <div className={styles.formConteiner}>
          <img src="img/ator.webp" alt="Ator" className={styles.imagemAtor} />
          <FormMenor />
          <form className={styles.formAtor}>
            <div className={styles.grupoBotoes}>
              <a href="vizu_mi_sugs.html">
                <button type="button" className={styles.botaoCancelar}>Cancelar</button>
              </a>
              <button type="submit" className={styles.botaoAdicionar}>Adicionar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdcAtor;