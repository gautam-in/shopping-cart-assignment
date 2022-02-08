import React from 'react';
import './collection-item.scss';
const  CollectionItem=({id,name,imageURL,price,description})=> (
  
   <div className='collection-item'>
      
        <div className='collection-item-name'>{name}</div> 

         <div
           
         className={`collection-item-image`}>

          <img src={imageURL} alt={` ${name}`}></img>
       </div> 
        {/* <div className={`collection-item-image`}
        style={{
            backgroundImage:`url(${imageURL})`
        }}
        >
        </div> */}
        <div className='collection-item-description'>{description}</div>
        <div className='collection-footer'>
        
        <span>{price}</span>
        <span className='buy-now'> BUY NOW</span>
        </div>
        

  </div>
)

export default CollectionItem;
