import React from 'react';
import '../../paginas/ModSugsAtor/add_ator.css'; 
import FormMenor from '../../components/FormMenor';

const ModsSugsAtor = () => {

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
          <FormMenor/>
          <form id="atorForm">
            
            <div className="button-group">
              <a href="vizu_mi_sugs.html">
                <button type="button" id="cance">Cancelar</button>
              </a>
              <button type="submit" id="add">Modificar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModsSugsAtor;
