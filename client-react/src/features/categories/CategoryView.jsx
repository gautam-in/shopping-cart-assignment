import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

import { fetchCategoryList } from './CategorySlice';

import './Category.scss'

export const CategoryView = () => {
    const category = useSelector(state => state.category)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCategoryList())
    }, [])

    const onCategorySelect = selectedCategoryId => {
        navigate('/products', { state: { selectedCategoryId: selectedCategoryId } })
    };

    return (
        <>
            {category.loading && <div>Loading...</div>}
            {!category.loading && category.error ? <div>Error: {category.error}</div> : null}
            {!category.loading && category.categoryList.length ? (

                <div className='category-list mb-64'>
                    {
                        category.categoryList.map((ele, index) => (
                            <span key={index}>
                                {ele.enabled ?
                                <>
                                    <Card>
                                        <Card.Img src={ele.imageUrl ? process.env.REACT_APP_BASE_URL + ele.imageUrl : ''} alt={ele.name} width="100%" />
                                        <Card.Body>
                                            <Card.Title>{ele.name}</Card.Title>
                                            <Card.Text>
                                                {ele.description}
                                            </Card.Text>
                                            <button className='category-btn' onClick={() => onCategorySelect(ele.id)}>Explore {ele.key}</button>
                                        </Card.Body>
                                    </Card>
                                    {category.categoryList.length -1 !== index ? <div className='seperator-img'></div> : ''}
                                </>
                                    : ""}
                            </span>
                        ))
                    }
                </div>

            ) : null}
        </>
    )
}
