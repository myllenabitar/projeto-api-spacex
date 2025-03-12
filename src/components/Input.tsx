import React, { useState } from "react";

const ProblemaSaude: React.FC = () => {
  const [problemaSaude, setProblemaSaude] = useState<string>("");

  return (
    <div>
      <label>Possui algum problema de saúde?</label>
      <div>
        <label>
          <input
            type="radio"
            name="problemaSaude"
            value="sim"
            checked={problemaSaude === "sim"}
            onChange={(e) => setProblemaSaude(e.target.value)}
          />
          Sim
        </label>
        <label>
          <input
            type="radio"
            name="problemaSaude"
            value="nao"
            checked={problemaSaude === "nao"}
            onChange={(e) => setProblemaSaude(e.target.value)}
          />
          Não
        </label>
      </div>
      <p>Selecionado: {problemaSaude || "Nenhum"}</p>
    </div>
  );
};

export default ProblemaSaude;
