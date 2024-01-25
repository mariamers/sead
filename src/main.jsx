import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Relatorios from './js/Pages/relatorios/Relatorios'
import Index from './js/Pages/index/Index'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' min-w-[375px] bg-gray-50'>
    <BrowserRouter>
            <Routes>
                <Route path="/sead" element={<Index />} />
                <Route path="/sead/relatorios" element={<Relatorios />} />

            </Routes>
        
        
        </BrowserRouter></div>
  </React.StrictMode>,
)