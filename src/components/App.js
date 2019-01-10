import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Nav from './Nav';
import LandingPage from './LandingPage';
import About from './About';
import Photos from './Photos';
import Grain from './Grain';

const theme = {
  black: '#222222',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#fbf8f8',
  maxWidth: '1000px',
  padding: '32px',
  sidePadding: '100px'
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            {/* <Grain /> */}
            <Nav />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/photos" component={Photos} />
            </Switch>
          </React.Fragment>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
