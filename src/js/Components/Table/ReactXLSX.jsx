import React, { useMemo } from 'react';
import ExcelExport from './ExcelExport';
import MOCKDATA from './MOCK_DATA.json';

function ReactXLSX() {
  const data = useMemo(() => MOCKDATA, []);

  return (
    <div>
      <ExcelExport data={data} filename="DadosSAG" />
    </div>
  );
}

export default ReactXLSX;
