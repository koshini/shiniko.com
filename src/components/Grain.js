import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const grainAmination = keyframes`
  0% {
    transform: translate(-5%, -5%);
  }

  100% {
    transform: translate(-8% -8%);
  }
`;

const GrainPattern = styled.div`
  background-image: url('/assets/grain.png');
  position: fixed;
  pointer-events: none;
  height: 150%;
  width: 150%;
  opacity: 50%;
  animation: ${grainAmination} 0.5s steps(4) infinite;
  z-index: 50;
  pointer-events: none;
`;

class Grain extends Component {
  render() {
    return <GrainPattern />;
  }
}

export default Grain;
