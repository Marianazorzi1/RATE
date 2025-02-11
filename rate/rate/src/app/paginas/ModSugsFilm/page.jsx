import React from 'react';
import './mod_sugs_filme.css'; 
import FormField from '../../components/FormField';
import Classificacao from '../../components/ClassificacaoIMG';

const ModsSugsFilm = () => {

//   const goBack = () => {
//     window.history.back();
//   };

  return (
    <div className="cards">
      <div className="botoes">
        <div className="seta_voltar">
          <button className="back-button">&#8592;</button>
        </div>
      </div>
      <div className="container">
        <h2>MODIFICAR SUGESTÃO</h2>
        <div className="form-container">
          <img src="img/marvel.jpeg" alt="Ator" className="ator-image" />
          <FormField/>
          <form id="atorForm">
           
            <Classificacao/>
            <div className="button-group">
              <a href="vizu_mi_sugs.html">
                <button type="button" id="can">Cancelar</button>
              </a>
              <button type="submit" id="add">Modificar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModsSugsFilm;
