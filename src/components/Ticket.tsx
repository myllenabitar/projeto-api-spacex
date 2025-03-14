import React from 'react';
import { useLocation } from 'react-router-dom';

const Ticket: React.FC = () => {
  const { state } = useLocation();
  const { name, destination, age, ProblemaSaude, insignia } = state || {};

  return (
    <div className="container p-4 text-center">
      <h2 className=" ticket text-2xl mb-4">TICKET DE RESERVA</h2>
      <p className="ticket bg-blue-500 text-white p-4 rounded"><strong>NOME:</strong> {name || 'Nome não fornecido'}</p>
      <p className="ticket bg-blue-500 text-white p-4 rounded"><strong>DESTINO:</strong> {destination || 'Destino não fornecido'}</p>
      {insignia ? (
        <img src={insignia} alt="Insígnia do Voo" className="mx-auto mt-2 w-32 h-32" />
      ) : (
        <p>Sem insígnia disponível</p>
      )}
      <p className="ticket bg-green-500 text-white p-4 rounded"><strong>IDADE: {age}</strong></p>
      <p className="ticket bg-red-500 text-white p-4 rounded"><strong>PROBLEMA DE SAÚDE: {ProblemaSaude ? 'Sim' : 'Não'}</strong></p>
    </div>
  );
};

export default Ticket;
