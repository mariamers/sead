import React from 'react'
import Index from './Pages/Index'
import Relatorios from './Pages/relatorios/Relatorios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sead" element={<Index />} />
                <Route path="/sead/relatorios" element={<Relatorios />} />

            </Routes>
        
        
        </BrowserRouter>
      
        
      )
      }
  
  export default App
  