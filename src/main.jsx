import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/app.css';
import Index from './js/Pages/Index'
import Relatorios from './js/Pages/Relatorios';
import Login from './js/Pages/Login';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Login />
<Index />
<Relatorios />

  </React.StrictMode>,
)