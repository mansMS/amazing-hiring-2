import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTableData } from '../reducers/tableData';
import Table from '../components/table';
import Spinner from '../components/spinner';

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.changeSortingParams = this.changeSortingParams.bind(this);

    this.state = {
      sortField: '',
      sortDirection: ''
    }
  }

  componentDidMount() {
    this.props.setTableData();
    if (!localStorage["AmazingHiringTable"]) {
      localStorage.setItem("AmazingHiringTable", JSON.stringify({ sortField: '', sortDirection: '' }));
    }
    this.setState({
      sortField: JSON.parse(localStorage["AmazingHiringTable"]).sortField,
      sortDirection: JSON.parse(localStorage["AmazingHiringTable"]).sortDirection
    })
  }

  changeSortingParams(e) {
    if (!this.state.sortDirection
      || this.state.sortDirection === 'desc'
      || this.state.sortField !== e.currentTarget.getAttribute('value')) {
      this.setState({ sortDirection: 'asc' });
      localStorage["AmazingHiringTable"] =
        JSON.stringify({ sortField: e.currentTarget.getAttribute('value'), sortDirection: 'asc' });
    } else {
      this.setState({ sortDirection: 'desc' })
      localStorage["AmazingHiringTable"] =
        JSON.stringify({ sortField: e.currentTarget.getAttribute('value'), sortDirection: 'desc' });
    }
    this.setState({ sortField: e.currentTarget.getAttribute('value') });
  }

  render() {
    if (this.props.loading) return <Spinner />
    return (
      <Table
        tableData={this.props.tableData}
        changeSortingParams={this.changeSortingParams}
        sortField={this.state.sortField}
        sortDirection={this.state.sortDirection}
      />
    )

  }
}

const mapStateToProps = ({ tableData: { tableData, loading, error } }) => {
  return { tableData, loading, error }
}

export default connect(mapStateToProps, { setTableData })(TableContainer);