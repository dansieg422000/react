import React, { Component } from 'react';
import '../css/LeftNavigation.css';
import ListItem from '@material-ui/core/ListItem';


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
            link1: 'Link'
        }
    }

    homeOnClick = () => {
        console.log("Home Navigation");
    }

    link1Onclik = () => {
        console.log("Link 1");
    }

    render() {
        return (
            <div>
                <div onClick={this.homeOnClick} className="LeftNavigation">{this.state.home}</div>
                <div onClick={this.link1Onclik} className="LeftNavigation">{this.state.link1}</div>
                <div>
                    {SubLinks}
                </div>
            </div>
        );
    }
}

export default (LeftNavigation);