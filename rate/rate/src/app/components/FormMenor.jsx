import React from 'react';

const FormMenor = () => {
  const InputField = ({ id, label, type = 'text', placeholder }) => (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input 
        type={type} 
        id={id} 
        name={id} 
        placeholder={placeholder} 
        required 
      />
    </div>
  );

  return (
    <form>
      <InputField id="nome" label="Nome" placeholder="Digite o nome" />
      <InputField id="idade" label="Idade" type="number" placeholder="Digite a idade" />
      <InputField id="nascimento" label="Nascimento" type="date" placeholder="Selecione a data de nascimento" />
    </form>
  );
};

export default FormMenor;
