import React, { Component } from 'react';
import '../css/ExperienceItem.css';

class ExperienceItem extends Component {
  render() {
    return (
      <div className="experience-item">
        <img className="experience-image" src={this.props.imageUrl} alt="" />
        <div className="experience-background" />
        <div className="experience-content">
          <img className="image-small" src={this.props.smallUrl} alt="" />
          <h3 className="position">{this.props.position}</h3>
          <h4 className="team">{this.props.team}</h4>
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

export default ExperienceItem;