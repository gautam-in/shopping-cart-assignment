import React from 'react';
import LazyLoad from 'react-lazyload';
export default function ProductItem(props){
    const {item} = props;
    return(<li key={props.i}>
        <p className="prod-name" title={item.name}>{item.name}</p>
        <div className="prod-detls">
        <div className="prod-img">
            <figure>
        <LazyLoad height={75} offset={500} once>
            <img className={`rocketImg`}
                alt={item.name}
                src={window.location.origin + item.imageURL}
            />
        </LazyLoad>
        </figure>
        </div>
        <div className="prod-infodetails">
        <div className="description-area">
            <article className="prod-desc truncate-overflow" aria-label={item.description} title={item.description}>{item.description}</article>
        </div>
        <div className="buy-area">
            <div className="col span-1-of-2 price">
               <p> MRP Rs.{item.price}</p>
            </div>
            <div className="col span-1-of-2 buy-btn">
                <button className="btn" onClick={(event)=>props.addToCart(event,item)} aria-label={`Click on this button to buy ${item.name} for ${item.price} rupees.`}>Buy Now</button>
                <button className="btn small-screen-btn" onClick={(event)=>props.addToCart(event,item)} aria-label={`Click on this button to buy ${item.name} for ${item.price} rupees.`}>Buy Now @ Rs.{item.price}</button>
            </div>
        </div>
        </div>
        </div>
    </li>);
}