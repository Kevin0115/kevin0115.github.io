import React, { Component } from 'react';
import '../css/NavBar.css';

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

  renderNavBar() {
    return nav.map((item) => {
      return (
        <div className="nav-item">
          <a
            className="nav-link"
            key={item.section}
            href={item.section}
          >
            {item.label}
          </a>
        </div>
      )
    });
  }
}

export default NavBar;