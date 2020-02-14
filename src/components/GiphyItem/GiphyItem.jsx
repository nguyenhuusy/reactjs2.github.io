import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GiphyItem.scss';

class GiphyItem extends Component {
  render() {
    const { id, img, title } = this.props;
    const url = '/giphy-detail/' + id;

    return (
      <Link to={ url } className="giphy-item">
        <div className="giphy-item__image">
          <img src={ img } alt={ title } />
        </div>
        <span className="giphy-item__title">{ title }</span>
      </Link>
    )
  }
}

export default GiphyItem;