import React, { Component } from 'react';
import '../css/SkillItem.css';

export default class SkillItem extends Component {
  render() {
    return (
      <div className="skill-item">
        <div className="skill-layer">
          {this.props.layer}
        </div>
        <div className="skill-list">
          {this.renderSkillList()}
        </div>
      </div>
    );
  }

  renderSkillList() {
    return this.props.skill.map((item) => {
      return (
        <div className="specific-skill">{item}</div>
      )
    });
  }
}