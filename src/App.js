import React, { Component } from 'react'
import { connect } from 'react-redux';
import TableRow from "./TableRow";
import Edit from "./Edit";
import SearchRecord from "./Search";
import { fetchRecordList, editClicked } from "./actions/action";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editRecord: {}
    }
    this.onEdit = this.onEdit.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(function (response) {
      return response.json();
    }).then((result) => {
      this.props.fetchRecordList(result);
    }).catch((err) => {
      console.log("error");
    });
  }

  onEdit(record) {
    this.props.editClicked();
    this.setState({ editRecord: record });
  }

  render() {
    const { recordList } = this.props;
    return (
      <React.Fragment>

        <div className="header">
          <h1>MY RECORDS</h1>
        </div>
        <div className="spacer24"></div>

        <table id="Records">
          <tbody>
            <TableRow records={recordList} onEdit={this.onEdit} />
          </tbody>
        </table>

        <div className="spacer24"></div>
        <Edit editRecord={this.state.editRecord} />

        <div className="spacer24"></div>
        <SearchRecord records={recordList} />

      </React.Fragment>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    recordList: state.recordList
  }
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchRecordList: (payload) => dispatch(fetchRecordList(payload)),
    editClicked: () => dispatch(editClicked())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
