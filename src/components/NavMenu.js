import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavTopRight = styled.div`
  position: absolute;
  display: flex;
  right: 0;
`;

const Menu = styled.ul`
  display: inline-flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-left: 3vw;
`;

class NavMenu extends Component {
  render() {
    return (
      <NavTopRight className="NavTopRight">
        <Menu className="Manu">
          <MenuItem className="MenuItem">
            <NavLink activeClass="selected" to="/about">
              About
            </NavLink>
          </MenuItem>
          <MenuItem className="MenuItem">
            <NavLink activeClass="selected" to="/photos">
              Photos
            </NavLink>
          </MenuItem>
        </Menu>
      </NavTopRight>
    );
  }
}

export default NavMenu;
