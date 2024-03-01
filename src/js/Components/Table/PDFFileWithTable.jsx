import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MOCK_DATA from './MOCK_DATA.json';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    flexGrow: 1,
    padding: 20, // Adiciona margens ao redor do conteúdo
  },
  table: {
    width: '100%',

  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    padding: 6,
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    fontSize: 8, // Diminui o tamanho da fonte
  },
  tableHeader: {
    backgroundColor: '#F0F0F0',
    fontWeight: 'bold',
  },
});

const MyDocument = () => (
  <Document>
    <Page style={styles.body} size="A4" orientation='landscape' wrap>
      <View style={styles.table}>
        <View style={[styles.tableHeader, styles.tableRow]}>
          <Text style={styles.tableCell}>ID</Text>
          <Text style={styles.tableCell}>ESTUDANTE</Text>
          <Text style={styles.tableCell}>CODIGO</Text>
          <Text style={styles.tableCell}>CRÉDITOS</Text>
          <Text style={styles.tableCell}>EMAIL</Text>
          <Text style={styles.tableCell}>DEPARTAMENTO</Text>
          <Text style={styles.tableCell}>GÊNERO</Text>
          <Text style={styles.tableCell}>ENDEREÇO</Text>
          <Text style={styles.tableCell}>ANIVERSÁRIO</Text>
          <Text style={styles.tableCell}>TELEFONE</Text>
          <Text style={styles.tableCell}>ANO</Text>

        </View>

        {MOCK_DATA.map((row, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{row.ID}</Text>
            <Text style={styles.tableCell}>{row.ESTUDANTE}</Text>
            <Text style={styles.tableCell}>{row.CODIGO}</Text>
            <Text style={styles.tableCell}>{row.CREDITOS}</Text>
            <Text style={styles.tableCell}>{row.EMAIL}</Text>
            <Text style={styles.tableCell}>{row.DEPARTAMENTO}</Text>
            <Text style={styles.tableCell}>{row.GENERO}</Text>
            <Text style={styles.tableCell}>{row.ENDERECO}</Text>
            <Text style={styles.tableCell}>{row.ANIVERSARIO}</Text>
            <Text style={styles.tableCell}>{row.TELEFONE}</Text>
            <Text style={styles.tableCell}>{row.ANO}</Text>


          </View>
        ))}
      </View>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </Page>
  </Document>
);

const PDFFileWithTable = () => (
  <div>
    <PDFDownloadLink document={<MyDocument />} fileName="table.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Carregando documento...' : 'Baixar PDF'
      }
    </PDFDownloadLink>
  </div>
);

export default PDFFileWithTable;
