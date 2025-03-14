import React from 'react';

interface FormProps {
  formData: {
    name: string;
    age: number | null;
    ProblemaSaude: boolean;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    age: number | null;
    ProblemaSaude: boolean;
}>>;
}

const Form: React.FC<FormProps> = ({ formData, setFormData }) => {
  return (
    <div>
      <label htmlFor="name"><strong>DIGITE SEU NOME COMPLETO:</strong></label>
      <input
        id="name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Digite seu nome completo"
      />

<label htmlFor="name"><strong>DIGITE SUA IDADE:</strong></label>
      <input
        id="idade"
        type="number"
        min="1"
        value={formData.age ?? ''}
        onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
        placeholder="Digite sua idade"
      />
    </div>
  );
};

export default Form;