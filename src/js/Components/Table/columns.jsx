import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
    {
        Header: 'Id',
        accessor:'ID',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Disciplina',
        accessor: 'DISCIPLINA',
        Filter: ColumnFilter
    },
    {
        Header: 'Código',
        accessor: 'CÓDIGO',
        Filter: ColumnFilter
    },
    {
        Header: 'Créditos',
        accessor: 'CRÉDITOS',
        Filter: ColumnFilter
    },
    {
        Header: 'Carga Horária',
        accessor: 'EMAIL',
        Filter: ColumnFilter
    },
    {
        Header: 'Departamento',
        accessor:'DEPARTAMENTO',
        Filter: ColumnFilter
    }
]