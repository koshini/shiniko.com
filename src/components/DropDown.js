import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.lightgrey};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? `visible` : `hidden`)};
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  font-size: 8vw;
  line-height: 2;
  text-transform: uppercase;
`;

const List = styled.ul``;

const ListItem = styled.li``;

const NavElement = ({ className, children, url }) => (
  <NavLink className={className} to={url} activeStyle={{}}>
    <div>{children}</div>
  </NavLink>
);

class DropDown extends Component {
  render() {
    return (
      <Nav isOpen={this.props.isOpen}>
        <List>
          <ListItem>
            <NavElement url="/">Home</NavElement>
          </ListItem>
          <ListItem>
            <NavElement url="/about">About</NavElement>
          </ListItem>
          <ListItem>
            <NavElement url="/projects">Projects</NavElement>
          </ListItem>
          <SocialIcons />
        </List>
      </Nav>
    );
  }
}

export default DropDown;
