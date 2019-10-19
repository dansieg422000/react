import React, { Component } from 'react';
import {Grid, Table} from "@material-ui/core";
import Container from "reactstrap/es/Container";
import UserPerformanceReducers from "../reducers/userPerformanceReducers";
import userPerformances from '../state/userPerformance';

const performance = () => {
    return (
        <Container>
            <UserPerformanceReducers users={userPerformances} />


        </Container>

    );
}

export default (performance);