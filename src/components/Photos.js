import React, { Component } from 'react';
import styled from 'styled-components';
import galleryImages from '../images';
import Photo from './Photo';

const Wrapper = styled.div`
  perspective: 1px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ParallaxGroup = styled.div`
  height: 100vh;
  width: 100vw;
  /* top: 70px; */
  max-width: 1500px;
  margin: 0 auto;
  margin-bottom: 20vmax;
  position: relative;
  display: grid;
  justify-content: center;
  transform-style: preserve-3d;
`;

class Photos extends Component {
  render() {
    return (
      <Wrapper>
        {Object.keys(galleryImages).map(group => (
          <ParallaxGroup>
            {Object.keys(galleryImages[group]).map(item => (
              <Photo
                src={galleryImages[group][item].src}
                styles={galleryImages[group][item].styles}
              />
            ))}
          </ParallaxGroup>
        ))}
      </Wrapper>
    );
  }
}

export default Photos;
