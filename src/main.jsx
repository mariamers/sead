import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './js/Pages/Index'
import Tabelas from './js/Pages/Tabelas'

import './js/Pages/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
    <br/>
    <Tabelas />
  </React.StrictMode>,
)