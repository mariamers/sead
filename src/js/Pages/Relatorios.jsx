import React, { lazy } from 'react';
import Navbar from '../Components/Navbar';
import MainTitle from '../Components/MainTitle';
import Breadcrumb from '../Components/Breadcrumb';
import Button from '../Components/Button';
const FilterMenu = lazy(() => import('../Components/FilterMenu'));
const Footer = lazy(() => import('../Components/Footer'));
const ReactXLSX = lazy(() => import('../Components/Table/ReactXLSX'));
const CombinedTable = lazy(() => import('../Components/Table/CombinedTable'));
const PDFFileWithTable = lazy(() => import('../Components/Table/PDFFileWithTable'));


function Relatorios() {
  return (
    <>
      <header>
        <Navbar />
        <MainTitle H1="Relatórios e Estatísticas">
        <Breadcrumb Link1="home" />
        </MainTitle>

      </header>
      <div className='text-xl mx-auto w-10/12 px-6 pt-12'>Filtrar Itens</div>

      <div className="p-6 w-10/12 m-auto"><FilterMenu /></div>
      <div className='m-auto flex flex-col'>
        <div className='flex gap-4 justify-center cbg flex-col m-auto items-center w-10/12'>
          <CombinedTable />

          <div className='flex flex-row gap-4 m-auto'>
            <Button><PDFFileWithTable /></Button>
            <ReactXLSX> </ReactXLSX>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Relatorios;