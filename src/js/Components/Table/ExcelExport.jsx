import React from 'react';
import * as XLSX from 'xlsx';

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
    <button onClick={downloadExcel} className='hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500"'>Baixar como Excel</button>
  );
};

export default ExcelExport;
