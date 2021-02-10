import React from 'react';
import "../cart.scss"

function Item() {
    return (
        <div className="item">
            <div className="icon"> <img src="/static/images/products/fruit-n-veg/apple.jpg" alt=""/> </div>
            <div className="quantity"><h3> dss akjsda dasd asdas</h3><div>
                <span className={"changeQnt"}>-</span>  <span >1</span>  <span  className={"changeQnt"}>+</span> <span>x &nbsp; &nbsp;&nbsp; Rs.187  </span>
                
                
                 </div></div>
            <div className="priceItem"> Rs. 187 </div>
        </div>
    )
}

export default Item
