import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavMenu extends Component {
  render() {
    return (
      <nav className="outernav">
        <ul>
          <li>
            <NavLink activeClass="selected" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClass="selected" to="/photos">
              Photos
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavMenu;
