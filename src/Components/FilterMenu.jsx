import Tips from "./Tips"
import Button from "./Button"

const FilterMenu = () => {
    return (
      <>
       <div className='m-auto w-10/12' id='filtros'>
    <div className="shadow py-6 flex flex-col p-6 gap-4 bg-white ">
        <div className='flex flex-row flex-wrap gap-6 flex-grow-2 '>
            <div className=" min-w-72 flex items-center  justify-start gap-12 ">
                <label className="input-group-text active:scale-105" htmlFor="inputGroupSelect01">Curso: </label>   
                <select className="flex gap-12 border outline-none rounded p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md" id="inputGroupSelect01">
                    <option selected className="bg-white p-1">Todos os cursos</option>
                    <option value="1" className="bg-white p-1">One</option>
                    <option value="2" className="bg-white p-1">Two</option>
                    <option value="3" className="bg-white p-1">Three</option>
                </select>
            </div>
            <div className="min-w-72 flex items-center  justify-start gap-12">
                <label className="input-group-text active:scale-105" htmlFor="inputGroupSelect02">Mês de análise: </label>   
                <select className="border outline-none rounded p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md" id="inputGroupSelect02">
                    <option selected className="">10/2023</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="min-w-72 flex items-center  justify-start gap-12">
                <label className="input-group-text active:scale-105" htmlFor="inputGroupSelect03">Função: </label>   
                <select className="border outline-none rounded p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md" id="inputGroupSelect03">
                    <option selected className="">Professor</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="min-w-72 flex items-center  justify-start gap-12">
                Situação: 
                <div className="flex flex-row gap-3 flex-wrap w-3/5">
                    <Button extratags="!rounded-full px-6 focus:bg-secundaria"> Ativo</Button>
                    <Button extratags="!rounded-full px-6 focus:bg-secundaria"> Concluinte </Button>
                    <Button extratags="!rounded-full px-6 focus:bg-secundaria"> Formando </Button>
                    <Button extratags="!rounded-full px-6 focus:bg-secundaria"> Concluído </Button>
                    <Button extratags="!rounded-full px-6 focus:bg-secundaria"> Cancelado </Button>
                    <Button extratags="!rounded-full px-6 focus:bg-secundaria"> Não cadastrado </Button>
                    <Button extratags="!rounded-full px-6 focus:bg-secundaria"> Cadastrado </Button>
                    <Button extratags="!rounded-full px-6 focus:bg-secundaria"> Trancado </Button>
                </div>
            </div>
            </div>

        

        <div className=" align-middle justify-center flex pt-6 ">
            <Button color='bg-terciaria bg-opacity-90 active:bg-opacity-70 border-none hover:bg-opacity-100 text-white'> Filtrar
            </Button>
            </div>
    </div>
    
</div>                
</>
  )
}

export default FilterMenu