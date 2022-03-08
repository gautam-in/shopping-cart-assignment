import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CategoryList() {
    const { categories } = useSelector(({ home }) => home);

    return (
        <Fragment>
            <div class="products-category">
                <div class="category-list">
                    {categories.map((category) => (
                        <Link class="category-name" to={`/category/${category.id}`}>
                            <span key={category.key}>{category.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
            {/* 
            <div className="products-category-dropdown">

            </div> */}
        </Fragment>
    )
}

export default CategoryList;

