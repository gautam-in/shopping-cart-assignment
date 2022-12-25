import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Category.scss'

export const CategoryMenu = (props) => {
    const { categoryList, handleSelect, selectedCategory } = props;

    return (
        <DropdownButton
            title={Object.keys(selectedCategory).length === 0 ? 'Select' : selectedCategory.name}
            id="category-menu"
            className="d-flex d-md-none"
        >
            {categoryList.map(category => <span key={category.id.toString()}>
                {
                    category.enabled ? (
                        <NavLink
                            
                            to={`/products/${category.id}`}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        >
                            
                            <Dropdown.Item eventKey={category.name} onClick={() => handleSelect(category)}>{category.name}</Dropdown.Item>
                        </NavLink>
                    )
                        : ''
                }
            </span>)}
        </DropdownButton>
    )
}