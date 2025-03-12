import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import Button from './components/Button';
import Ticket from './components/Ticket';
import Input from './components/Input'; 

interface Launch {
  id: string;
  name: string;
  date_utc: string;
  details: string | null;
  links: {
    patch: {
      small: string | null;
    };
  };
}

function SelectFlight() {
  const [selectFlight, setSelectFlight] = useState<string>('');
  const [data, setData] = useState<Launch | null>(null);
  const [launches, setLaunches] = useState<Launch[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/launches');
        const data = await response.json();
        setLaunches(data);
      } catch (error) {
        console.error('Erro ao carregar a API:', error);
      }
    };
    fetchLaunches();
  }, []);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const launchId = event.target.value;
    setSelectFlight(launchId);

    if (launchId) {
      try {
        const response = await fetch(`https://api.spacexdata.com/v4/launches/${launchId}`);
        const data: Launch = await response.json();
        setData(data);
      } catch (error) {
        console.error('Erro ao buscar detalhes da API:', error);
      }
    }
  };

  const [formData, setFormData] = useState<{ name: string; idade: number | null }>({ name: '', idade: null });

  const handleReservation = () => {
    const name = formData.name;
    const destination = data?.name || 'Destino Desconhecido';
  
    navigate('/ticket', { state: { name, destination } });
  };
  

  return (
    <div>
      <div className="p-4">
        <label htmlFor="launches" className="block mb-2">Selecione um voo:</label>
        <select
          id="launches"
          value={selectFlight}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">Escolha um voo</option>
          {launches.map((launch) => (
            <option key={launch.id} value={launch.id}>
              {launch.name}
            </option>
          ))}
        </select>

        {data && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h2 className="text-xl font-bold">{data.name}</h2>
            <p><strong>Data:</strong> {new Date(data.date_utc).toLocaleDateString()}</p>
            <p><strong>Detalhes:</strong> {data.details || 'Sem detalhes disponíveis'}</p>
            {data.links.patch.small && (
              <img
                src={data.links.patch.small}
                alt="Patch do lançamento"
                className="mt-2 w-32 h-32"
              />
            )}
          </div>
        )}
      </div>
      <Form formData={formData} setFormData={setFormData} />
      <Button onClick={handleReservation} label="Reservar o seu voo" />
      <Input/>
    </div>
  );
}

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectFlight />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
};

export { SelectFlight, AppWrapper };
