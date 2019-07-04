import React from "react";
import { connect } from 'react-redux';
import { hideEdit, editRecord } from "./actions/action";

class Edit extends React.Component {
    constructor() {
        super();
        this.onEdit = this.onEdit.bind(this);
    }

    onEdit(e) {
        var editedValues = {
            id: this.props.editRecord.id,
            name: (document.getElementById("name").value !== "" ? document.getElementById("name").value : this.props.editRecord.name),
            email: (document.getElementById("email").value !== "" ? document.getElementById("email").value : this.props.editRecord.email),
            phone: (document.getElementById("phone").value !== "" ? document.getElementById("phone").value : this.props.editRecord.phone),
            company: { name: (document.getElementById("company").value !== "" ? document.getElementById("company").value : this.props.editRecord.company.name) }
        };
        this.props.editRecordList(editedValues);
    }

    render() {
        const { editRecord, edit, hideEdit } = this.props;
        return (
            <React.Fragment>
                {edit ?
                    <React.Fragment>
                        <h1>Edit Record</h1>
                        <table id="Records">
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Company</th>
                                </tr>
                                <tr>
                                    <td>Current Value</td>
                                    <td>{editRecord.id}</td>
                                    <td>{editRecord.name}</td>
                                    <td>{editRecord.email}</td>
                                    <td>{editRecord.phone}</td>
                                    <td>{editRecord.company.name}</td>
                                </tr>
                                <tr>
                                    <td>New Value</td>
                                    <td>{editRecord.id}</td>
                                    <td><input id="name" value={this.value}></input></td>
                                    <td><input id="email" value={this.value}></input></td>
                                    <td><input id="phone" value={this.value}></input></td>
                                    <td><input id="company" value={this.value}></input></td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="editButton" onClick={() => { this.onEdit(); hideEdit() }}>Done</button>
                    </React.Fragment>
                    : ""}
            </React.Fragment>
        );
    }
};

const mapStateToProps = function (state) {
    return {
        edit: state.edit
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        hideEdit: () => dispatch(hideEdit()),
        editRecordList: (data) => dispatch(editRecord(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);