import React from 'react'

export const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <span>
Pesquisar: {' '}
<input value={filter || ''}
onChange={(e) => setFilter(e.target.value)} 
type='search'
class="px-4 py-1 text-gray-800 border rounded-full focus:outline-none"
                placeholder="escreva aqui" x-model="search"
/>
        </span>
    )
}