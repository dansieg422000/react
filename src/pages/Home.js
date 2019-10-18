import {
  Typography,
} from '@material-ui/core';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Registration from "../components/Registration";

function welcomeGreetings(props) {
  return "Welcome Home! ";
}

// function guestGreeting(props) {
//   return "Welcome Guest!";
// }

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Name"
    }
  }

  render() {
    return(
        <Typography variant="display1">{welcomeGreetings() + this.state.name}</Typography>
    );
  }

}

export default withRouter(Home);

