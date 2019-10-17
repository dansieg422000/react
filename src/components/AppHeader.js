import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

import LoginButton from './LoginButton';

// eslint-disable-next-line
let login = new LoginButton();

// console.log(login);


const styles = {
  flex: {
    flex: 1,
      },
};

const AppHeader = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
      </Typography>
        <div className={classes.flex} />
        <LoginButton />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);
