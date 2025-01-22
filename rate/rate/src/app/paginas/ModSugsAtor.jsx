import React from 'react';
import '../../../../rate_projeto/css/add_ator.css'; 
import FormMenor from '../components/FormMenor';

const ModifyActorSuggestion = () => {

//   const goBack = () => {
//     window.history.back();
//   };

  return (
    <div className="cards">
      <div className="seta_voltar">
        <button className="back-button" >&#8592;</button>
      </div>
      <div className="container">
        <h2>MODIFICAR SUGESTÃO</h2>
        <div className="form-container">
          <img src="img/ator.webp" alt="Ator" className="ator-image" />
          <form id="atorForm">
            <FormMenor/>
            <div className="button-group">
              <a href="vizu_mi_sugs.html">
                <button type="button" id="cancel">Cancelar</button>
              </a>
              <button type="submit" id="add">Modificar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModifyActorSuggestion;
