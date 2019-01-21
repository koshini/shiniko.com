import React, { Component } from 'react';
import styled from 'styled-components';

const Toggle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  margin: 28px 28px 0 0;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 999;
  pointer-events: auto;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${props => props.theme.black};
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      width: ${props => (props.isOpen ? 0 : `100%`)};
    }

    &:nth-child(2) {
      top: 6px;
      transform: ${props => (props.isOpen ? `rotate(45deg)` : 'rotate(0deg)')};
    }

    &:nth-child(3) {
      top: 6px;
      transform: ${props => (props.isOpen ? `rotate(-45deg)` : 'rotate(0deg)')};
    }

    &:nth-child(4) {
      top: 12px;
      width: ${props => (props.isOpen ? 0 : `100%`)};
    }
  }
`;

class ToggleNav extends Component {
  render() {
    return (
      <Toggle
        className="toggle"
        onClick={this.props.toggleNav}
        isOpen={this.props.isOpen}
      >
        <span />
        <span />
        <span />
        <span />
      </Toggle>
    );
  }
}

export default ToggleNav;
