import React, { Component } from 'react';
import '../css/Bio.css';



class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <h1>About Me</h1>
        <p>I'm a Computer Engineering senior at UBC, with an interest in full-stack engineering.</p>
        <p>Besides building apps, I enjoy snowboarding, photography, playing piano/guitar, and video games.</p>
        <p>I'm also a hackathon enthusiast with two 1st place prizes under my belt.</p>
        <p>Check out my work experience and projects below.</p>
      </div>
    );
  }
}

export default Bio;