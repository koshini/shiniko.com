import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavTitle extends Component {
  render() {
    return (
      <h2 className="NavTitle">
        <Link to="/">{this.props.text}</Link>
      </h2>
    );
  }
}

export default NavTitle;
