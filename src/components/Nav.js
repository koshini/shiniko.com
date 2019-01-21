import React, { Component } from 'react';
import MobileNav from './MobileNav';
import OuterNav from './OuterNav';

class Nav extends Component {
  state = {
    showOuterNav: false
  };

  componentWillMount() {
    this.showAppropriateNav();
  }

  componentDidMount() {
    window.addEventListener('resize', this.showAppropriateNav);
  }

  showAppropriateNav = e => {
    const showOuterNav = window.innerWidth > 425 && window.innerHeight > 650;
    this.setState({ showOuterNav: showOuterNav });
  };

  render() {
    if (this.state.showOuterNav) {
      return <OuterNav />;
    } else {
      return <MobileNav />;
    }
  }
}
export default Nav;
