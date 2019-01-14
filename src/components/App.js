import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Nav from './Nav';
import LandingPage from './LandingPage';
import About from './About';
import Photos from './Photos';
import Grain from './Grain';

const theme = {
  black: '#1e1e1e',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#fbf8f8',
  maxWidth: '1000px',
  padding: '32px',
  sidePadding: '100px'
};

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
    @import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700|Ubuntu+Condensed|Ubuntu+Mono');
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.8;
    /* font-family: 'Ubuntu', sans-serif; */
    /* font-family: 'Ubuntu Mono', monospace; */
    font-family: 'Ubuntu', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyles />
            {/* <Grain /> */}
            <Nav />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/photos" component={Photos} />
            </Switch>
            {/* </GlobalStyles> */}
          </React.Fragment>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
