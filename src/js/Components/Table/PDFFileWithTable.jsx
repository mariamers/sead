// PDFFileWithTable.jsx

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import MOCKDATA from './MOCK_DATA.json';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
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
    backgroundColor: '#000000',
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 10,
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
    borderStyle: 'solid',
    borderColor: '#b2b2b2',
    borderWidth: 1,
    padding: 8,
  },
  tableHeader: {
    backgroundColor: 'black',
  },
});

const PDFFileWithTable = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header}>Aqui está a tabela gerada com @react-pdf/renderer</Text>

        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCell}>ID</Text>
            <Text style={styles.tableCell}>CÓDIGO</Text>
            <Text style={styles.tableCell}>DISCIPLINA</Text>
            <Text style={styles.tableCell}>EMAIL</Text>
            <Text style={styles.tableCell}>CRÉDITOS</Text>
            <Text style={styles.tableCell}>DEPARTAMENTO</Text>
          </View>

          {MOCKDATA.map((row, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{row.ID}</Text>
              <Text style={styles.tableCell}>{row.CÓDIGO}</Text>
              <Text style={styles.tableCell}>{row.DISCIPLINA}</Text>
              <Text style={styles.tableCell}>{row.EMAIL}</Text>
              <Text style={styles.tableCell}>{row.CRÉDITOS}</Text>
              <Text style={styles.tableCell}>{row.DEPARTAMENTO}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      </Page>
    </Document>
  );
};

export default PDFFileWithTable;
