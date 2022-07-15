import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/cart/cart.actions';
import './CategoryDropDown.scss'

const CategoryDropDown = ({ catData = [], ...props }) => {

    const dispatch = useDispatch();
    const { categoryId } = useSelector(store => store.cart)
    let [selectedCat, setSelectedCat] = useState(categoryId);

    useEffect(() => {
        setSelectedCat(categoryId)
    }, [categoryId])

    const onCategoryChange = ({ target: { value } }) => {
        dispatch(setCategory(value));
    }

    return (
        <select name="category_menu" className='category-ddl' value={selectedCat} onChange={(e) => onCategoryChange(e)}>
            {catData.map(category => {
                return (
                    <option key={category._id} value={category._id}>{category.name}</option>
                )
            })}
        </select>
    )
}

export default CategoryDropDown;