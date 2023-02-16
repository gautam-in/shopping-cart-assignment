import React from "react";
import './ProductCard.css'

function ProductCard({ product}) {
    const {name, imageURL, description, price}=product
    return <div className="card p-2">
        <header className="font-bold name-height">{name}</header>
        <div className="my-2 flex justify-center">
            <img src={imageURL} alt={name} className='img-height'/>
        </div>
        <div className="bg-gray-200 p-1 font-12 desc-height overflow-hidden">
            {description}
        </div>
        <div className=" flex justify-between p-2 items-center">
            <div className="font-semibold">MRP ₹{price}</div>
            <div className="w-20 py-2 bg-primary text-white font-semibold text-center">Buy Now</div>
        </div>
    </div>
};

export default ProductCard;