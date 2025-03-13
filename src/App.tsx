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

  const [formData, setFormData] = useState<{ name: string; age: number | null; ProblemaSaude: boolean }>({ name: '', age: null, ProblemaSaude: false });

  const handleReservation = () => {
    const name = formData.name;
    const destination = data?.name || 'Destino Desconhecido';
    const age = formData.age;
    const ProblemaSaude = formData.ProblemaSaude;
    const insignia = data?.links.patch.small || null;

    navigate('/ticket', { state: { name, age, destination, insignia, ProblemaSaude } });
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen p-8 font-sans antialiased">
      <div className="p-4 rounded bg-[#cccccc] shadow-lg">
        <label htmlFor="launches" className="block mb-2 text-[#141414] font-bold">Selecione um voo:</label>
        <select
          id="launches"
          value={selectFlight}
          onChange={handleChange}
          className="p-2 border rounded bg-[#f5f5f5] border-[#a3a3a3] hover:border-[#6375eb] focus:border-[#0a29f5]"
        >
          <option value="">Escolha um voo</option>
          {launches.map((launch) => (
            <option key={launch.id} value={launch.id} className="text-[#525252]">
              {launch.name}
            </option>
          ))}
        </select>

        {data && (
          <div className="mt-4 p-4 rounded bg-[#84C5DE] shadow-md">
            <h2 className="text-xl font-bold text-[#141414]">{data.name}</h2>
            <p className="text-[#525252]"><strong>Data:</strong> {new Date(data.date_utc).toLocaleDateString()}</p>
            <p className="text-[#525252]"><strong>Detalhes:</strong> {data.details || 'Sem detalhes disponíveis'}</p>
            {data.links.patch.small && (
              <img
                src={data.links.patch.small}
                alt="Patch do lançamento"
                className="mt-2 w-32 h-32 rounded"
              />
            )}
          </div>
        )}
      </div>
      <Form formData={formData} setFormData={setFormData} />
      <Input />
      <Button onClick={handleReservation} label="Reservar o seu voo" />
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
