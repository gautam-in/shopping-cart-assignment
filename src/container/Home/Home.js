import React, { useState, useEffect } from 'react';
import './Home.scss';
import { connect } from 'react-redux';
import { fetchData } from "../../actions/index";
import Carousel from "../../components/Carousel/Carousel";
import Category from '../../components/Category/Category';
import * as Constants from "../../global-constants";

function Home(props) {
    const [banners, setBanner] = useState([]);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        props.fetchData(Constants.UrlBannersApi);
        props.fetchData(Constants.UrlCategoriesApi);
    }, []);

    useEffect(() => {
        if(props.banners.length !== banners.length) {
            setBanner(props.banners)
        }

        if(props.categories.length !== categories.length) {
            setCategories(props.categories)
        }
    }, [props.banners, props.categories])

    return (
        <div className="home">
            <Carousel items={banners} screenSize={props.screenSize} />
            <div className="home-container">
                {categories.map((category, idx) => 
                    {
                        return(
                            <Category category={category} imgAlign={(idx % 2) ? Constants.Right : Constants.Left}/>
                        )
                    }
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.setData.categories,
        banners: state.setData.banners
    }
}

export default connect(mapStateToProps, { fetchData })(Home)