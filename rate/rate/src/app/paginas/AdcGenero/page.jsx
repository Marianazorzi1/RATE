import React from 'react';
import './add_gen.css'; 

const AdcGenero = () => {
//   const goBack = () => {
//     window.history.back();
//   };

  return (
    <div className="cards">
      <div className="seta_voltar">
        <button className="back-button">&#8592;</button>
      </div>
      <div className="container">
        <h2>ADICIONAR GÊNERO</h2>
        <div className="form-container">
          <img src="/img/animacao.avif" alt="Ator" className="ator-image" />
          <form id="atorForm">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" placeholder="Digite o nome" required />
            <div className="button-group">
              <button type="button" id="ca" >
                Cancelar
              </button>
              <button type="submit" id="add">Adicionar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdcGenero;
