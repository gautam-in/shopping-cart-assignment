import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Category.css';

import { useDispatch, useSelector } from 'react-redux';
import { categoryList } from '../actions/category.action';

const Category = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category)
   
    useEffect(() => {
        dispatch(categoryList())
    }, [dispatch])
    return (
        <>
            {
                categories && categories.map((cate) => (
                    <div key={cate.id} className={`categoryGroup ${cate.order % 2 === 0 ? `reverseOrder` : ``}`}>
                        <div className='categoryImage'>
                            <img src={cate.imageUrl} alt={cate.name} />
                        </div>
                        <div className='categoryDesc'>
                            <h3>{cate.name}</h3>
                            <p>{cate.description}</p>
                            <Link to={`/products/${cate.id}`}>
                                <button>{`Explore ${cate.key}`}</button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}


export default Category;