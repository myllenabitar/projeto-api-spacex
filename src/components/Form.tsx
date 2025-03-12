import React from 'react';

interface FormProps {
  formData: { name: string; age: number | null };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; age: number | null  }>>;
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
        value={formData.age ?? ''}
        onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
        placeholder="Digite sua idade"
        className=""
      />
    </div>
  );
};

export default Form;
