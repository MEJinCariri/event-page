import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes'; // Importe o componente de rotas

function App() {
  return (
    <Router>
      <AppRoutes /> {/* Renderize as rotas aqui */}
    </Router>
  );
}

export default App;
