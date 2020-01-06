const tableDataRequested = () => {
  return {
    type: 'FETCH_TABLE_DATA_REQUEST'
  }
}

const tableDataLoaded = tableData => {
  return {
    type: 'FETCH_TABLE_DATA_SUCCESS',
    payload: tableData
  }
}

const tableDataError = error => {
  return {
    type: 'FETCH_TABLE_DATA_FAILURE',
    payload: error
  }
}

export { tableDataRequested, tableDataLoaded, tableDataError };