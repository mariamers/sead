import React, { useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import MOCKDATA from "./MOCK_DATA.json";
import { COLUMNS } from './columns'

const PaginationTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCKDATA, []);
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      canPreviousPage,
      previousPage,
      canNextPage,
      nextPage,
      pageOptions,
      gotoPage,
      pageCount,
      setPageSize,
      state,
      prepareRow,
    } = useTable(
      {
        columns,
        data,
      },
      usePagination
    );
  
    const { pageIndex, pageSize } = state;
  
    return (
      <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Prev
          </button>
          <span>
            Page {pageIndex + 1} of {pageOptions.length}
          </span>
          <span>&nbsp;| Go to page: </span>
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pageNumber);
            }}
          />
          <select
            value={pageSize}
            onChange={e => setPageSize(Number(e.target.value))}>
            {[10, 25, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize} pages
              </option>
            ))}
          </select>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>
        </div>
      </>
    );
  };
  
  export default PaginationTable;