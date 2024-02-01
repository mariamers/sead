import React, { useMemo, useState } from "react";
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination } from "react-table";
import MOCKDATA from "./MOCK_DATA.json";
import { COLUMNS } from './columns'
import { GlobalFilter } from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import Checkbox from './Checkbox';
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Button from '../Button';

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
    const [isOpen, SetIsOpen] = useState(false)

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 pt-6">
                <div className="relative" id="DropdownButton">
                    <div className="pr-2 " onClick={() => SetIsOpen((prev) => !prev)}>
                    <Button>
                        Selecionar colunas
                        {!isOpen ? (
                            <ChevronDownIcon className="h-4" />) : (
                            <ChevronUpIcon className="h-4" />
                        )}
                   </Button></div>
                    {isOpen && (

                        <div className="inline-flex flex-col absolute text-sm bg-white border border-gray-300 shadow-md rounded-md  
                            w-full gap-1 py-2">
                            <div className="gap-2 flex flex-row cursor-pointer select-none hover:bg-gray-100 py-1 px-4" >
                                <Checkbox {...getToggleHideAllColumnsProps()} />
                            </div>
                            {allColumns.map(column => (
                                <div key={column.id}>
                                    <label className="flex flex-row gap-2 cursor-pointer select-none hover:bg-gray-100 py-1 px-4">
                                        <input type='checkbox' {...column.getToggleHiddenProps()} />
                                        {column.Header}
                                    </label>
                                </div>
                            ))}
                        </div>

                    )}

                </div>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div>
            <div className="w-full flex justify-center min-h-[50vh]">
                <div className="overflow-x-scroll scroll-m-1 flex-col rounded-2xl shadow-md ">
                    <table {...getTableProps()} className="w-full text-left pt-6 container sm mx-auto border ">
                        <thead className="bg-principal text-white border ">
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()} className=" select-none border p-3">
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())} className="p-4 font-medium text-base max-w-[10ch] overflow-hidden whitespace-nowrap border">
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? '⇵ ' : '⇅ ') : ''}
                                            </span>
                                            {column.render('Header')}

                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()} className="p-3 text-sm">
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
            <div className="flex flex-col items-center justify-center">
                <div>
                    Página {'  '}
                    <strong>
                        {pageIndex + 1} de {pageOptions.length}
                    </strong> {' '}
                </div>
                <div className="flex flex-row gap-6">
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
