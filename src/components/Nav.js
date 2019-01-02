import React, { Component } from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import NavTitle from './NavTitle';

class Nav extends Component {
  render() {
    const OuterNav = styled.div`
      position: fixed;
    `;
    return (
      <OuterNav>
        <NavMenu />
        <NavTitle text="Shini Ko" />
        <NavTitle text="contact" />
      </OuterNav>
    );
  }
}

export default Nav;
