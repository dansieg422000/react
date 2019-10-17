import React, { Component } from 'react';
import '../css/LeftNavigation.css';
import ListItem from '@material-ui/core/ListItem';
import { withRouter } from 'react-router-dom';
import Registration from './Registration';
import {
    CssBaseline,
    withStyles,
    Grid
} from '@material-ui/core';
import Home from "../pages/Home";

function SubLinks()  {
    const childLinks = ['Link 1', 'Link 2', 'Link 3'];
    const subLinks = childLinks.map((link) =>
        <ListItem key={link.toString()}
            value={link}/>
    );

    return (
        <ul className="Links">
            {subLinks}
        </ul>
    );
}

class LeftNavigation extends Component{

    // noinspection JSAnnotator
    constructor(props) {
        super(props);
        this.state = {
            home: 'Home',
            performance: 'Performance',
            register: 'Register'
        }
    }

    homeOnClick = () => {
        console.log("Home Navigation");
        this.props.history.push('/homepage');

    }

    performanceOnclik = () => {
        console.log("Link 1");
        this.props.history.push('/performance');
    }

    registerOnClick = () => {
        console.log("Register");
        this.props.history.push('/register');
        //return (<Registration/>);
    }

    render() {
        return (
            <div>
                <div onClick={this.homeOnClick} className="LeftNavigation">{this.state.home}</div>
                <div onClick={this.performanceOnclik} className="LeftNavigation">{this.state.performance}</div>
                <div onClick={this.registerOnClick} className="LeftNavigation">{this.state.register}</div>
                <div>
                    {SubLinks}
                </div>
            </div>
        );
    }
}

export default withRouter(LeftNavigation);