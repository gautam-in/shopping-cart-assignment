import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card';

import { fetchCategoryList } from './CategorySlice'
import './Category.scss'

export const CategoryView = () => {
    const BASE_URL = "http://127.0.0.1:5502";
    const category = useSelector(state => state.category)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategoryList())
    }, [])

    const onOptionSelect = selected => {
        // dispatch(filterCategory(selected))
    };
    return (
        <section className='banner-wrapper'>
            {category.loading && <div>Loading...</div>}
            {!category.loading && category.error ? <div>Error: {category.error}</div> : null}
            {!category.loading && category.categoryList.length ? (

                <div className='category-list'>
                    {
                        category.categoryList.map((ele, index) => (
                            <>
                                {ele.enabled ?
                                    <Card>
                                        <Card.Img src={ele.imageUrl ? BASE_URL + ele.imageUrl : ''} alt={ele.name} width="100%" />
                                        <Card.Body>
                                            <Card.Title>{ele.name}</Card.Title>
                                            <Card.Text>
                                                {ele.description}
                                            </Card.Text>
                                            <button className='category-btn' onClick={() => onOptionSelect(ele.id)}>Explore {ele.key}</button>
                                        </Card.Body>
                                    </Card>
                                    : ""}
                            </>
                        ))
                    }
                </div>

            ) : null}
        </section>
    )
}
