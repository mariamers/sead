
import React from 'react'
import Navbar from '../Components/Navbar'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFFile from '../Components/Table/PDFFile'
import { ColumnHiding } from '../Components/Table/ColumnHiding'
import ReactCSV from '../Components/Table/ReactCSV'
import Relatorios from '../Components/Relatorios'
import Footer from '../Components/Footer'
import Pagination from '../Components/Table/Pagination'


function Tabelas() {
  return (
    <>
    <Navbar />
    <Relatorios/>
    <ColumnHiding/>
    <Pagination />
    <div className='flex gap-4 justify-center cbg'>
<PDFDownloadLink document={<PDFFile />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Baixar em PDF</button> )}
       </PDFDownloadLink>
       <ReactCSV />
       </div>
       <Footer/>
</>
  )
}


export default Tabelas
