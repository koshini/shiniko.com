import React, { Component } from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import ToggleNav from './ToggleNav';

const DropDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  /* opacitsy: 0; */
  /* visibility: hidden; */

  @media (min-width: 426px) {
    display: none;
  }

  @media (min-height: 651px) {
    display: none;
  }
`;

const List = styled.ul``;

const ListItem = styled.li``;

class MobileNav extends Component {
  state = {
    open: false
  };

  handleClick = e => {
    this.setState({ open: !this.state.open });
    console.log(this.state.open);
  };

  render() {
    return (
      <React.Fragment>
        <ToggleNav
          className="toggle"
          onClick={this.handleClick}
          isOpen={this.state.open}
        >
          <span />
          <span />
          <span />
          <span />
        </ToggleNav>
        <DropDown>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Projects</ListItem>
            <Contact>Contact</Contact>
          </List>
        </DropDown>
      </React.Fragment>
    );
  }
}

export default MobileNav;
