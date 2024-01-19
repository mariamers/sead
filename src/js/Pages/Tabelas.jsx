
import React from 'react'
import Navbar from '../Components/Navbar'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFFile from '../Components/Table/PDFFile'
import  ColumnHiding  from '../Components/Table/ColumnHiding'
import PaginationTable from '../Components/Table/PaginationTable'
import ReactCSV from '../Components/Table/ReactCSV'
import Footer from '../Components/Footer'
import Breadcrumb from '../Components/Breadcrumb'
import PDFFileWithTable from '../Components/Table/PDFFileWithTable'



function Tabelas() {
  return (
    <>
    <Navbar />
    <header className="bg-white shadow w-full">
          <div className="py-6 flex items-center justify-center w-10/12 align-middle m-auto  flex gap-5">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 w-full">Relatórios e estatísticas</h1>      
            <div><Breadcrumb/></div>
          </div>
        </header>

        <div className='m-auto flex flex-col p-6 w-10/12'>
          <div className='m-auto w-full'>
              <div className='text-xl px-4 py-6 sm:px-6 lg:px-8 bg-gray-200 text-principalv3 min-w-80'>Filtrar itens</div>
              <div className="shadow py-6 flex flex-row px-6">
          <section className='flex flex-col gap-4 p-6'>
          <div className="container w-56 flex gap-4 justify-between sm:flex-wrap lg:flex-nowrap items-center">
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

          <button  className='hover:bg-gray-700 text-white place-self-end py-2 border-2 rounded-lg cursor-pointer bg-terciaria  w-fit text-sm border-gray-200 group peer-checked:border-principal-500 p-2'> 
          Filtrar</button>

          </section></div></div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
       
       <div className='flex gap-4 justify-center cbg flex-col m-auto items-center w-4/5'>
        <ColumnHiding />

  <div className='flex flex-row gap-4 m-auto'>
  <PDFDownloadLink document={<PDFFileWithTable />} filename="FORM">
{({loading}) => (loading ? <button>Loading Document...</button> : <button className='hover:bg-gray-50 flex items-center justify-between px-4
py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-principal-500"'>Baixar como PDF</button> )}
</PDFDownloadLink>
   <ReactCSV />
    </div>   
    </div> 
         

       </div><Footer/>
</>
  )
}


export default Tabelas
