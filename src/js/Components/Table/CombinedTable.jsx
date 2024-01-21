import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination } from "react-table";
import MOCKDATA from "./MOCK_DATA.json";
import { COLUMNS } from './columns'
import { GlobalFilter } from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import Checkbox from './Checkbox';

export const CombinedTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCKDATA, [])

    const defaultColumn = useMemo(
        () => ({
            Filter: ColumnFilter,
        }),
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        prepareRow,
        state,
        setGlobalFilter,
        allColumns,
        getToggleHideAllColumnsProps
    } = useTable(
        {
            columns,
            data,
            defaultColumn
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { globalFilter } = state;
    const { pageIndex } = state;

    return (
        <>
            <div id="filter-selector" className="container flex flex-col items-center">
                <div className="relative" id="DropdownButton">
                    <button className="hover:bg-gray-50 flex items-center p-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200" onClick="toggleDropdown()">
                        Selecionar colunas
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-1 
            w-4 h-4 flex items-center">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <div className="inline-flex flex-col bg-white py-1 border border-gray-300 shadow-md rounded-md absolute bg-gray-50 w-[30vh]">
                        <div>
                            <Checkbox {...getToggleHideAllColumnsProps()} />Alternar seleção
                        </div>
                        {allColumns.map(column => (
                            <div key={column.id}>
                                <label>
                                    <input type='checkbox' {...column.getToggleHiddenProps()} />
                                    {column.Header}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

                <div className="container flex justify-center min-h-[50vh]">
                    <div className="overflow-x-scroll scroll-m-1 flex-col">
                        <table {...getTableProps()} className="w-full text-sm text-left pt-6 container sm mx-auto border ">
                            <thead className="bg-principal text-white text-xs uppercase border">
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()} className=" border p-3">
                                        {headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps(column.getSortByToggleProps())} className="p-3 p-2 border max-w-[10ch] overflow-hidden text-ellipsis whitespace-nowrap border">
                                                {column.render('Header')}
                                                <span>
                                                    {column.isSorted ? (column.isSortedDesc ? ' ⇵' : ' ⇵') : ''}
                                                </span>
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()} className="p-3">
                                {page.map(row => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()} className="border">
                                            {row.cells.map((cell) => (
                                                <td className="p-2 border max-w-[10ch] overflow-hidden text-ellipsis whitespace-nowrap" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            ))}
                                        </tr>
                                    )
                                })}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div>
                    Página {'  '}
                    <strong>
                        {pageIndex + 1} de {pageOptions.length}
                    </strong> {' '}
                </div>
                <div className="flex flex-row gap-4">
                    <div>
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}> {'<<'}</button>
                        <button onClick={() => previousPage()} disabled={!canPreviousPage}>Anterior</button>
                    </div>
                    <div>
                        <button onClick={() => nextPage()} disabled={!canNextPage}>Próxima</button>
                        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}> {'>>'}</button>
                    </div>
                </div>
            </div>
        </>
    );
};
