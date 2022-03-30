import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './CategoryCard.scss';
import { Link } from 'react-router-dom';
export default class CategoryCard extends Component {
  render() {
    const { description, id, position, imageUrl, name, order, enabled } =
      this.props;
    console.log(this.props);
    if (!enabled) return null;
    return (
      <div
        className="categord-card"
        style={{ flexDirection: position ? 'row' : 'row-reverse' }}
      >
        <div>
          <img src={imageUrl} />
        </div>
        <div className="category-dec">
          <h1>{name}</h1>
          <p>{description}</p>
          <Link to={`/products?cat_id=${id}`}>
            <Button className="btn-primary theme-button" variant="secondary">
              {`Explore ${name}`}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
