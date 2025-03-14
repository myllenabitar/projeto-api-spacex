import React from 'react';
import { useLocation } from 'react-router-dom';

const Ticket: React.FC = () => {
  const { state } = useLocation();
  const { name, destination, age, ProblemaSaude, insignia } = state || {};

  return (
    <div className="container p-8 mx-auto text-center bg-gray-800 text-white rounded-md shadow-lg max-w-md">
      <h2 className="text-3xl font-bold mb-6">TICKET DE RESERVA</h2>

      <p className="bg-blue-600 text-white p-4 rounded mb-2">
        <strong>NOME:</strong> 
        {name || 'Nome não fornecido'}
      </p>

      <p className="bg-blue-600 text-white p-4 rounded mb-2">
        <strong>DESTINO:</strong> 
        {destination || 'Destino não fornecido'}
      </p>

      {insignia ? (
        <img
          src={insignia}
          alt="Insígnia do Voo"
          className="mx-auto mt-4 w-32 h-32 rounded-md shadow-md"
        />
      ) : (
        <p className="text-gray-400">
          Sem insígnia disponível</p>
      )}

      <p className="bg-green-600 text-white p-4 rounded mb-2">
        <strong>IDADE:</strong> 
        {age !== null ? age : 'Idade não fornecida'}
      </p>

      <p className="bg-red-600 text-white p-4 rounded">
        <strong>PROBLEMA DE SAÚDE:</strong> 
        {ProblemaSaude ? 'Sim' : 'Não'}
      </p>
    </div>
  );
};

export default Ticket;

