import React from 'react'

export const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <div className='text-sm p-2 '>
Pesquisar: {' '}
<input value={filter || ''}
onChange={(e) => setFilter(e.target.value)} 
type='search'
className="px-4 py-1 text-gray-800 text-sm border rounded-full focus:outline-none shadow-md hover:scale-105 transition ease-in-out delay-150 duration-100"
                placeholder="escreva aqui" x-model="search"
/>
        </div>
    )
}