import React, { Component } from 'react';
import {Grid, Table} from "@material-ui/core";
import Container from "reactstrap/es/Container";
import UserPerformanceReducers from "../reducers/userPerformanceReducers";

const performance = () => {
    return (
        <Container>
            <Table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                    <UserPerformanceReducers/>

                </tbody>
            </Table>

        </Container>

    );



}

export default (performance);