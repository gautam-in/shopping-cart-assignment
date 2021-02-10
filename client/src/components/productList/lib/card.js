import React from 'react'
import "../index.scss"

function Card({p}) {
    return (
        <div className="card">
           <h3>{p.name}</h3>   
           <div>
           <img src={p.imageURL}/>
               </div>
 
           <div className={"description"}> 
           <div>
         {p.description}
         </div>
            </div>   

            <div className={"priceBuy"}>
                 <div className={"price"}> MRP Rs.{p.price} </div>
                 <button className="button" type="submit">Buy Now</button>

              </div>  
        </div>
    )
}

export default Card
