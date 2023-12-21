import React, { useMemo } from 'react';
import ExcelExport from './ExcelExport';
import MOCKDATA from './MOCK_DATA.json';

function ReactCSV() {
  const data = useMemo(() => MOCKDATA, []);

  return (
    <div className="ReactCSV">
      {/* ... (restante do código do componente ReactCSV) */}
      <ExcelExport data={data} filename="DadosSAG" />
    </div>
  );
}

export default ReactCSV;
