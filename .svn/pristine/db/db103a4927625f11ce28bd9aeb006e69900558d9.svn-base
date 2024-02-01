import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import "./index.css"
import Card from '../../Components/Card'
import MainTitle from '../../Components/MainTitle'
import { ArrowDownOnSquareIcon, CubeIcon, ListBulletIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
function Index() {
  const i01 = <ArrowDownOnSquareIcon className='h-12 flex' />
  const i02 = <ListBulletIcon className='h-12 flex' />
  const i03 = <CubeIcon className='h-12 flex' />


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
          <Card titulo="Listagem de alunos" icon={i02}/>
          <Card titulo="Tutores a distância" icon={i03}/>
          <Card titulo="Tutores presenciais" icon={i03}/>
          <Card titulo="Estimativas" icon={i03}/>
          <Card titulo="Gerar turmas" icon={i03}/>

        </div>

      </main>
      <Footer />

<br/>
    </>
  )
}


export default Index