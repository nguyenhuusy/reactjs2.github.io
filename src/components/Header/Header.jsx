import React, { Component } from 'react';
import navItems from './data/navData';
import NavItem from './NavItem';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((navItem, idx) =>
              <NavItem
                key={ idx }
                label={ navItem.label }
                link={ navItem.url }
              />
            )}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;