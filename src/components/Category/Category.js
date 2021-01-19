import React from 'react';
import './Category.scss';
import PinkButton from '../Buttons/PinkButton';
import * as Constants from '../../global-constants';

export default function Category(props) {

    const handleClick = () => {

    }
    return (
      <div className="category">
        {props.imgAlign === Constants.Left && (
          <img
            src={`public${props.category.imageUrl}`}
            alt={props.category.name}
            className="category-img"
          />
        )}
        <div className="category-dec">
          <h3>{props.category.name}</h3>
          <p>{props.category.description}</p>
          <PinkButton text={'Explore ' + props.category.key} handleClick={handleClick} />
        </div>
        {props.imgAlign === Constants.Right &&
        <img src={Constants.UrlPublic + props.category.imageUrl}
          alt={props.category.name}
          className="category-img"
        />
          }
      </div>
    );
}
