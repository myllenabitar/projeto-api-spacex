import React from 'react';

interface FormProps {
  formData: { name: string; age: number | null };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; age: number | null  }>>;
}

const Form: React.FC<FormProps> = ({ formData, setFormData }) => {
  return (
    <div className="formulario">
      <label htmlFor="name" className=""><strong>DIGITE SEU NOME COMPLETO:</strong></label>
      <input
        id="name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Digite seu nome completo"
        className=""
      />

<label htmlFor="name" className="formulario"><strong>DIGITE SUA IDADE:</strong></label>
      <input
        id="idade"
        type="number"
        min="1"
        value={formData.age ?? ''}
        onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
        placeholder="Digite sua idade"
        className=""
      />
    </div>
  );
};

export default Form;
