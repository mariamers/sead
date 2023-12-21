import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCKDATA from "./MOCK_DATA.json";
import { COLUMNS } from './columns'
import{ Checkbox } from './Checkbox';
import { GlobalFilter } from "./GlobalFilter";
export const ColumnHiding = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCKDATA, [])

    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps
    } = useTable({
        columns,
        data,
    },
    )



return (
    <>
    <main className="flex flex-col">
    <div className="container flex gap-3 ml-24 mt-8 flex-row flex-wrap">
        <div>
            <h3>Filtrar: </h3>
        </div>
        {
            allColumns.map(column => (
                <div key={column.id}>
                    <label>
                        <input type='checkbox' {...column.getToggleHiddenProps()} />
                        {column.Header}
                    </label>
                   
                    </div>
            ))
        }
   </div>
<div className="container mx-24">
<span className="float-end pb-4"><GlobalFilter /></span>
<table {...getTableProps()} className="w-full text-sm text-left pt-6 container sm mx-auto border">
<thead className="bg-principal text-secundaria text-xs uppercase border border-gray-900">
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
                    return <td {...cell.getCellProps()}  className="p-2 border">{cell.render('Cell')}</td>
                })}
            </tr>
        )

        })}
</tbody>
</table>
</div>
</main>
</>

)
}