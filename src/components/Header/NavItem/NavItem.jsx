import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavItem extends Component {
  render() {
    const { label, link } = this.props;

    return (
      <li className="nav-item">
        <Link className="nav-link" to={ link }>{ label }</Link>
      </li>
    )
  }
}

export default NavItem;