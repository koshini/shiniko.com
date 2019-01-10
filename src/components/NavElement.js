import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavElement extends Component {
  render() {
    return (
      <Link className="nav-element" to={this.props.url}>
        {this.props.children}
      </Link>
    );
  }
}

export default NavElement;
