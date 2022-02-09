import React from "react";
import "./Product.scss";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { AddCartItems } from "../actions/actions";
import store from "../store/store";

function Product(props) {
    let dispatch = useDispatch();
    const {addtocart} = useSelector(store=>store);
    
    async function AddToCart(id) {
        let response = await axios({
            url: "http://localhost:5000/addToCart",
            method: "POST",
            data: { id },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
        dispatch(AddCartItems(id));
    }
    return (
        <div className="product__card col-xl-3 col-md-6">
            <h6>{props.prod.name}</h6>
            <img src={props.prod.imageURL} alt={props.prod.name} />
            <p className="product__description">{props.prod.description}</p>
            <div className="product__price">
                <p>MRP Rs.{props.prod.price}</p>
                <button className="btn-danger" onClick={() => { AddToCart(props.prod.id) }}>BUY NOW</button>
            </div>
        </div>
    )
}
export default Product;