import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import NavElement from './NavElement';

const OuterNav = styled.div`
  padding: 48px 56px;
  position: fixed;
  z-index: 999;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  /* background-color: aquamarine; */
  /* opacity: 0.5; */
  box-sizing: border-box;
  > * {
    pointer-events: auto;
    position: relative;
  }
`;

const OuterNavTop = styled.div`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  /* background-color: burlywood; */
`;

const OuterNavBottom = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  /* background-color: burlywood; */
`;

const NavLink = ({ className, children }) => (
  <Link to="/" className={className}>
    {children}
  </Link>
);

const AboutTag = styled(NavLink)`
  position: absolute;
  right: 0;
`;

const NameTag = styled(NavLink)`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: rotate(-90deg);
  transform-origin: bottom left;
`;

const ContactTag = styled(NavLink)`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: rotate(90deg);
  transform-origin: top right;
`;

class Nav extends Component {
  render() {
    return (
      <OuterNav>
        <OuterNavTop>
          {/* rotate these vertical */}
          <NavLink>Projects</NavLink>
          <AboutTag>About</AboutTag>
        </OuterNavTop>
        <OuterNavBottom>
          <NameTag className="NameTag">Shini Ko</NameTag>
          <ContactTag className="ContactTag">Contact</ContactTag>
        </OuterNavBottom>
      </OuterNav>
    );
  }
}
export default Nav;
