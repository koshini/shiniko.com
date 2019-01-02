import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="intro-title">Welcome to my digital journal</h1>
        <p className="intro">
          I yearn for beauty in all forms. I want to blend art, maths and
          engineering together to break any stereotypical boundary. I hope you
          find your inspirational sparks among my collection of creations and
          musings here.
        </p>
      </React.Fragment>
    );
  }
}

export default Intro;
