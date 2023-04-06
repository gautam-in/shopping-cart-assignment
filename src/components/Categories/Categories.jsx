import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';

const Categories = ({ category, index }) => {
  const navigate = useNavigate();
  const { name, description, id, imageUrl, key } = category;
  return (
    <div
      key={id}
      className={index % 2 === 0 ? 'shadow row-flex' : 'shadow row-reverse'}
    >
      <img src={imageUrl} style={{ width: '200px', height: '200px' }} />
      <div className='title-desc'>
        <h4 className='title'>{name}</h4>
        <div>{description}</div>
        <button
          className='button-text'
          onClick={() => navigate('/products', { state: { category: id } })}
        >
          Explore {key}
        </button>
      </div>
    </div>
  );
};

export default Categories;
