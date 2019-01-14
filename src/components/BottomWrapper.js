import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  opacity: ${props => (props.visible ? 1 : 0)};
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: #e98074;
  z-index: -1;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 2s ease-out;

  * {
    width: calc(100% - 2 * 100px);
    max-width: ${props => props.theme.maxWidth};
  }
`;

class BottomWrapper extends Component {
  render() {
    return (
      <Wrapper className="bottom-wrapper" visible={this.props.visibility}>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default BottomWrapper;
