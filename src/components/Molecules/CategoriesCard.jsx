import React from "react";
import {useHistory } from "react-router-dom"

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
            <div className="banner_card">
                <div className="row">
                    <div className="col col-md-4">
                        <div className="product_img">
                            <img src={imageUrl} alt={name} />
                        </div>
                    </div>
                    <div className="col col-md-8">
                        <div className="product_content">
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <button onClick={() => history.push("products#" + id)} className="btn-primary">Explore {name}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return (
            <div className="banner_card">
                <div className="row">
                    <div className="col col-md-8">
                        <div className="product_content">
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <button  onClick={() => history.push("products#" + id)} className="btn-primary">Explore {name}</button>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="product_img">
                            <img src={imageUrl} alt={name} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }

export default CategoryCard;
