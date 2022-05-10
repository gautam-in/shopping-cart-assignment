
import { useEffect, useState } from 'react';
import { useDispatch,useSelector} from "react-redux";
import { fetchProducts } from "../../Redux/Reducers/ProductSlice";
import {addItemToCart} from "../../Redux/Reducers/CartSlice"
import './Products.css'


const ProductDetail =()=>{
    const dispatch = useDispatch();
    const data =useSelector((state) => state.product.value);   

  
    useEffect(() => {
      dispatch(fetchProducts());
      return
    }, [dispatch]);
    

    return(
        <>  
        <div className='productItems' >
        {data.map(item=>(
            <div className="gridItem" key={item.id}>
                <h3>{item.name}</h3>
            <img width={150} src={item.imageURL}/>
            <p style={{ backgroundColor: "rgb(224, 224, 224)",fontFamily: 'Dosis' }}>{item.description}</p>
            <div className='productPrice'>
               <span style={{float:"left"}}> MRP Rs {item.price}</span>
                <button onClick={()=>dispatch(addItemToCart(item))} className='buyButton'>Buy Now</button>
                </div> 
            </div>
            
        ))}
        </div>
        </>
    )
}

export default ProductDetail;