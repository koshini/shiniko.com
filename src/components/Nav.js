import React, { Component } from 'react';
import styled from 'styled-components';
import MobileNav from './MobileNav';
import OuterNav from './OuterNav';

class Nav extends Component {
  render() {
    if (window.innerWidth > 425 && window.innerHeight > 650) {
      return <OuterNav />;
    } else {
      return <MobileNav />;
    }
  }
}
export default Nav;
