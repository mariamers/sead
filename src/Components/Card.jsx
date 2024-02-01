import { ArrowDownCircleIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Card ({titulo, paragrafo, icon}) {

  return (
    <div>
        <div className="h-fit rounded-lg p-5">
            <a href="" className="group relative block h-fit sm:h-fit lg:h-64">

              <div
                className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <div
                  className="p-4 !pt-0 transition-opacity flex flex-col justify-end items-start group-hover:absolute min-h-[25vh] group-hover:opacity-0 sm:p-6 lg:p-8"
                >
                  {icon}

                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">{titulo ? titulo : "indefinido"}</h2>
                </div>

                <div
                  className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 min-h-[250px]"
                >
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">{titulo}</h3>

                  <p className="mt-4 text-sm sm:text-base">{paragrafo ? paragrafo : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugiat."}
                  </p>
                  <p className="mt-8 font-bold">Acessar</p>
                </div>
              </div>
            </a>
          </div>
    </div>
  )
}

export default Card