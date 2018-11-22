import React, { Component } from 'react';
import '../css/ProjectItem.css';

export default class ProjectItem extends Component {
  render() {
    return (
      <div className="project-item">
        <a
          className="project-image"
          href={this.props.externalUrl}
        >
          <img src={this.props.imageUrl} alt={this.props.itemName}/>
        </a>
        <div className="desc-tools">  
          <p className="project-desc">
            {this.props.description}
          </p>
          <div className="project-tools">
            {this.props.tools.map((item) => {
              return (
                <p>{item}</p>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}