import React from 'react';
import '../../paginas/SugsFilm/sugs_filme.css';
import FormField from '../../components/FormField';
import Classificacao from '../../components/ClassificacaoIMG';

function App() {
    // const goBack = () => {
    //     window.history.back();
    // };

    return (
        <div className="cards">
            <div className="botoes">
                <div className="seta_voltar">
                    <button className="back-button">&#8592;</button>
                </div>
            </div>
            <div className="container">
                <h2>SUGERIR FILME</h2>
                <div className="form-container">
                    <img src="img/marvel.jpeg" alt="Ator" className="ator-image" />
                    <form id="atorForm">
                        <FormField/>

                        <Classificacao/>

                        <div className="button-group">
                            <a href="sugestoes.html">
                                <button type="button" id="cancel">Cancelar</button>
                            </a>
                            <button type="submit" id="add">Sugerir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
