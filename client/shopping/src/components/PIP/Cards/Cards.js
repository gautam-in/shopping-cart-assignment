import React from 'react';
import useImageLoad from '../../../Hooks/useImageLoad';
function Cards(props) {
    const [error, image]= useImageLoad(props.imageURL)

    const addProducts = ()=>{
        let products = {};
        products[props.name]= {};
        products[props.name]["qty"] =  1;
        products[props.name]["price"] = props.price;
        products[props.name]["imageURL"]= props.imageURL;

        fetch("/addToCart",{
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'

            },
            body: JSON.stringify({id:props.id})
          }).then((data)=>{
             return data.json();
          }).then((res)=>{
                if(res.response==="Success"){
                    props.addToCart(products)
                }
          });
       
    
    }
  
    return (
        <div className="col-sm-3 g-sm-0 tabCards">
            <div className="catCards">
                <div className="cardHead" data-testid="cardname"><b>{props.name}</b></div>
                <div className="cardBody">
                {!error && <img src={image} alt={props.name}/>}
                <div className="cardDes">
                <div className="description" data-testid="carddes">{props.description}</div>
                <div className="row center g-sm-0 buttonDesk">
                    <div className="col-6">MRP Rs {props.price}</div>
                    <div className="col-6"><button className="explore" style={{margin:"0"}} onClick={addProducts}>Buy Now</button></div>
                </div>
                <div className="row center g-sm-0 buttonMob">
                    <button className="explore" onClick={addProducts}>Buy Now @ Rs {props.price}</button>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;