import React, { Component } from 'react';
import '../css/Bio.css';



class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <h1>About Me</h1>
        <p>I'm a 4th year Computer Engineering student at UBC, with an interest in full-stack engineering.</p>
        <p>When I'm not building apps, you can find me taking photos, playing piano/guitar, and playing Super Smash Bros.</p>
        <p>Check out my work experience and projects below.</p>
      </div>
    );
  }
}

export default Bio;