import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './home.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/home/home.action';
// import Banner from './Banner/Banner';

function Home() {

    // const { categories } = useSelector(({ home }) => home);
    const categories = [];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <p>Hello</p>
        // <div className="container">
        //     <div className="categories">
        //         {/* <Banner /> */}
        //         {
        //             categories.map((category, index) => (
        //                 (index + 1) % 2 === 0 ? (
        //                     // TODO: move this to seprate component
        //                     <Fragment key={category.key}>
        //                         <div className="category">
        //                             <div className='category-image'>
        //                                 <img src={category.imageUrl} alt={category.name} />
        //                             </div>
        //                             <div className="category--info">
        //                                 <span className="category--info--main-header">{category.name}</span>
        //                                 <span className="category--info--description">{category.description}</span>
        //                                 <Link to={`category/${category.id}`}>
        //                                     <button className="btn-category">Explore {category.name}</button>
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                     </Fragment>
        //                 )
        //                     :
        //                     <Fragment key={category.key}>
        //                         <div className="category">
        //                             <div className="category--info">
        //                                 <div className="category--info">
        //                                     <span className="category--info--main-header">{category.name}</span>
        //                                     <span className="category--info--description">{category.description}</span>
        //                                     <Link to={`category/${category.id}`}>
        //                                         <button className="btn-category">Explore {category.name}</button>
        //                                     </Link>
        //                                 </div>
        //                             </div>
        //                             <div className='category-image'>
        //                                 <img src={category.imageUrl} alt={category.name} />
        //                             </div>
        //                         </div>
        //                     </Fragment>
        //             ))
        //         }
        //     </div>
        // </div>
    )
}

export default Home;

