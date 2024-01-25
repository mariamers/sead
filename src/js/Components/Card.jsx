import { PlayCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Card ({titulo, paragrafo}) {
    const icon = (<PlayCircleIcon />)
  return (
    <div>
        <div class="h-fit rounded-lg p-5">
            <a href="" class="group relative block h-fit sm:h-fit lg:h-64">

              <div
                class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <div
                  class="p-4 !pt-0 transition-opacity flex flex-col justify-end group-hover:absolute min-h-[25vh] group-hover:opacity-0 sm:p-6 lg:p-8"
                >
                  <img src={icon} alt="icone" />

                  <h2 class="mt-4 text-xl font-medium sm:text-2xl">{titulo}</h2>
                </div>

                <div
                  class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 min-h-[250px]"
                >
                  <h3 class="mt-4 text-xl font-medium sm:text-2xl">{titulo}</h3>

                  <p class="mt-4 text-sm sm:text-base">{paragrafo ? paragrafo : "lorem ipsum dolor sit amet"}
                  </p>

                  <p class="mt-8 font-bold">Acessar</p>
                </div>
              </div>
            </a>
          </div>
    </div>
  )
}

export default Card