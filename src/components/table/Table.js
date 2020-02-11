import React from 'react';
import './Table.scss';

const Table = ({ tableData, changeSortingParams, sortField, sortDirection }) => {

  if (!tableData.length) return <p>Нет данных</p>

  const tableHeaders = Object.keys(tableData[0]);

  const sortedTableContent = tableData.sort((a, b) => {
    if (sortField) {
      if (sortDirection === 'asc') {
        if (a[sortField].toUpperCase() < b[sortField].toUpperCase()) return -1
      } else {
        if (a[sortField].toUpperCase() > b[sortField].toUpperCase()) return -1
      }
    }
    return 0
  });

  return (
    <table>
      <thead>
        <tr >
          {tableHeaders.map((columnName, index) =>
            <th key={index}>
              <span onClick={changeSortingParams} value={columnName}>
                {columnName}
                {sortField === columnName && <span className={sortDirection}></span>}
              </span>
            </th>
          )}
        </tr>
      </thead>

      <tbody>
        {sortedTableContent.map((row, index) =>
          <tr key={index}>
            {Object.keys(row).map((cell, index) => <td key={index}>{row[cell]}</td>)}
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;