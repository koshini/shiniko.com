import React, { Component } from 'react';
import styled from 'styled-components';
import galleryImages from '../images';
import Photo from './Photo';

const ParallaxGroup = styled.div`
  height: 100vh;
  width: 100%;
  top: 0;
  margin: 0 auto;
  position: relative;
  display: grid;
  justify-content: center;
  perspective: 1px;
  transform-style: preserve-3d;
  overflow-x: hidden;
  overflow-y: auto;
`;

class Photos extends Component {
  render() {
    return (
      <ParallaxGroup>
        {Object.keys(galleryImages).map(key => (
          <Photo
            image={galleryImages[key].image}
            styles={galleryImages[key].styles}
          />
        ))}
      </ParallaxGroup>
    );
  }
}

export default Photos;
