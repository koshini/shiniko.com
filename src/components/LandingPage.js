import React, { Component } from 'react';
import styled from 'styled-components';
import Photos from './Photos';
import BottomWrapper from './BottomWrapper';

class LandingPage extends Component {
  state = {
    showBottom: false
  };

  toggleBottomVisibility = bottomVisibility => {
    this.setState({ showBottom: bottomVisibility });
  };
  render() {
    return (
      <React.Fragment>
        <Photos toggleBottomVisibility={this.toggleBottomVisibility} />
        <BottomWrapper visibility={this.state.showBottom}>
          <p>
            Hey, this is Shini Ko. I'm a graduating Applied Maths and Computer
            Engineering student based in Ontario, Canada. Currently, I'm
            developing my skills to be a full stack web developer with a focus
            on the front end.
          </p>
        </BottomWrapper>
      </React.Fragment>
    );
  }
}

export default LandingPage;
