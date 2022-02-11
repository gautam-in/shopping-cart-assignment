import React, { useState, useEffect } from 'react';
import { AppContext } from '../common/AppContext';
import APICalls from '../../dataControls/APICalls';
import axios from 'axios';
import './ProductNav.scss';

const API_URL = "http://localhost:5000/";

const ProductNav = ({set_id}) => {
  // static contextType = AppContext;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // const {
  //   state: {categories}
  // } = useContext(AppContext);

  // APICalls.getCategories()
  //   .then((res) => setCategories(res.data))
  //   .catch(err => console.log(err))
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