import React from 'react';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <div>
      <Layout>
        <h1>{"Space X Experience"}</h1>
        <p>{"Reserve sua próxima jornada"}</p>
        <input type="text"></input>
        <input type="text"></input>
        <input type="radio"></input>
        <input type="radio"></input>
      </Layout>
      </div>
  );
}

export default App;
