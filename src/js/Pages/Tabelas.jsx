
import React from 'react'
import Navbar from '../Components/Navbar'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFFile from '../Components/Table/PDFFile'
import { ColumnHiding } from '../Components/Table/ColumnHiding'
import ReactCSV from '../Components/Table/ReactCSV'
import Footer from '../Components/Footer'
import Breadcrumb from '../Components/Breadcrumb'
import PDFFileWithTable from '../Components/Table/PDFFileWithTable'
import { GlobalFilter} from '../Components/Table/GlobalFilter'
import { PaginationTable } from '../Components/Table/PaginationTable'



function Tabelas() {
  return (
    <>
    <Navbar />
    <header className="bg-secundaria shadow">
          <div className="mx-32 px-4 py-6 sm:px-6 lg:px-8 flex items-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 w-96">Relatórios e estatísticas</h1>      <Breadcrumb/>
          </div>
        </header>
        <div className='mx-32 bg-gray-100 '>
              <div className='text-xl px-4 py-6 sm:px-6 lg:px-8 bg-principalv3 '>Filtrar estatísticas</div>
              <div className="container shadow py-6 mt-6 w-auto flex flex-row w-auto px-6">
          <section className='flex flex-col gap-4 p-6'>
          <div className="container w-56 flex gap-4 justify-between sm:flex-wrap lg:flex-nowrap">
              <label className="input-group-text font-bold" for="inputGroupSelect01">Curso: </label>
              <select className="form-select border rounded p-2  text-sm hover:bg-gray-100 cursor-pointer" id="inputGroupSelect01">
                  <option selected>Todos os cursos</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
          <div className="container w-56 flex gap-4 justify-between sm:flex-wrap">
              <label className="input-group-text font-bold" for="inputGroupSelect01">Função: </label>
              <select className="form-select border rounded p-2  text-sm hover:bg-gray-100 cursor-pointer" id="inputGroupSelect01">
                  <option selected>Professor</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
          <div className="container w-56 flex gap-4 justify-between">
              <label className="input-group-text font-bold" for="inputGroupSelect01">Mês de análise: </label>
              <select className="form-select border rounded p-2 text-sm hover:bg-gray-100 cursor-pointer" id="inputGroupSelect01">
                  <option selected>12/23</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
          <br />

          <button  className='hover:bg-gray-400 place-self-end py-2 border-2 rounded-lg cursor-pointer bg-principalv3 w-fit text-sm border-gray-200 group peer-checked:border-principal-500 p-2'> 
          Filtrar</button>

          </section></div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </div>   
    <div className='flex gap-4 justify-center cbg flex-col m-auto'>
  
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
