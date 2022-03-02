import React from 'react'
import classes from './Dropdown.module.css'

const Dropdown = ({categories, handleDropdownclick}) => {
    return (
        <select className={classes.category__dropdown} onChange={handleDropdownclick }>
            <option value="Default">All</option>
            {
                categories.map(category => {
                    return (
                        category.enabled ? (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ) : null
                    )
                })
            }
        </select>
    )
}

export default Dropdown