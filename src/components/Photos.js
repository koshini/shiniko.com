import React, { Component } from 'react';
import styled from 'styled-components';
import galleryImages from '../images';
import Photo from './Photo';

const Wrapper = styled.div`
  perspective: 1px;
  overflow-x: hidden;
  overflow-y: auto;
  transform-style: preserve-3d;
  /* this is important */
  height: 100vh;
`;

const ParallaxGroup = styled.div`
  /* height: 200vh;
  width: 100vw;
  top: 70px;
  max-width: 1500px;
  margin: 0 auto;
  margin-bottom: 20vmax;
  position: relative;
  display: grid;
  justify-content: center;
  transform-style: preserve-3d; */
  position: relative;
  max-width: 1800px;
  width: calc(100% - 100px);
  margin: 0 auto;
  top: 70px;
  height: 200vh;
  margin-bottom: 100px;
  transform-style: preserve-3d;
  margin: 0 auto;
`;

class Photos extends Component {
  render() {
    return (
      <Wrapper>
        {Object.keys(galleryImages).map(group => (
          <ParallaxGroup>
            {Object.keys(galleryImages[group]).map(item => (
              <Photo
                group={group}
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
