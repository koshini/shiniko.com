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
  width: calc(100% - 2 * 10vw);
  position: relative;
  margin: 0 auto;
  top: 70px;
  height: 200vh;
  transform-style: preserve-3d;
`;

const TextContainer = styled.div`
  position: relative;
  height: 100%;
  max-width: calc(100% - 2 * 12vw);
  width: auto;
  margin: 0 auto;
  top: 50vh;
  z-index: 10;

  ul {
    padding: 0;
    margin: 0 auto;

    li {
      height: 250vh;
      text-align: left;
      font-size: 3.6vmin;
      list-style: none;

      > span {
        padding: 0.2em;
        color: ${props => props.theme.offWhite};
        background-color: ${props => props.theme.black};
      }
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
            <li>
              <span>You crave change.</span>
            </li>
            <li>
              <span>You travel.</span>
            </li>
            <li>
              <span>You move.</span>
            </li>
            <li>
              <span>This is new, you say.</span>
            </li>
            <li>
              <span>
                Weeks turn into months, <br />
                turn into routines, <br />
                turn into same old cycles.
              </span>
            </li>
            <li>
              <span>
                No matter where you go, <br />
                there is one thing that sticks with you - your mind.
              </span>
            </li>
            <li>
              <span>
                If you truly want change, <br />
                you have to change how you think.
              </span>
            </li>
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
