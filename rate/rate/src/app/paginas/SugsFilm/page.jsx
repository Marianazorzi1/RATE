import React from 'react';
import styles from './sugs_filme.module.css';
import FormField from '../../components/FormField';
import Classificacao from '../../components/ClassificacaoIMG';

function App() {
    // const goBack = () => {
    //     window.history.back();
    // };

    return (
        <div className={styles.cards}>
            <div className={styles.botoes}>
                <div className={styles.seta_voltar}>
                    <button className={styles.back-button}>&#8592;</button>
                </div>
            </div>
            <div className={styles.container}>
                <h2>SUGERIR FILME</h2>
                <div className={styles.form-container}>
                    <img src="img/marvel.jpeg" alt="Ator" className={styles.ator-image} />
                    <FormField/>
                    <form id={styles.atorForm}>
                        

                        <Classificacao/>

                        <div className={styles.button-group}>
                            <a href="sugestoes.html">
                                <button type="button" id={styles.cance}>Cancelar</button>
                            </a>
                            <button type="submit" id={styles.ad}>Sugerir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
