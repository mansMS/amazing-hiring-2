import { getTableData } from '../services/tableDataService';
import { tableDataRequested, tableDataLoaded, tableDataError } from '../actions';

const initialState = {
  tableData: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TABLE_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'FETCH_TABLE_DATA_SUCCESS':
      return {
        ...state,
        tableData: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_TABLE_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export const setTableData = () => dispatch => {
  dispatch(tableDataRequested());
  getTableData()
    .then(response => dispatch(tableDataLoaded(response)))
    .catch(error => dispatch(tableDataError(error.message)))
}