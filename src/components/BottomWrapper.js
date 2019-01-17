import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  opacity: ${props => (props.visible ? 1 : 0)};
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.salmon};
  z-index: -1;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 2s ease-out;
`;

class BottomWrapper extends Component {
  handleScroll = e => {
    console.log('scrolling');
  };
  render() {
    return (
      <Wrapper
        onScroll={this.handleScroll}
        className="bottom-wrapper"
        visible={this.props.visibility}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

export default BottomWrapper;
