import React from 'react';
import './adc_sugs_filmeADM.css'; 
import FormField from '../../components/FormField';
import Classificacao from '../../components/ClassificacaoIMG';

const AdcSugsFilmADm = () => {

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
                <button type="button" id="cancelaa">Cancelar</button>
              </a>
              <button type="submit" id="addi">Modificar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdcSugsFilmADm;
