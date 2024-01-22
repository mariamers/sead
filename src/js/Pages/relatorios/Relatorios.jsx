
import React from 'react'
import Navbar from '../../Components/Navbar'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { CombinedTable } from '../../Components/Table/CombinedTable'
import ReactCSV from '../../Components/Table/ReactCSV'
import Footer from '../../Components/Footer'
import Breadcrumb from '../../Components/Breadcrumb'
import PDFFileWithTable from '../../Components/Table/PDFFileWithTable'
import FilterMenu from '../../Components/FilterMenu'


const navigation = [
  { name: 'Página Inicial', href: '/sead', current: false },
  { name: 'Consultas', href: '#', current: true },

]

function Relatorios() {
  return (
    <>
      <Navbar />
      
      <header className="bg-white shadow w-full">
        <div className="py-6 flex items-center justify-center w-10/12 align-middle m-auto flex gap-5">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 w-full">Relatórios e estatísticas</h1>
          <div className='w-full'><Breadcrumb /></div>
        </div>
      </header>
      <div className="w-10/12 m-auto pt-6"><FilterMenu /></div>
      <div className='m-auto flex flex-col'>
        <div className='flex gap-4 justify-center cbg flex-col m-auto items-center w-4/5'>
          <CombinedTable />

          <div className='flex flex-row gap-4 m-auto'>
            <PDFDownloadLink document={<PDFFileWithTable />} filename="FORM">
              {({ loading }) => (loading ? <button>Loading Document...</button> : <button className='hover:bg-gray-50 flex items-center justify-between px-4
py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-principal-500 shadow-md active:bg-gray-100'>Baixar como PDF</button>)}
            </PDFDownloadLink>
            <ReactCSV />
          </div>
        </div>


      </div><Footer />
    </>
  )
}


export default Relatorios
