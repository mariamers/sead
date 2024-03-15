import Button from "./Button"
import React from "react";
import { Dados, DadosDropdown } from './Dados';

const Situacao = [
    {
      name: "Ativo",
      current: false,
    },
    {
      name: "Concluinte",
      current: false,
    },
    {
      name: "Formando",
      current: false,
    },
    {
      name: "Concluído",
      current: false,
    },
    {
      name: "Cancelado",
      current: false,
    },
    {
      name: "Não cadastrado",
      current: false,
    },
    {
      name: "Cadastrado",
      current: false,
    },
    {
      name: "Trancado",
      current: false,
    },
  ];

  const Endereco = [
    {
      name: "Pessoais",
      current: false,
    },
    {
      name: "Contato",
      current: false,
    },
    {
      name: "Forma de ingresso",
      current: false,
    },
    {
      name: "Período de Ingresso",
      current: false,
    },
    {
      name: "Última movimentação",
      current: false,
    },
    
  ];


const FilterMenu = () => {

    return (
      <>
       <div className='container shadow py-6 flex flex-col items-start p-6 gap-4 bg-white' id='filtros'>
        <div className="justify-start flex flex-row gap-6 content-start items-start flex-wrap pb-6">
            <div className="flex gap-2 flex-col self-end flex-wrap">
                <label className="input-group-text active:scale-105" htmlFor="inputGroupSelect01">Curso: </label>   
                <select className="flex gap-12 border w-64 outline-none rounded p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md" id="inputGroupSelect01">
                    <option selected className="bg-white p-1">Todos os cursos</option>
                    <option value="1" className="bg-white p-1">One</option>
                    <option value="2" className="bg-white p-1">Two</option>
                    <option value="3" className="bg-white p-1">Three</option>
                </select>
            </div>
            <div className="flex gap-2 flex-col self-end flex-wrap">
                <label className="input-group-text active:scale-105" htmlFor="inputGroupSelect02">Mês de análise: </label>   
                <select className="border outline-none rounded w-64 p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md" id="inputGroupSelect02">
                    <option selected className="">10/2023</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="flex gap-2 flex-col self-end flex-wrap">
                <label className="input-group-text active:scale-105" htmlFor="inputGroupSelect03">Função: </label>   
                <select className="border outline-none rounded w-64 p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md" id="inputGroupSelect03">
                    <option selected className="">Professor</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            </div>
            <div className="flex gap-2 flex-col relative flex-wrap pb-6">
               <div> Situação:</div>
               <div className='md:hidden'><DadosDropdown menuItems={Situacao}/></div>
               <div className='hidden md:flex'><Dados menuItems={Situacao}/></div>

            </div>
            <div className="flex gap-2 flex-col flex-wrap">
               <div> Obter dados:</div>
                <div className='md:hidden'><DadosDropdown menuItems={Endereco}/></div>
               <div className='hidden md:flex'><Dados menuItems={Endereco}/></div>
            </div>
        <div className=" align-middle justify-center flex pt-6 ">
            <Button color='bg-terciaria bg-opacity-90 active:bg-opacity-70 border-none hover:bg-opacity-100 text-white'> Filtrar
            </Button>
            </div>
    
</div>                
</>
  )
}

export default FilterMenu