import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
    {
        Header: 'Id',
        accessor:'ID',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Estudante',
        accessor: 'ESTUDANTE',
        Filter: ColumnFilter
    },
    {
        Header: 'Código',
        accessor: 'CODIGO',
        Filter: ColumnFilter
    },
    {
        Header: 'Créditos',
        accessor: 'CREDITOS',
        Filter: ColumnFilter
    },
    {
        Header: 'Email',
        accessor: 'EMAIL',
        Filter: ColumnFilter
    },
    {
        Header: 'Departamento',
        accessor:'DEPARTAMENTO',
        Filter: ColumnFilter
    },

    {
        Header: 'Gênero',
        accessor:'GENERO',
        Filter: ColumnFilter
    },

    {
        Header: 'Endereço',
        accessor:'ENDERECO',
        Filter: ColumnFilter
    },

    {
        Header: 'Aniversário',
        accessor:'ANIVERSARIO',
        Filter: ColumnFilter
    },

    {
        Header: 'Telefone',
        accessor:'TELEFONE',
        Filter: ColumnFilter
    },

    {
        Header: 'Ano',
        accessor:'ANO',
        Filter: ColumnFilter
    }
]