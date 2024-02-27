// PDFFileWithTable.js

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import MOCKDATA from './MOCK_DATA.json';

const styles = StyleSheet.create({
  table: {
    width: '100%',
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    borderTop: '1px solid #00000',
    paddingTop: 8,
    paddingBottom: 8,
  },
  tableHeader: {
    borderTop: 'none',
  },

  
});

const PDFFileWithTable = () => {
  return (
    <Document>
      <Page style={styles.body} size="A4" orientation='landscape' wrap={false}>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCell}>ID</Text>
            <Text style={styles.tableCell}>ESTUDANTE</Text>
            <Text style={styles.tableCell}>CODIGO</Text>
            <Text style={styles.tableCell}>CRÉDITOS</Text>
            <Text style={styles.tableCell}>EMAIL</Text>
            <Text style={styles.tableCell}>ANIVERSÁRIO</Text>
            <Text style={styles.tableCell}>DEPARTAMENTO</Text>
          </View>

          {MOCKDATA.map((row, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{row.ID}</Text>
              <Text style={styles.tableCell}>{row.ESTUDANTE}</Text>
              <Text style={styles.tableCell}>{row.CODIGO}</Text>
              <Text style={styles.tableCell}>{row.CREDITOS}</Text>
              <Text style={styles.tableCell}>{row.EMAIL}</Text>
              <Text style={styles.tableCell}>{row.ANIVERSARIO}</Text>
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
