import React, { useState, useEffect } from 'react';

import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { listCategoryDetails } from '../../redux/category/category.actions';
import { useDispatch } from 'react-redux';

import './CategoryList.scss';

const CategoryList = () => {

    const dispatch = useDispatch();


    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {

            let { status, data } = await dispatch(listCategoryDetails());
            if (status) {
                setCategories([...data])
            }
        }
        getCategories()



    }, [])



    return (<>

        {categories.map((d, i) => <CategoryCard  {...d} catKey={d.key} reverse={!!(i % 2 === 0)} />)}
    </>)
};

export default CategoryList;
