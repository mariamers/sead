import React from 'react';
import * as XLSX from 'xlsx';
import Button from '../Button'

const ExcelExport = ({ data, filename }) => {
  const downloadExcel = () => {
    // Cria uma planilha Excel
    const ws = XLSX.utils.json_to_sheet(data);

    // Cria um livro Excel e adiciona a planilha
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'DadosSAG');

    // Salva o arquivo Excel
    XLSX.writeFile(wb, `${filename}.xlsx`);
  };

  return (
    <div onClick={downloadExcel}>
    <Button>Baixar como Excel</Button></div>
  );
};

export default ExcelExport;
