import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import "./index.css"
import Breadcrumb from '../../Components/Breadcrumb'
import Card from '../../Components/Card'
function Index() {
  return (
    <>
      <Navbar />
      <header className="bg-white shadow w-full">
        <div className="py-6 flex items-center justify-center w-10/12 align-middle m-auto  flex gap-5">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 w-full">Página Inicial</h1>
          <div className='w-full'><Breadcrumb /></div>
        </div>
      </header>
      <main className='min-h-dvh'>
        <div className='text-xl mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>Links Úteis</div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-1 lg:mx-32 w-auto min-w-[250px] m-auto">
          <Card titulo="maria" paragrafo="lorem"/>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>

      </main>
      <Footer />
    </>
  )
}


export default Index