import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

import Banner from '../../shared/components/Banner';
import { HOME_ACTION_TYPES } from '../../shared/redux/actionTypes/home';
import { requestDispatch } from '../../shared/Utils/utility';
import './index.css';

const Home = () => {

    const dispatch =  useDispatch();
    const navigate = useNavigate();
    const banners =  useSelector( state => state.home.banners);
    const categories =  useSelector( state => state.home.categories);

    useEffect(() => {
        dispatch({
            type:requestDispatch(HOME_ACTION_TYPES.FETCH_BANNER)
        })
        dispatch({
            type:requestDispatch(HOME_ACTION_TYPES.FETCH_CATEGORIES)
        })
    },[]);

    return <>
            <Banner banners={banners} />
            {
                categories.map((category,index) =>
                <div className="category" key={category.id}>
                    <div className="category-img">
                        <img src={require(`../../shared${category.imageUrl}`)} alt={category.name} />
                    </div>
                    <div className="category-info">
                        <div className="category-title">{category.name}</div>
                        <div className="category-desc">{category.description}</div>
                        <button
                            className="category-btn"
                            onClick={() => navigate(`products?category=${category.id}`)}
                        >
                            {category.name}
                        </button>
                    </div>
                </div>
                )
            }
    </>

}

export default Home;