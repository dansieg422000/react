import React, { Component } from 'react';
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