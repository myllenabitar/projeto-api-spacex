import React from 'react';
import { useLocation } from 'react-router-dom';

const Ticket: React.FC = () => {
  const location = useLocation();
  const { name, destination } = location.state || {};

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl mb-4">Ticket de Reserva</h2>
      <p><strong>Nome:</strong> {name || 'Nome não fornecido'}</p>
      <p><strong>Destino:</strong> {destination || 'Destino não fornecido'}</p>
    </div>
  );
};

export default Ticket;
