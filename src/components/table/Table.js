import React from 'react';
import './Table.scss';

const Table = ({ tableData, changeSortingParams, sortField, sortDirection }) => {

  if (!tableData.length) return <p>Нет данных</p>

  return (
    <table>
      <thead>
        <tr onClick={changeSortingParams}>
          {Object.keys(tableData[0]).map((columnName, index) =>
            <th key={index} value={columnName}>
              {columnName}
              {sortField === columnName && <span className={sortDirection}></span>}
            </th>
          )}
        </tr>
      </thead>

      <tbody>
        {tableData.sort((a, b) => {
          if (sortDirection === 'asc') {
            if (a[sortField] < b[sortField]) return -1
          } else {
            if (a[sortField] > b[sortField]) return -1
          }
          return 0
        }).map((row, index) =>
          <tr key={index}>
            {Object.keys(row).map((cell, index) => <td key={index}>{row[cell]}</td>)}
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;