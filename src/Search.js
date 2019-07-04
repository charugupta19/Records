import React from "react";
import { connect } from 'react-redux';
import { showSearchResult, setSearchResult } from "./actions/action";

class SearchRecord extends React.Component {
    constructor() {
        super();
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch() {
        const { showSearchResult, records, setSearchResult } = this.props;
        if (document.getElementById("record-search-by-id").value !== "") {
            showSearchResult();
            let enteredId = document.getElementById("record-search-by-id").value;
            let SearchedItems = records.filter(function (item) {
                return (item.id == enteredId);
            });
            setSearchResult(SearchedItems);
        }
    }
    render() {
        const { searchResult, searchList } = this.props;
        return (
            <React.Fragment>
                <label className="searchLabel" htmlFor="record-search-by-id">Search the Record By Id:</label>
                <input className="searchInput" type="search" id="record-search-by-id" placeholder="Please enter Id" />
                <button className="searchButton" onClick={() => this.handleSearch()}>Search</button>

                {searchResult ?
                    <table id="Records">
                        <tbody>
                            <tr>
                                <td>{searchList[0].name}</td>
                                <td>{searchList[0].email}</td>
                                <td>{searchList[0].phone}</td>
                                <td>{searchList[0].company.name}</td>
                            </tr>
                        </tbody>
                    </table>
                    : ""}
            </React.Fragment>
        );
    }
};

const mapStateToProps = function (state) {
    return {
        searchResult: state.searchResult,
        searchList: state.searchList
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        showSearchResult: () => dispatch(showSearchResult()),
        setSearchResult: (data) => dispatch(setSearchResult(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchRecord);