import React from 'react'
import { useHistory } from 'react-router-dom';

export default function ProductCard(props) {
    const history = useHistory();

    return (
        <div className="ProductCard"
            onClick={() => history.push(`/products/${props.id}`)}
        >
            <img src={props.imageURL}
                alt={props.id || 'Image'} />
            <div className="ProductCard__Content">
                <span className="ProductTitle">{props.name}</span>
                <span className="ProductPrice">Price: {`₹${props.price}`}</span>
                {/* <p>{props.content}</p> */}
                <button className="Button_AddToCart">Add To Cart</button>
            </div>
        </div>
    )
}
