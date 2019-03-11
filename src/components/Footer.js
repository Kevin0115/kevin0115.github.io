import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>Handcrafted with React</div>
        <div>Kevin Choi © {new Date().getFullYear()}</div>
      </div>
    );
  }
}

export default Footer;