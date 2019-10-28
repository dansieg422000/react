import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { ImplicitCallback } from '@okta/okta-react';
import SplitterLayout from 'react-splitter-layout';
import { withRouter } from 'react-router-dom';
import { ReactRouter } from 'react-router';

// Component and other pages
import Home from './pages/Home';
import AppHeader from './components/AppHeader';
import LeftNav from './components/LeftNavigation';
import Registration from './components/Registration';
import Performance from './components/Performance';
import {
  CssBaseline,
  withStyles,
  Grid
} from '@material-ui/core';

const styles = (theme) => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

const displayPanel = () => {
  console.log('displayPanel');
  const homeUrl = '/homepage';
  const performanceUrl = '/performance';
  const currentRoute = window.location.pathname;
  let panel = '';

  switch (currentRoute) {
    case homeUrl:
      panel = Home;
      break
    case performanceUrl:
      panel = Performance;
      break
    default:
      panel = Registration;
      break;
}

  return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            component={panel}
        ></Grid>
    );

}

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
        <SplitterLayout percentage={true} primaryMinSize={25} secondaryMinSize={75}>
            <LeftNav />
            {displayPanel()}
        </SplitterLayout>
        <Route path="/implicit/callback" component={ImplicitCallback} />
    </main>
  </Fragment>
);

export default withRouter(withStyles(styles)(App));

// const App = ({ classes, counter, increment }) => (
//     <Fragment>
//         {counter}
//         <button onClick={increment}>increment here</button>
//     </Fragment>
// );

// function withCounter(WrappedComponent) {
//     return class WithCounter extends React.Component {
//         state = {
//             counter: 0
//         }
//
//         increment = () => {
//             this.setState(({counter}) => ({
//                 counter: counter + 1
//             }))
//         }
//
//         render() {
//             return <WrappedComponent increment={this.increment} counter={this.state.counter} {...this.props} />;
//         }
//     };
// }
// export default withCounter(App);

