import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Photo extends Component {
  static propTypes = {
    src: PropTypes.string,
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
      middle: 'translateZ(-1px) scale(2)',
      bottom: 'translateZ(-2px) scale(3)',
      base: 'translateZ(-3px) scale(4)'
    };

    const PhotoWrapper = styled.div`
      /* height: 50%;
      width: 100%; */
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-image: url(${this.props.src});
      background-size: ${width} auto;
      background-position: ${position};
      background-repeat: no-repeat;
      padding: 100vh 0;
      min-height: 100px;
      margin: 0;
    `;

    const ParallaxPhoto__top = styled(PhotoWrapper)`
      border-color: black;
      border-style: solid;
      transform: ${layerTransforms[layer]};
      /* top: -10%; */
      /* background-size: 70vh auto; */
      /* left: auto; */
    `;
    const ParallaxPhoto__middle = styled(PhotoWrapper)`
      transform: ${layerTransforms[layer]};
      /* background-size: 40vh auto; */
      /* bottom: -20%; */
    `;
    const ParallaxPhoto__bottom = styled(PhotoWrapper)`
      transform: ${layerTransforms[layer]};
      /* right: -10%; */
      /* bottom: -60%; */
      /* background-size: 50vh auto; */
    `;
    const ParallaxPhoto__base = styled(PhotoWrapper)`
      border-color: red;
      border-style: solid;
      /* bottom: 0; */
      /* right: 0; */
      /* left: auto; */
      /* top: auto; */
      transform: ${layerTransforms[layer]};
    `;

    switch (layer) {
      case 'top':
        return <ParallaxPhoto__top />;
      case 'middle':
        return <ParallaxPhoto__middle />;
      case 'bottom':
        return <ParallaxPhoto__bottom />;
      default:
        return <ParallaxPhoto__base />;
    }
  }
}

export default Photo;
