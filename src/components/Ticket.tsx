import React from 'react';
import { useLocation } from 'react-router-dom';

const Ticket: React.FC = () => {
  const { state } = useLocation();
  const { name, destination, age, ProblemaSaude, insignia } = state || {};

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl mb-4">Ticket de Reserva</h2>
      <p className="bg-blue-500 text-white p-4 rounded"><strong>Nome:</strong> {name || 'Nome não fornecido'}</p>
      <p className="bg-blue-500 text-white p-4 rounded"><strong>Destino:</strong> {destination || 'Destino não fornecido'}</p>
      {insignia ? (
        <img src={insignia} alt="Insígnia do Voo" className="mx-auto mt-2 w-32 h-32" />
      ) : (
        <p>Sem insígnia disponível</p>
      )}
      <p className="bg-green-500 text-white p-4 rounded">Idade: {age}</p>
      <p className="bg-red-500 text-white p-4 rounded">Problema de saúde: {ProblemaSaude ? 'Sim' : 'Não'}</p>
    </div>
  );
};

export default Ticket;
