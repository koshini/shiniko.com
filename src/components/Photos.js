import React, { Component } from 'react';
import styled from 'styled-components';
import galleryImages from '../images';
import Photo from './Photo';

const Wrapper = styled.div`
  perspective: 1px;
  overflow-x: hidden;
  overflow-y: auto;
  transform-style: preserve-3d;
  height: 100vh;
`;

const ParallaxGroup = styled.div`
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

const TextContainer = styled.div`
  position: relative;
  max-width: 980px;
  margin: 0 auto;
  top: 50vh;
  z-index: 10;

  ul {
    position: absolute;
    width: 100%;
    margin: 0;

    li {
      color: ${props => props.theme.offwhite};
      /* background-color: ${props => props.theme.black}; */
      height: 300vh;
      text-align: left;
      font-size: 50px;
      position: relative;
      list-style: none;
    }
  }
`;

class Photos extends Component {
  render() {
    return (
      <Wrapper>
        <TextContainer>
          <ul>
            <li>There is nothing that brings me more joy than creating.</li>
            <li>
              I yearn for beauty in all forms; I want to blend art, engineering
              together to break any stereotypical boundary.
            </li>
            <li>
              My creative outlets include coding, film photography, painting and
              so on.
            </li>
            <li>
              I believe that the notion of creativity extends beyond creating
              art, and can be expressed through programming and problem solving.
            </li>
            <li>
              This website is not a portfolio or blog. It is a space where I
              share some of my creations and ideas.
            </li>
            <li>Enjoy :)</li>
          </ul>
        </TextContainer>
        {Object.keys(galleryImages).map(group => (
          <ParallaxGroup className="parallax-group">
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
