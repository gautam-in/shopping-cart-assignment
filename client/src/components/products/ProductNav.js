import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductNav.scss';

const API_URL = "http://localhost:5000/";

const ProductNav = ({set_id}) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

   const getProductNavData = async () => {
      await axios(API_URL+"categories").then(res => {
        setCategories(res.data);
        setLoading(false);    
      });
    }

  useEffect(()=> {
    console.log("Mounting");
    getProductNavData();
    console.log(categories);
   }, [])

    return(
      <div className="ProductsNav">
        <ul className='category-list'>
          { 
            categories.filter(item => item.enabled === true).sort((max, min)=> max.order > min.order ? 1: -1).map(item => {
              return(
                <li key={item.order} className='category' onClick={()=> set_id(item.id)}>
                  {item.name}
                </li>
              )
            })
          }
        </ul>
      </div>
    )

}

export default ProductNav;