import React, { Component } from 'react';
// import './css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Intro from './Intro';
import About from './About';
import Photos from './Photos';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/about" component={About} />
            <Route exact path="/photos" component={Photos} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
