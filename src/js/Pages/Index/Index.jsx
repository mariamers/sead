import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import "./index.css"
import Breadcrumb from '../../Components/Breadcrumb'
import Card from '../../Components/Card'
import MainTitle from '../../Components/MainTitle'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
function Index() {
  const i01 = <PlayCircleIcon className='h-24' />
  return (
    <>
    <header>
    <Navbar />
    <MainTitle H1="Página Inicial"/>
    </header>

      <main className='min-h-dvh'>
        <div className='text-xl mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8'>Links Úteis</div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-1 lg:mx-32 w-auto min-w-[250px] m-auto">
          <Card titulo="Exportar notas" icon={i01}/>
          <Card titulo="Listagem de alunos" />
          <Card titulo="Tutores a distância" />
          <Card titulo="Tutores presenciais" />
          <Card titulo="Estimativas" />
          <Card titulo="Gerar turmas" />

        </div>

      </main>
      <Footer />
    </>
  )
}


export default Index