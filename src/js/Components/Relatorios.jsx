import React from 'react'


const Relatorios = () => {
  return (
    <main>      
      <h2 className="text-xl mx-16 max-w-6xl px-4 py-6 sm:px-6 lg:px-8 font-bold">Filtrar Estatísticas</h2>
    <div className="container mx-24 shadow py-6 mt-6 w-auto">
          <section className='grid grid-cols-2 gap-4 mx-24 w-6/12'>
          <div className="container w-56 flex gap-4 justify-between">
              <label className="input-group-text font-bold" for="inputGroupSelect01">Curso: </label>
              <select className="form-select border rounded p-2" id="inputGroupSelect01">
                  <option selected>Todos os cursos</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
          <div className="container w-56 flex gap-4 justify-between">
              <label className="input-group-text font-bold" for="inputGroupSelect01">Função: </label>
              <select className="form-select border rounded p-2" id="inputGroupSelect01">
                  <option selected>Professor</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
          <div className="container w-56 flex gap-4 justify-between">
              <label className="input-group-text font-bold" for="inputGroupSelect01">Mês de análise: </label>
              <select className="form-select border rounded p-2" id="inputGroupSelect01">
                  <option selected>12/23</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
          <br />
          <div></div>
          <div></div>
          <div></div>
          <button  className='hover:bg-gray-50 place-self-end mr-8 px-4 py-2 border-2 rounded-lg cursor-pointer w-fit text-sm border-gray-200 group peer-checked:border-principal-500'> Filtrar</button>

          </section>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </div></main>
  )
}

export default Relatorios