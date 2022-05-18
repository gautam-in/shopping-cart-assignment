import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './CategoryItem.scss';

const CategoryItem = ({item}) => {

return (
    <div className='categoryCard'>
        <div className='categoryCardImageContainer'>
            <img src={item.imageUrl} className = 'categoryCardImage' />
        </div>
        <div className='categoryCardInfo'>
            <p className='categoryCardName'>{item.name}</p>
            <p className='categoryCardDescription'>{item.description}</p>
            <Button>
            <Link to={`/products/${item.id}`} style={{textDecoration:'none', color:'white'}}>
            {'Explore ' + item.key}
            </Link>
            </Button>
        </div>
    </div>
)

}

export default CategoryItem;