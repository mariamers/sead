import React, { useMemo, useState } from "react";
import {
    useTable,
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
} from "react-table";
import MOCKDATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { GlobalFilter } from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import Checkbox from "./Checkbox";
import {
    ChevronDownIcon,
    ChevronUpDownIcon,
    ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Button from "../Button";
import Tips from "../Tips";

const CombinedTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCKDATA, []);

    const defaultColumn = useMemo(
        () => ({
            Filter: ColumnFilter,
            sortType: (rowA, rowB, columnId) => {
                if (
                    isNaN(rowA.values[columnId]) &&
                    isNaN(rowB.values[columnId])
                ) {
                    return rowA.values[columnId].localeCompare(
                        rowB.values[columnId]
                    );
                }
                return rowA.values[columnId] - rowB.values[columnId];
            },
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
        gotoPage,
        pageCount,
        prepareRow,
        state,
        setGlobalFilter,
        allColumns,
        getToggleHideAllColumnsProps,
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { globalFilter } = state;
    const [isOpen, setIsOpen] = useState(false);
    const [extraTags, setExtraTags] = useState("");

    const toggleExtraTags = () => {
        setExtraTags(extraTags ? "" : "max-w-[50ch]");
    };

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 pt-6">
                <div className="relative" id="DropdownButton">
                    <div
                        className="pr-2"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <Button>
                            Selecionar colunas
                            {!isOpen ? (
                                <ChevronDownIcon className="h-4" />
                            ) : (
                                <ChevronUpIcon className="h-4" />
                            )}
                        </Button>
                    </div>
                    {isOpen && (
                        <div className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                            <div className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">
                                <Checkbox {...getToggleHideAllColumnsProps()} />
                            </div>
                            {allColumns.map((column) => (
                                <div key={column.id}>
                                    <label className="flex flex-row gap-2 px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">
                                        <input
                                            type="checkbox"
                                            {...column.getToggleHiddenProps()}
                                        />
                                        {column.Header}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <GlobalFilter
                    filter={globalFilter}
                    setFilter={setGlobalFilter}
                />
                <div>
                    <Tips />
                </div>
            </div>

            <div className="w-full flex justify-center min-h-[30vh]">
                <div className="overflow-x-scroll scroll-m-1 flex-col rounded-2xl shadow-md w-full">
                    <table
                        {...getTableProps()}
                        className="w-full text-left pt-6 container sm mx-auto border "
                    >
                        <thead
                            className="bg-principal text-white border cursor-pointer"
                            onClick={toggleExtraTags}
                        >
                            {headerGroups.map((headerGroup) => (
                                <tr
                                    {...headerGroup.getHeaderGroupProps()}
                                    className="select-none border p-3"
                                >
                                    {headerGroup.headers.map((column) => (
                                        <th
                                            className={`p-4 font-medium text-base overflow-hidden whitespace-nowrap border ${
                                                extraTags
                                                    ? extraTags
                                                    : "max-w-[10ch]"
                                            }`}
                                        >
                                            <div className="flex items-center justify-start">
                                                <div
                                                    className={`flex items-center ${extraTags}`}
                                                    key={column.id}
                                                    {...column.getHeaderProps(
                                                        column.getSortByToggleProps()
                                                    )}
                                                >
                                                    <button
                                                        onClick={() =>
                                                            column.toggleSort()
                                                        }
                                                        className="focus:outline-none"
                                                    >
                                                        {column.isSorted ? (
                                                            column.isSortedDesc ? (
                                                                <ChevronDownIcon className="h-3" />
                                                            ) : (
                                                                <ChevronUpIcon className="h-3" />
                                                            )
                                                        ) : (
                                                            <span className="opacity-1">
                                                                <ChevronUpDownIcon className="h-4" />
                                                            </span>
                                                        )}
                                                    </button>
                                                </div>
                                                <span>
                                                    {column.render("Header")}
                                                </span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>

                        <tbody {...getTableBodyProps()} className="p-3 text-sm">
                            {page.map((row) => {
                                prepareRow(row);
                                return (
                                    <tr
                                        {...row.getRowProps()}
                                        className="border"
                                    >
                                        {row.cells.map((cell) => (
                                            <td
                                                className={`p-2 border overflow-hidden text-ellipsis whitespace-nowrap ${
                                                    extraTags
                                                        ? extraTags
                                                        : "max-w-[10ch]"
                                                }`}
                                                {...cell.getCellProps()}
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row gap-6">
                    <div>
                        <button
                            onClick={() => gotoPage(0)}
                            disabled={!canPreviousPage}
                            className="cursor-pointer rounded-full border-2 flex items-center justify-center w-10 h-10 text-gray-600 transition-colors duration-150 focus:shadow-outline hover:bg-gray-100"
                        >
                            <svg
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        <button
                            onClick={() => previousPage()}
                            disabled={!canPreviousPage}
                        ></button>
                    </div>
                    <button
                        className="w-10 h-10 text-gray-600 transition-colors duration-150 rounded-full border-2 focus:shadow-outline focus:bg-secundaria  hover:bg-gray-100"
                        button
                        onClick={() => gotoPage(0)}
                    >
                        {1}
                    </button>
                    <button
                        className="w-10 h-10 text-gray-600 transition-colors duration-150 rounded-full border-2 focus:shadow-outline focus:bg-secundaria hover:bg-gray-100"
                        button
                        onClick={() => gotoPage(1)}
                    >
                        {2}
                    </button>
                    <div>
                        <button
                            onClick={() => nextPage()}
                            disabled={!canNextPage}
                            className="cursor-pointer border-2 flex items-center justify-center w-10 h-10 text-gray-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-gray-100"
                        >
                            <svg
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        <button
                            onClick={() => gotoPage(pageCount - 1)}
                            disabled={!canNextPage}
                        ></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CombinedTable;
