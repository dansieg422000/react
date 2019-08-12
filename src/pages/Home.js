import {
  Typography,
} from '@material-ui/core';
import React, { Component } from 'react';

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

export default (Home);

