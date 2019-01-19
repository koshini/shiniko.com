import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Nav from './Nav';
import LandingPage from './LandingPage';
import About from './About';
import Photos from './Photos';
import Projects from './Projects';
import Now from './Now';

const theme = {
  black: '#1e1e1e',
  grey: '#3A3A3A',
  lightgrey: '#BAB2B5',
  offWhite: '#fbf8f8',
  flesh: '#F4DDD4',
  mint: '#D1E8E2',
  salmon: '#EF9E8C',
  forestGreen: '#376E6F',
  maxWidth: '1200px',
  sidePadding: '100px',
  mobileBreakpoint: '425px'
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
    /* font-family: 'Ubuntu Mono', monospace; */
    font-family: 'Ubuntu', sans-serif;
    letter-spacing: 0.1em;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
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
              <Route path="/about/now" component={Now} />
              <Route exact path="/photos" component={Photos} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
            {/* </GlobalStyles> */}
          </React.Fragment>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
