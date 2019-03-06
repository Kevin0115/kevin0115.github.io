import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/LinkItem.css';

export default class LinkItem extends Component {
  render() {
    return (
      <div className="link-item" title={this.props.itemName}>
        <a
          rel="noopener"
          className="link-item-title"
          href={this.props.externalUrl}
          target="_blank"
        >
          <img src={this.props.imageUrl} alt={this.props.itemName}/>
        </a>
      </div>
    );
  }
}

LinkItem.propTypes = {
  itemName: PropTypes.string,
  externalUrl: PropTypes.string,
  imageUrl: PropTypes.string
};