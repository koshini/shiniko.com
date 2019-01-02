import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Nav from './Nav';
import Intro from './Intro';
import About from './About';
import Photos from './Photos';

const theme = {
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px'
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Nav />
            <Switch>
              <Route exact path="/" component={Intro} />
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
