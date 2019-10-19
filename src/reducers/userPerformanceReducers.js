import {Table} from "@material-ui/core";
import React from "react";

const UserPerformanceList = ({users})  => {
    console.log(users);

    return (
        <Table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map(user =>
                    <tr>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                    </tr>
            )}
            </tbody>
        </Table>
    )
}

export default UserPerformanceList;


