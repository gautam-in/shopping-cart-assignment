import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import MyContext from '../../context/myContext';

export default function ProductCard(props) {
    const history = useHistory();

    const { addProductToCart, context: { cart } } = useContext(MyContext);

    const handleAddCartToProduct = (event) => {
        event.stopPropagation();
        addProductToCart(props);
    }

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
                <button className="Button_AddToCart" onClick={handleAddCartToProduct}>Add To Cart</button>
            </div>
        </div>
    )
}
