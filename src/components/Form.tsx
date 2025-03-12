import React from 'react';

interface FormProps {
  formData: { name: string; idade: number | null };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; idade: number | null  }>>;
}

const Form: React.FC<FormProps> = ({ formData, setFormData }) => {
  return (
    <div className="">
      <label htmlFor="name" className="block mb-2">Digite seu nome:</label>
      <input
        id="name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Digite seu nome"
        className=""
      />

<label htmlFor="name" className="">Digite sua idade:</label>
      <input
        id="idade"
        type="number"
        value={formData.idade ?? ''}
        onChange={(e) => setFormData({ ...formData, idade: Number(e.target.value) })}
        placeholder="Digite sua idade"
        className=""
      />
    </div>
  );
};

export default Form;
