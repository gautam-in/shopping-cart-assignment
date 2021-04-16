import React from 'react'

export default function EmptyCart({startShopping}){
return(
    <div style={{ height: "100%",position:"relative" }}>
          <div className="empty-cart">
            <h2>No items in your cart</h2>
            <h5>Your favourite items are just a click away</h5>
            
            <button onClick ={startShopping} className = "btn startShoppingBtn" >
              Start Shopping
            </button>
          </div>
          </div>
)
}