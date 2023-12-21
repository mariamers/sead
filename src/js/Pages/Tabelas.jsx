
import React from 'react'
import Navbar from '../Components/Navbar'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFFile from '../Components/Table/PDFFile'
import { ColumnHiding } from '../Components/Table/ColumnHiding'
import ReactCSV from '../Components/Table/ReactCSV'
import Relatorios from '../Components/Relatorios'
import Footer from '../Components/Footer'
import Breadcrumb from '../Components/Breadcrumb'
import PDFFileWithTable from '../Components/Table/PDFFileWithTable'
import { GlobalFilter} from '../Components/Table/GlobalFilter'



function Tabelas() {
  return (
    <>
    <Navbar />
    <header className="bg-secundaria shadow">
          <div className="mx-auto max-w-7xl py-6 flex items-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 w-96">Relatórios e estatísticas</h1>      <Breadcrumb/>
          </div>
        </header><Relatorios/>   
    <div className='flex gap-4 justify-center cbg flex-col'>
  
            <ColumnHiding />    

          <div className='flex flex-row gap-4 m-auto'>
          <PDFDownloadLink document={<PDFFileWithTable />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button className='hover:bg-gray-50 flex items-center justify-between px-4
       py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-principal-500"'>Baixar como PDF</button> )}
      </PDFDownloadLink>
           <ReactCSV />
           </div>
       </div>
       <Footer/>
</>
  )
}


export default Tabelas
