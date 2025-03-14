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
  const [formData, setFormData] = useState<{ name: string; age: number | null; ProblemaSaude: boolean }>({ name: '', age: null, ProblemaSaude: false });
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

  const handleReservation = () => {
    if (validateForm()) {
      const name = formData.name;
      const destination = data?.name || 'Destino Desconhecido';
      const age = formData.age;
      const ProblemaSaude = formData.ProblemaSaude;
      const insignia = data?.links.patch.small || null;

      navigate('/ticket', { state: { name, age, destination, insignia, ProblemaSaude } });
    }
  };

  const validateForm = () => {
    const { name, age } = formData;

    if (!name.trim()) {
      alert("Por favor, digite seu nome.");
      return false;
    }

    if (!selectFlight) {
      alert("Por favor, selecione um voo.");
      return false;
    }

    if (!age || age <= 0) {
      alert("Por favor, digite uma idade válida.");
      return false;
    }

    alert("Reserva efetuada com sucesso! Aguarde pela impressão do seu ticket");
    return true;
  };

  return (
    <div className="container">
      <h1 className="titulo">BEM VINDO A SUA PRÓXIMA VIAGEM</h1>
      <div className="formulario custom-select">
        <label htmlFor="launches" className="titulo"><strong>SELECIONE O SEU VOO:</strong></label>
        <select
          id="launches"
          value={selectFlight}
          onChange={handleChange}
          className="dropdown"
        >
          <option value="" className="dropdown">Selecione o seu voo</option>
          {launches.map((launch) => (
            <option key={launch.id} value={launch.id} className="dropdown">
              {launch.name}
            </option>
          ))}
        </select>

        {data && (
          <div className="dados-voo">
            <h2>{data.name}</h2>
            <p><strong>Data:</strong> {new Date(data.date_utc).toLocaleDateString()}</p>
            <p><strong>Detalhes:</strong> {data.details || 'Sem detalhes disponíveis'}</p>
            {data.links.patch.small && (
              <img
                src={data.links.patch.small}
                alt="Patch do lançamento"
                className="patch-image"
              />
            )}
          </div>
        )}
      </div>
      <Form formData={formData} setFormData={setFormData} />
      <Input />
      <Button onClick={handleReservation} label="RESERVAR VOO  → " />
      <p className='footer'>SpaceX © 2025</p>
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

export default AppWrapper;


export { SelectFlight, AppWrapper };
