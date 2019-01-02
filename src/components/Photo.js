import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Photo extends Component {
  static propTypes = {
    image: PropTypes.string,
    styles: PropTypes.shape({
      position: PropTypes.string,
      width: PropTypes.string,
      layer: PropTypes.string,
      containerWidth: PropTypes.string,
      containerHeight: PropTypes.string,
      xOffset: PropTypes.number
    })
  };

  render() {
    const {
      position,
      width,
      layer,
      containerHeight,
      containerWidth,
      xOffset
    } = this.props.styles;

    const layerTransforms = {
      top: 'translateZ(-0.3px) scale(1)',
      middle: 'translateZ(-1px) scale(1.5)',
      bottom: 'translateZ(-2px) scale(2)',
      base: 'translateZ(-3px) scale(3)'
    };

    const PhotoWrapper = styled.div`
      height: 100vh;
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: -1;
      background-image: url(${this.props.image});
      background-size: ${width} auto;
      background-position: ${position};
      background-repeat: no-repeat;
      padding: ${containerHeight} 0;
      border-color: black;
      border-style: solid;
      /* transform: translateX(${xOffset}%); */
      transform: ${layerTransforms[layer]};
    `;

    return <PhotoWrapper />;
  }
}

export default Photo;
