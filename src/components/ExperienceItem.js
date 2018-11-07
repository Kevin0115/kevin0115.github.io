import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/ExperienceItem.css';

export default class ExperienceItem extends Component {
  render() {
    return (
      <div className="experience-item">
        <img src={this.props.imageUrl} alt={this.props.company} />
        <div className="exp-item-pos-date">
          <p id="position">{this.props.position}</p>
          <p id="date">{this.props.date}</p>
        </div>
        <ul className="desc-list">
          {this.renderDescription()}
        </ul>
      </div>
    );
  }

  renderDescription() {
    return this.props.description.map((item) => {
      return (
        <li key={item} className="desc-item">{item}</li>
      )
    });
  }
}

ExperienceItem.propTypes = {
  company: PropTypes.string,
  position: PropTypes.string,
  date: PropTypes.string,
  imageUrl: PropTypes.string
};