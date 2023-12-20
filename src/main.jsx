import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './js/Pages/Index';
import Tabelas from './js/Pages/Tabelas';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/sead">Home</Link>
          <Link to="/sead/relatorios">Relatórios</Link>
        </nav>

        <Routes>
          <Route path="/sead" element={<Index />} />
          <Route path="/sead/relatorios" element={<Tabelas />} />
          {/* Adicione mais rotas conforme necessário para outras páginas */}
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
