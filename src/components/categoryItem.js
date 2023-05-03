import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/categories.scss';

const CategoryItem = ({category}) => {
    const containerInfo = category.order%2!==0 ? 'category-container' : 'reverse-category-container';
            return (
                <div className={containerInfo}>
                <div key={category.id} className='category-image' >
                    <img src={category.imageUrl} alt={category.description} />
                </div>
                <div className='category-content'>
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                  <Link to='/products'>
                  <button className='explore-btn'>Explore {category.key}</button>
                  </Link>
                </div>
                </div>
            )
    
    
}

export default CategoryItem;
