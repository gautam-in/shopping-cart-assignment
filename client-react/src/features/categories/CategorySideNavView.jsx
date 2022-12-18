import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import './CategorySideNav.scss'

export const CategorySideNavView = (props) => {
  const { categoryList, onCategoryClick } = props;

  return (
    <ListGroup className='side-nav'>
      {categoryList.map((category) => <ListGroup.Item key={category.id.toString()} to={`/products/${category.id}`} onClick={() => onCategoryClick(category.id)}>
        {category.name}
      </ListGroup.Item>
      )}
    </ListGroup>
  )
}