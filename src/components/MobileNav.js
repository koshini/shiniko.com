import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ToggleNav from './ToggleNav';
import DropDown from './DropDown';

class MobileNav extends Component {
  state = {
    open: false
  };

  handleClick = e => {
    this.setState({ open: !this.state.open });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({ open: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <ToggleNav toggleNav={this.handleClick} isOpen={this.state.open}>
          <span />
          <span />
          <span />
          <span />
        </ToggleNav>
        <DropDown isOpen={this.state.open} />
      </React.Fragment>
    );
  }
}

export default withRouter(MobileNav);
