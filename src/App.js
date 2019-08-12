import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { ImplicitCallback } from '@okta/okta-react';
import SplitterLayout from 'react-splitter-layout';
import {
  CssBaseline,
  withStyles,
  Grid
} from '@material-ui/core';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import LeftNav from './components/LeftNavigation';

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
        <SplitterLayout percentage={true} primaryMinSize={25} secondaryMinSize={75}>
            <LeftNav />
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                component={Home}
            ></Grid>
        </SplitterLayout>
        <Route path="/implicit/callback" component={ImplicitCallback} />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);
