import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCKDATA from "./MOCK_DATA.json";
import { COLUMNS } from './columns';
import {GlobalFilter} from "./GlobalFilter";
import './table.css';
import Checkbox from './Checkbox';

const ColumnHiding = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCKDATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable({
    columns,
    data,
  });

  return (
    <>
            <div className="flex pb-4 pt-12 lg:flex-row flex-col items-center gap-4">
      <div className="relative" id="dropdownButton">
      <button className="hover:bg-gray-50 flex items-center p-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200" onClick="toggleDropdown()">
            Selecionar colunas
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-1 
            w-4 h-4 flex items-center">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

        </button>
        <div id="dropdown"  className="hidden inline-flex flex-col bg-white py-1 border border-gray-300 shadow-md rounded-md absolute bg-gray-50 w-[30vh]">
        <div>
          <Checkbox {...getToggleHideAllColumnsProps()} />
          Selecionar todos
        </div>
        {allColumns.map(column => (
          <div key={column.id} className="block w-full text-sm hover:bg-gray-100 cursor-pointer">
            <label htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                {...column.getToggleHiddenProps()}
              />
              {column.Header}
            </label>
          </div>
        ))}
      </div>
      </div>
      <div className="flex p-2 flex items-center relative"><GlobalFilter /></div>
      </div>
      <div className="container flex justify-center">
    
<div className="overflow-x-scroll scroll-m-1 flex-col">
<table {...getTableProps()} className="w-full text-sm text-left pt-6 container sm mx-auto border ">
<thead className="bg-principal text-white text-xs uppercase border border-gray-900">
    {
        headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()} className="p-3">{column.render('Header')}
                   
                    </th>

                ))}

            </tr>
        ))}
   
</thead>
<tbody {...getTableBodyProps()}  className="p-3">
    {rows.map(row => {
        prepareRow(row)
        return (
            <tr {...row.getRowProps()} className="border">
                {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}  className="p-2 border max-w-[5ch] overflow-hidden text-ellipsis whitespace-nowrap">{cell.render('Cell')}</td>
                })}
            </tr>
        )

        })}
</tbody>
</table></div>
</div>
    </>
  );
};

export default ColumnHiding;

