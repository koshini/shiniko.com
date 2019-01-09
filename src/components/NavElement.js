import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavElement extends Component {
  render() {
    return (
      <h2 className="NavElement">
        <Link to="/">{this.props.text}</Link>
      </h2>
    );
  }
}

export default NavElement;
