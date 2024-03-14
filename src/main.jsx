import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/app.css';
import Index from './js/Pages/Index'
import Relatorios from './js/Pages/Relatorios';
import Login from './js/Pages/Login';
import Navbar from './js/Components/Navbar';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Login />
<nav className="pb-16">
<div className="w-full z-10 fixed top-0">
<Navbar />
</div>
</nav>
<Index />
<Relatorios />

  </React.StrictMode>,
)