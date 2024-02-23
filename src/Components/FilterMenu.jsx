import Tips from "./Tips"
import Button from "./Button"

const FilterMenu = () => {
    return (
      <>
       <div className='m-auto w-10/12' id='filtros'>
    <div className="shadow py-6 flex flex-col p-6 gap-4 bg-white ">
        <div className='flex flex-row flex-wrap gap-6 flex-grow-2 '>
            <div className=" min-w-72 flex items-center justify-end gap-2 ">
                <label className="input-group-text active:scale-105" htmlFor="inputGroupSelect01">Curso: </label>   
                <select className="flex gap-2 border outline-none rounded p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md" id="inputGroupSelect01">
                    <option selected className="bg-white p-1">Todos os cursos</option>
                    <option value="1" className="bg-white p-1">One</option>
                    <option value="2" className="bg-white p-1">Two</option>
                    <option value="3" className="bg-white p-1">Three</option>
                </select>
            </div>
            <div className="min-w-72 flex items-center justify-end gap-2">
                <label className="input-group-text active:scale-105" htmlFor="inputGroupSelect02">Mês de análise: </label>   
                <select className="border outline-none rounded p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md" id="inputGroupSelect02">
                    <option selected className="">Todos os cursos</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="min-w-72 flex items-center justify-end gap-2">
                <label className="input-group-text active:scale-105" htmlFor="inputGroupSelect03">Curso: </label>   
                <select className="border outline-none rounded p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md" id="inputGroupSelect03">
                    <option selected className="">Todos os cursos</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            </div>

            <div className='flex flex-row flex-wrap gap-6 flex-grow-2'>
            <div className="min-w-72 flex items-center justify-end gap-2">
                <label className="input-group-text active:scale-105" htmlFor="inputGroupSelect04">Função: </label>   
                <select className="border outline-none rounded p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md" id="inputGroupSelect04">
                    <option selected className="">Todos os cursos</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="min-w-72 flex justify-end gap-2">
                <label className="input-group-text active:scale-105" htmlFor="inputGroupSelect05">Curso: </label>   
                <select className="border outline-none rounded p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md" id="inputGroupSelect05">
                    <option selected className="">Todos os cursos</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="min-w-72 flex items-center justify-end gap-2">
                <label className="input-group-text active:scale-105" htmlFor="inputGroupSelect06">Função: </label>   
                <select className="border outline-none rounded p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md" id="inputGroupSelect06">
                    <option selected className="">Todos os cursos</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            </div>

        

        <div className=" align-middle justify-center flex pt-6">
            <Button color='bg-terciaria text-white border-none'> Filtrar
            </Button>
            </div>
    </div>
    
</div>                
</>
  )
}

export default FilterMenu