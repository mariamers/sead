import React from 'react'


const Relatorios = () => {
  return (
    <main className="container py-9 mx-24 shadow pb-24 mt-6">
      <h2 className="mx-10 font-bold">Filtrar Estatísticas</h2>
          <section className='flex flex-col gap-4 mx-24'>
          <div className="container w-56 flex gap-4 justify-between">
              <label className="input-group-text font-bold" for="inputGroupSelect01">Curso: </label>
              <select className="form-select border rounded p-1" id="inputGroupSelect01">
                  <option selected>Todos os cursos</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
          <div className="container w-56 flex gap-4 justify-between">
              <label className="input-group-text font-bold" for="inputGroupSelect01">Função: </label>
              <select className="form-select border rounded p-1" id="inputGroupSelect01">
                  <option selected>Professor</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
          <div className="container w-56 flex gap-4 justify-between">
              <label className="input-group-text font-bold" for="inputGroupSelect01">Mês de análise: </label>
              <select className="form-select border rounded p-1" id="inputGroupSelect01">
                  <option selected>12/23</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
          </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </main>
  )
}

export default Relatorios