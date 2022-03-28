import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import SidePanel from "../Reusables/SidePanel.component";
import { increament } from "../store/action.js";
import "../Scss/tile.scss";

import "../Scss/product.scss";
import { get } from "../common";

function Product() {
    const [pro, setPro] = useState([]);
    const [categories, setCategories] = useState([]);

    const { filter } = useSelector((state) => state);

    useEffect(() => {
        get("products").then(({ data }) => {
            setPro(data);
        });
        
        get("categories").then(({ data }) => {
            setCategories(data);
        });
    }, []);

    const dispatch = useDispatch();

    const handleCart = (item) => () =>{
        dispatch(increament(item));
    };

    return (
        <main className="pro-container">
            <SidePanel product={categories} />
            <section className="pro-wrapper">
                <ul className="pro-list">
                    {filter === null && pro.length > 0
                    ? pro.map((item )=>
                        
                    <li key={item.id} className="tile-cards" id={item.category}>
                    <h1 className="tile-name">{item.name}</h1>
                    <img src={item.imageURL} alt={item.name} className="tile-img" />
                    <p className="tile-desc">{item.description}</p>
                    <button className="btn-cta-mob title-mob" onClick={handleCart(item)}>
                        Buy Now @ Rs. {item.price}
                    </button>
                    <div className="tile-cta-container">
                        <span className="tile-price">MRP Rs. {item.price}</span>
                        <button onClick={handleCart(item)} className="btn-cta">
                            Buy Now
                        </button>
                    </div>
                </li>):
                    pro.filter((item)=> item.category === filter).map((item) => <li key={item.id} className="tile-cards" id={item.category}>
                    <h1 className="tile-name">{item.name}</h1>
                    <img src={item.imageURL} alt={item.name} className="tile-img" />
                    <p className="tile-desc">{item.description}</p>
                    <button className="btn-cta-mob title-mob" onClick={handleCart(item)}>
                        Buy Now @ Rs. {item.price}
                    </button>
                    <div className="tile-cta-container">
                        <span className="tile-price">MRP Rs. {item.price}</span>
                        <button onClick={handleCart(item)} className="btn-cta">
                            Buy Now
                        </button>
                    </div>
                </li>)
                    }
                </ul>
            </section>
        </main>
    );

}

export default Product;