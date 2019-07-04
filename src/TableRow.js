import React from "react";


class TableRow extends React.Component {

    render() {
        const { records, onEdit } = this.props;
        return (
            <React.Fragment>
                <tr key="heading">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Company</th>
                    <th>Edit</th>
                </tr>

                {/* ---Display all the records--- */}
                {records && records.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.company.name}</td>
                            <td><a href="javascript:void(0)" onClick={() => onEdit(item)}>edit</a></td>
                        </tr>
                    );
                })
                }
            </React.Fragment>
        );
    }
};

export default TableRow;