import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'

import MainTitle from '../Components/MainTitle'
import { ArrowDownOnSquareIcon, CubeIcon, ListBulletIcon, } from '@heroicons/react/24/outline'
import Breadcrumb from '../Components/Breadcrumb'
function Index() {
  const i01 = <ArrowDownOnSquareIcon className='h-12 flex' />
  const i02 = <ListBulletIcon className='h-12 flex' />
  const i03 = <CubeIcon className='h-12 flex' />


  return (
    <>
    <header>
    <Navbar />
    <MainTitle H1="Página Inicial">
      <Breadcrumb Link1="home" />
    </MainTitle>    
    </header>

      <main className='min-h-dvh'>
        <div className='text-xl mx-auto w-10/12 pt-12 px-6'>Links Úteis</div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-1 lg:mx-32 w-10/12 min-w-[250px] m-auto">
          <Card titulo="Exportar notas" icon={i01}/>
          <Card titulo="Listagem de alunos" icon={i02}/>
          <Card titulo="Tutores a distância" icon={i03}/>
          <Card titulo="Tutores presenciais" icon={i03}/>
          <Card titulo="Estimativas" icon={i03}/>
          <Card titulo="Gerar turmas" icon={i03}/>
        </div>
      </main>
      <Footer />
    </>
  )
}


export default Index