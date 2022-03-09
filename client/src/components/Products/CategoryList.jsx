import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

function CategoryList() {
    const { categories } = useSelector(({ home }) => home);

    const [toggleValue, setToggleValue] = useState(false);
    const [currentCategory, setCurrentcategory] = useState('');

    const dropdownMenu = useRef();
    const history = useHistory();

    useEffect(() => {
        const categoryId = history.location.pathname.trim().split("/")[2];
        if (categoryId === 'all') setCurrentcategory('All');
        else {
            const category = categories.filter((category) => category.id === categoryId);
            if (category.length > 0) {
                setCurrentcategory(category[0].name);
            }
        }
    }, [])

    function toggleDropDown() {
        setToggleValue(!toggleValue)
        dropdownMenu.current.style = toggleValue ? 'display:flex' : 'display:none';
    }

    function handleNavigation(categoryId) {
        toggleDropDown()
        // dropdownMenu.current.style = 'display:none';
        history.push(`/category/${categoryId}`)
    }

    return (
        <Fragment>
            <div className="products-category">
                <div className="category-list">
                    {categories.map((category) => (
                        <Link key={category.id} className="category-name" to={`/category/${category.id}`}>
                            <span key={category.key}>{category.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="products-category-dropdown">
                <div className='dropdown'>
                    <div className='dropdown-header' onClick={() => toggleDropDown()}>
                        <p>{currentCategory}</p>
                        <span> <i className="arrow down"></i></span>
                    </div>
                    <div ref={dropdownMenu} className='dropdown-links'>
                        {categories.map((category) => (
                            <a key={category.key} href="" onClick={() => handleNavigation(category.id, category.name)}>{category.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CategoryList;

