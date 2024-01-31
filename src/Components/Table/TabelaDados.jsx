// TabelaDados.jsx
import React from 'react';

const TabelaDados = ({ dados }) => {
    console.log('Dados da Tabela:', dados);

  return (
    <table>
      <thead>
        <tr>
        <th>ID</th>
          <th>CÓDIGO</th>
          <th>DISCIPLINA</th>
          <th>EMAIL</th>
          <th>CRÉDITOS</th>
          <th>DEPARTAMENTO</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
           <td>{item.ID}</td>
            <td>{item.CÓDIGO}</td>
            <td>{item.DISCIPLINA}</td>
            <td>{item.EMAIL}</td>
            <td>{item.CRÉDITOS}</td>
            <td>{item.DEPARTAMENTO}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaDados;
