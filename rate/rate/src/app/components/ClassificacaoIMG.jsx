import React from 'react';

const Classificacao = () => {
  const ClassificacaoButton = ({ src, alt, iconClass }) => (
    <button type="button" className="buto">
      <img src={src} alt={alt} className={iconClass} />
    </button>
  );

  return (
    <div className="img_classificacao">
      <ClassificacaoButton src="img/AL.jpg" alt="indicação livre" iconClass="ícone1" />
      <ClassificacaoButton src="img/A10.jpg" alt="indicação acima de 10 anos" iconClass="ícone2" />
      <ClassificacaoButton src="img/A12.jpg" alt="indicação acima de 12 anos" iconClass="ícone3" />
      <ClassificacaoButton src="img/A14.png" alt="indicação acima de 14 anos" iconClass="ícone4" />
      <ClassificacaoButton src="img/A16.png" alt="indicação acima de 16 anos" iconClass="ícone5" />
      <ClassificacaoButton src="img/A18.png" alt="indicação acima de 18 anos" iconClass="ícone6" />
    </div>
  );
};

export default Classificacao;
