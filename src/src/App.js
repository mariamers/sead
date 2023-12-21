import React from 'react'
import './App.css'

import { ColumnHiding } from './components/ColumnHiding'

import { PDFDownloadLink } from "@react-pdf/renderer";
import { GlobalFilter} from "./components/GlobalFilter"
import PDFFileWithTable from './components/PDFFileWithTable';
import ReactCSV from './components/ReactCSV';


function App() {
    return (
        <div className='App'>
            <GlobalFilter />
            <ColumnHiding />
          <PDFDownloadLink document={<PDFFileWithTable />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink>

        
        
           <ReactCSV />
          
            
        </div>
    )
}

export default App