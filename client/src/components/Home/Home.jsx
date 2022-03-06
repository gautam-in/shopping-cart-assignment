import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './home.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/home/home.action';

function Home() {

    const { categories } = useSelector(({ home }) => home);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <div className="container">
            <div className="categories">
                <div className="category banner">
                    <img src="static/images/offers/offer1.jpg" alt="" />
                </div>

                {
                    categories.map((category, index) => (
                        (index + 1) % 2 === 0 ? (
                            // TODO: move this to seprate component
                            <Fragment key={category.key}>
                                <div className="category">
                                    <img src={category.imageUrl} alt={category.name} />
                                    <div className="category--info">
                                        <span className="category--info--main-header">{category.name}</span>
                                        <span className="category--info--description">{category.description}</span>
                                        <Link to={`category/${category.id}`}>
                                            <button className="btn">Explore {category.name}</button>
                                        </Link>
                                    </div>
                                </div>
                            </Fragment>
                        )
                            :
                            <Fragment key={category.key}>
                                <div className="category">
                                    <div className="category--info">
                                        <div className="category--info">
                                            <span className="category--info--main-header">{category.name}</span>
                                            <span className="category--info--description">{category.description}</span>
                                            <Link to={`category/${category.id}`}>
                                                <button className="btn">Explore {category.name}</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <img src={category.imageUrl} alt={category.name} />
                                </div>
                            </Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default withRouter(Home);

