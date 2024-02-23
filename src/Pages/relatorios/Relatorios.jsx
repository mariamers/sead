
import React from 'react'
import Navbar from '../../Components/Navbar'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { CombinedTable } from '../../Components/Table/CombinedTable'
import ReactCSV from '../../Components/Table/ReactCSV'
import Footer from '../../Components/Footer'
import PDFFileWithTable from '../../Components/Table/PDFFileWithTable'
import FilterMenu from '../../Components/FilterMenu'
import MainTitle from '../../Components/MainTitle'
import Button from '../../Components/Button'
import Breadcrumb from '../../Components/Breadcrumb'



function Relatorios() {
  return (
    <>
    <header>
    <Navbar />
    <MainTitle H1="Relatórios e Estatísticas"/>
    <Breadcrumb Breadcrumb1="Home"/>
    </header>
    <div className='text-xl mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8'>Filtrar Itens</div>

      <div className="p-6"><FilterMenu /></div>
      <div className='m-auto flex flex-col'>
        <div className='flex gap-4 justify-center cbg flex-col m-auto items-center w-10/12'>
          <CombinedTable />

          <div className='flex flex-row gap-4 m-auto'>
            <PDFDownloadLink document={<PDFFileWithTable />} filename="FORM">
              {({ loading }) => (loading ? <button>Loading Document...</button> : <Button>Baixar como PDF</Button>)}
            </PDFDownloadLink>
            <ReactCSV> </ReactCSV>
          </div>
        </div>


      </div><Footer />
    </>
  )
}


export default Relatorios
