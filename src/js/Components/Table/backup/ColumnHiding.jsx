import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCKDATA from "./MOCK_DATA.json";
import { COLUMNS } from './columns'
export const ColumnHiding = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCKDATA, [])


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        nextPage,
        previousPage,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps
    } = useTable({
        columns,
        data,
    },
        usePagination
    )



    return (
        <>
            <div className="container flex gap-3 ml-24 mb-8 flex-row flex-wrap">
                Filtrar:
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
            <div className="lg:w-max mx-32 w-64 overflow-scroll">
                <table {...getTableProps()} className=" pt-6 container sm mx-auto table-auto">

                    <thead className="bg-principal text-secundaria">
                        {
                            headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()} className="p-10">
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}

                                        </th>

                                    ))}

                                </tr>
                            ))}

                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} className="p-5">
                                    {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )

                        })}
                    </tbody>
                </table>
            </div>
        </>

    )
}

