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
    const { layer } = this.props.styles;

    const layerTransforms = {
      top: 'translateZ(-0.3px) scale(1)',
      middle: 'translateZ(-1px) scale(2)',
      bottom: 'translateZ(-2px) scale(3)',
      base: 'translateZ(-3px) scale(4)'
    };

    const PhotoWrapper = styled.div`
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-image: url(${`https://res.cloudinary.com/shiniko/image/upload/q_auto,w_500/v1548814919/shiniko/${
        this.props.src
      }`});
      background-repeat: no-repeat;
      padding: 100vh 0;
      min-height: 100px;
      margin: 0;
    `;

    const ParallaxPhoto__top = styled(PhotoWrapper)`
      transform: ${layerTransforms[layer]};
      background-position: center top;
      background-size: 70vmin auto;
    `;
    const ParallaxPhoto__middle = styled(PhotoWrapper)`
      @media (max-width: 425px) {
        display: none;
      }
      background-position: left center;
      transform: ${layerTransforms[layer]};
      background-size: 60vmin auto;
    `;
    const ParallaxPhoto__bottom = styled(PhotoWrapper)`
      transform: ${layerTransforms[layer]};
      background-position: right center;
      background-size: 50vmin auto;
    `;
    const ParallaxPhoto__base__even = styled(PhotoWrapper)`
      background-position: center center;
      background-size: 60vmin auto;
      transform: ${layerTransforms[layer]};
    `;

    const ParallaxPhoto__base_odd = styled(ParallaxPhoto__base__even)`
      @media (max-width: 425px) {
        display: none;
      }
      transform: translateZ(-4px) scale(3);
      background-position: right center;
    `;

    const ParallaxPhoto__base =
      this.props.group % 2
        ? ParallaxPhoto__base__even
        : ParallaxPhoto__base_odd;

    switch (layer) {
      case 'top':
        return <ParallaxPhoto__top className="top" />;
      case 'middle':
        return <ParallaxPhoto__middle className="middle" />;
      case 'bottom':
        return <ParallaxPhoto__bottom className="bottom" />;
      default:
        return <ParallaxPhoto__base className="base" />;
    }
  }
}

export default Photo;
