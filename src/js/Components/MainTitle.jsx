import React from 'react'


function MainTitle ({H1, children}) {
  return (
    <div className="bg-white shadow-md w-full">
    <div className="py-6 flex items-center justify-center w-10/12 align-middle m-auto gap-5">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 w-full">{H1}</h1>
      {children}
    </div>
  </div>
  )
}

export default MainTitle