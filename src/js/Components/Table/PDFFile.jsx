import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import LebronStretch from "../photos/ufpb.png";
import {Font} from '@react-pdf/renderer';
import  TabelaDados  from "./TabelaDados";
import  MOCKDATA  from "./MOCK_DATA.json"

const styles = StyleSheet.create({
  body: {
   backgroundColor: 'white',
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  table: {
    backgroundColor: 'white',
    display: 'table',
    width: 'auto',
   
    borderRightWidth: 0,
    borderBottomWidth: 0,
    margin: 'auto',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
   width: 70,
    borderWidth: 1,
    padding: 8,
    textAlign: 'center'
  },
  tableHeader: {
    backgroundColor: 'white',
  },
});

const PDFFile = () => {

  const pageColors = ['#f6d186', '#f67280', '#c06c84'];

  const dadosTabela = [
    { ID: 1, CÓDIGO: 'Georgena', DISCIPLINA: 'Duke', EMAIL: 'gduke0@uol.com.br', CRÉDITOS: 'Female', DEPARTAMENTO: null },
    // Adicione mais dados se necessário
  ];

  const pages = [
    
    {text: 'First page content goes here...', image: LebronStretch },
    {text: 'Second page content goes here...', image: 'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcwMzExMzEwNTc0MTAxODM5/lebron-dunk.jpg' },
    {text: 'Third page content goes here...', image: 'https://s.yimg.com/ny/api/res/1.2/Aj5UoHHKnNOpdwE6Zz9GIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/b02a71d0-a774-11ed-bf7f-08714e8ad300' },
  ]

  return (
    <Document>
      {pages.map((page, index) => {
        return (
          <Page key={index} style={{...styles.body, backgroundColor: pageColors[index]}}>
          <Text style={styles.header} fixed></Text>
          <Image style={styles.image} src={page.image} />
          <Text style={styles.text}>
          {page.text}
         Aqui estão os dados da tabela:
          </Text>
          <TabelaDados dados={dadosTabela} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </Page>
        )
      })}

    </Document>
  );
};

export default PDFFile;