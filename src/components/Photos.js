import React, { Component } from 'react';
import styled from 'styled-components';
import galleryImages from '../images';
import Photo from './Photo';

const Wrapper = styled.div`
  position: relative;
  perspective: 1px;
  overflow-x: hidden;
  overflow-y: auto;
  transform-style: preserve-3d;
  height: 100vh;
`;

const ParallaxGroup = styled.div`
  max-width: 1800px;
  width: calc(100% - 2 * 100px);
  position: relative;
  margin: 0 auto;
  top: 70px;
  height: 200vh;
  margin-bottom: 100px;
  transform-style: preserve-3d;
`;

const TextContainer = styled.div`
  position: relative;
  height: 100%;
  width: calc(100% - 2 * 100px);
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  top: 50vh;
  z-index: 10;

  ul {
    position: absolute;
    width: 100%;
    padding: 0;
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
  state = {
    height: 0
  };

  handleScroll = e => {
    const children = e.target.childNodes;
    var height = 0;
    children.forEach(child => {
      height = child.offsetHeight + height;
    });

    if (e.target.scrollTop >= height + 1000) {
      this.props.toggleBottomVisibility(true);
    } else {
      this.props.toggleBottomVisibility(false);
    }
  };

  render() {
    return (
      <Wrapper className="photo-gallery" onScroll={this.handleScroll}>
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
