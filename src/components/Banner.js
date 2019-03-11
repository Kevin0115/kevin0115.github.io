import React, { Component } from 'react';
import '../css/Banner.css';

import TypeWriter from './TypeWriter';
import Links from './Links';
import Portrait from '../assets/images/portrait.JPG';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextLine: false
    };
    this.signalTextFinish = this.signalTextFinish.bind(this);
  }

  signalTextFinish() {
    console.log('First Line Finished');
    this.setState({nextLine: true});
  }

  render() {
    return (
      <div className="banner">
        <div className="image-links">
          <img className="portrait" src={Portrait} alt="portrait" />
          <Links />
        </div>
        <div className="typed-text">
          <TypeWriter
            text="Kevin Choi"
            onFinish={this.signalTextFinish}
            isFirst={true}
          />
          {
            this.state.nextLine ?
            <TypeWriter text="Software Engineer"/>
            :
            <div className="space-holder" />
          }
        </div>
        <div className="description">
          
        </div>
      </div>
    );
  }
}

export default Banner;