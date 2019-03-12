import React, { Component } from 'react';
import '../css/ExperienceItem.css';

import Facebook from '../assets/images/facebook.png';

class ExperienceItem extends Component {
  render() {
    return (
      <div className="experience-item">
        <img className="experience-image" src={this.props.imageUrl} />
        <div className="experience-background" />
        <div className="experience-content">
          <img className="image-small" src={this.props.smallUrl} />
          <h3 className="position">{this.props.position}</h3>
          <p className="date">{this.props.date}</p>
          <ul>{this.renderDescription()}</ul>
        </div>
      </div>
    );
  }

  renderDescription() {
    return this.props.description.map((item) => {
      return (
        <li key={item} className="description">{item}</li>
      )
    });
  }
}

ExperienceItem.defaultProps = {
  company: 'Company Name',
  position: 'Position Name',
  date: 'September 2018 - December 2018',
  imageUrl: Facebook,
  description: [
    'Provided weekly individual guidance and instruction regarding course material during office hours',
    'Facilitated weekly lab sessions by assisting students with C++ programming and theory assignments',
    'Evaluated student examinations and theory assignments by developing own grading rubric utilizing Gradescope'
  ],
}

export default ExperienceItem;