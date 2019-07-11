import React, { Component } from 'react';
import '../css/NavBar.css';

import { NAV_TO } from '../Const';
import { postSession } from '../Utils';

const nav = [
  {
    section: '#skills',
    label: 'Skills',
  },
  {
    section: '#experience',
    label: 'Experience',
  },
  {
    section: '#projects',
    label: 'Projects',
  },
  // {
  //   section: '#photography',
  //   label: 'Photography',
  // }
];

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        {this.renderNavBar()}
      </div>
    );
  }

  handleNavTo(section) {
    postSession(NAV_TO + '=' + section);
  }

  renderNavBar() {
    return nav.map((item) => {
      return (
        <div className="nav-item" key={item.section}>
          <a
            className="nav-link"
            href={item.section}
            onClick={() => this.handleNavTo(item.label)}
          >
            {item.label}
          </a>
        </div>
      )
    });
  }
}

export default NavBar;