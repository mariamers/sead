import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "./index.css"
import Breadcrumb from '../Components/Breadcrumb'
function Index() {
  return (
    <>
    <Navbar />
    <header className="bg-secundaria shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex items-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 w-72">Página Inicial</h1>      <Breadcrumb/>
          </div>
        </header>
    <main className='min-h-dvh'>
      <div className='text-xl mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>Links Úteis</div>
    <div className="container grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-1 mx-32 w-auto">
  <div className="h-fit rounded-lg p-5">
  <a href="" class="group relative block h-fit sm:h-fit lg:h-64">

  <div
    class="relative flex-nowrap h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 sm:h-12 sm:w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 class="mt-4 text-xl font-medium sm:text-2xl">Exportar Notas</h2>
    </div>

    <div
      class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Exportar Notas</h3>

      <p class="mt-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
        omnis atque culpa repellendus.
      </p>

      <p class="mt-8 font-bold">Acessar</p>
    </div>
  </div>
</a>
  </div>
  <div class="h-fit rounded-lg p-5">
  <a href="" class="group relative block h-fit sm:h-fit lg:h-64">

  <div
    class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 sm:h-12 sm:w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 class="mt-4 text-xl font-medium sm:text-2xl">Listagem dos alunos</h2>
    </div>

    <div
      class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Listagem dos alunos</h3>

      <p class="mt-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
        omnis atque culpa repellendus.
      </p>

      <p class="mt-8 font-bold">Acessar</p>
    </div>
  </div>
</a>
  </div>
  <div class="h-fit rounded-lg p-5">
  <a href="" class="group relative block h-fit sm:h-fit lg:h-64">

  <div
    class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 sm:h-12 sm:w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 class="mt-4 text-xl font-medium sm:text-2xl">Tutores a distância</h2>
    </div>

    <div
      class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Tutores a distância</h3>

      <p class="mt-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
        omnis atque culpa repellendus.
      </p>

      <p class="mt-8 font-bold">Acessar</p>
    </div>
  </div>
</a>
  </div>
</div>

<div className="container grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-1 mx-32 w-auto">
  <div className="h-fit rounded-lg p-5">
  <a href="" class="group relative block h-fit sm:h-fit lg:h-64">

  <div
    class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 sm:h-12 sm:w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 class="mt-4 text-xl font-medium sm:text-2xl">Exportar Notas</h2>
    </div>

    <div
      class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Exportar Notas</h3>

      <p class="mt-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
        omnis atque culpa repellendus.
      </p>

      <p class="mt-8 font-bold">Acessar</p>
    </div>
  </div>
</a>
  </div>
  <div class="h-fit rounded-lg p-5">
  <a href="" class="group relative block h-fit sm:h-fit lg:h-64">

  <div
    class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 sm:h-12 sm:w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 class="mt-4 text-xl font-medium sm:text-2xl">Listagem dos alunos</h2>
    </div>

    <div
      class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Listagem dos alunos</h3>

      <p class="mt-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
        omnis atque culpa repellendus.
      </p>

      <p class="mt-8 font-bold">Acessar</p>
    </div>
  </div>
</a>
  </div>
  <div class="h-fit rounded-lg p-5">
  <a href="" class="group relative block h-fit sm:h-fit lg:h-64">

  <div
    class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 sm:h-12 sm:w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 class="mt-4 text-xl font-medium sm:text-2xl">Tutores a distância</h2>
    </div>

    <div
      class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Tutores a distância</h3>

      <p class="mt-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
        omnis atque culpa repellendus.
      </p>

      <p class="mt-8 font-bold">Acessar</p>
    </div>
  </div>
</a>
  </div>
</div>


</main>
<Footer />
</>
  )
}


export default Index