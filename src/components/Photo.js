import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Photo extends Component {
  static propTypes = {
    group: PropTypes.number,
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
      width: 50%; */
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-image: url(${this.props.src});
      /* background-size: ${width} auto; */
      background-repeat: no-repeat;
      padding: 100vh 0;
      min-height: 100px;
      margin: 0;
    `;

    const ParallaxPhoto__top = styled(PhotoWrapper)`
      /* border-color: black;qq
      border-style: solid; */
      transform: ${layerTransforms[layer]};
      background-position: center top;
      /* top: -10%; */
      background-size: 70vh auto;
      /* left: auto; */
    `;
    const ParallaxPhoto__middle = styled(PhotoWrapper)`
      background-position: left center;
      transform: ${layerTransforms[layer]};
      background-size: 60vh auto;
      /* bottom: -20%; */
    `;
    const ParallaxPhoto__bottom = styled(PhotoWrapper)`
      transform: ${layerTransforms[layer]};
      background-position: right center;
      /* right: -10%; */
      /* bottom: -60%; */
      background-size: 50vh auto;
    `;
    const ParallaxPhoto__base__even = styled(PhotoWrapper)`
      /* border-color: red;
      border-style: solid; */
      /* bottom: 0; */
      /* right: 0; */
      /* left: auto; */
      /* top: auto; */
      background-position: center center;
      background-size: 60vh auto;
      transform: ${layerTransforms[layer]};
    `;

    const ParallaxPhoto__base_odd = styled(ParallaxPhoto__base__even)`
      transform: translateZ(-4px) scale(3);
      background-position: right center;
    `;

    const ParallaxPhoto__base =
      this.props.group % 2
        ? ParallaxPhoto__base__even
        : ParallaxPhoto__base_odd;

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