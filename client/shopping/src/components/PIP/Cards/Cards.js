import React from 'react';
import useImageLoad from '../../../Hooks/useImageLoad';
function Cards(props) {
    const [error, image]= useImageLoad(props.imageURL)
    return (
        <div className="col-sm-3 g-sm-0">
            <div className="catCards">
                <div className="cardHead">{props.name}</div>
                <div>{!error && <img src={image} alt="title"/>}</div>
                <div className="description">{props.description}</div>
                <div className="row center g-sm-0">
                    <div className="col-6">Rs {props.price}</div>
                    <div className="col-6"><button className="explore" style={{margin:"0"}}>Buy Now</button></div>
                </div>
            </div>
        </div>
    );
}

export default Cards;