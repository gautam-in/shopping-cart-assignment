import React from "react";
import {useHistory } from "react-router-dom"
import LazyLoad from 'react-lazyload';

import * as Endpoints from '../Endpoints'

const CategoryCard = ({category, index}) => {
    const history = useHistory();
    const name = category.name;
    const imageUrl =   Endpoints.base_uri+category.imageUrl;
    const id = category.id;
    const enabled = category.enabled;
    const description = category.description;
    const imageAlign = index %2 === 0 ? "left" : "right";

    if(imageAlign === 'left'){
        return (
            <article className="banner_card">
                <div className="row">
                    <div className="col col-md-4">
                        <div className="product_img">
                            <LazyLoad >
                                <img src={imageUrl} alt={name} />
                            </LazyLoad>
                        </div>
                    </div>
                    <div className="col col-md-8">
                        <div className="product_content">
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <button onClick={() => history.push("products#" + id)} className="btn-primary " aria-label={'Link to '+name} >Explore {name}</button>
                        </div>
                    </div>
                </div>
            </article>
        );
    }else{
        return (
            <article className="banner_card">
                <div className="row">
                    <div className="col col-md-8">
                        <div className="product_content">
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <button  onClick={() => history.push("products#" + id)} className="btn-primary" aria-label={'Link to '+name}>Explore {name}</button>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="product_img">
                            <LazyLoad >
                                <img src={imageUrl} alt={name} />
                            </LazyLoad>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
  }

export default CategoryCard;
