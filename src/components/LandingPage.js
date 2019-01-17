import React, { Component } from 'react';
import styled from 'styled-components';
import Photos from './Photos';
import BottomWrapper from './BottomWrapper';
import ContentWrapper from './styles/ContentWrapper';

const Strong = styled.strong`
  font-size: 2em;
  font-weight: 700;
  -webkit-text-stroke: 0.03em ${props => props.theme.black};
  color: transparent;
`;

class LandingPage extends Component {
  state = {
    showBottom: false,
    bottomSendToBack: true
  };

  toggleBottomVisibility = bottomVisibility => {
    this.setState({ showBottom: bottomVisibility });
  };

  render() {
    return (
      <React.Fragment>
        <Photos toggleBottomVisibility={this.toggleBottomVisibility} />
        <BottomWrapper visibility={this.state.showBottom}>
          <ContentWrapper className="intro">
            <p>
              <Strong>Hey, this is Shini Ko, </Strong>
              <br />a software developer, art lover, and travel freak. I'm
              fueled by my desire to create. I believe that the notion of
              creativity extends beyond creating art, and can be expressed
              through programming and problem solving. When I'm not coding, I
              enjoy sketching, painting, film photography and building all sorts
              of things.
            </p>
            <p>
              This is my digital sketchbook. Here you can find a collection of
              my creations and musings.
            </p>
          </ContentWrapper>
        </BottomWrapper>
      </React.Fragment>
    );
  }
}

export default LandingPage;
