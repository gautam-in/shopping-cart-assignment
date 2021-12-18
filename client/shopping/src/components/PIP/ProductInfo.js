import React from 'react';

import { useState, useEffect } from 'react';
import Cards from './Cards/Cards';
function ProductInfo(props) {
    let [dta, setData] = useState(null);
    useEffect(()=>{
      fetch("/products").then((dta)=>dta.json()).then(dta=>setData(dta))
    },[])
    return (
      <div className="App container-sm">
        <div className="row">
        {dta?dta.map((item)=>{
            return <Cards name={item.name} Url={item.imageURL}/>
        }):null}
        </div>
      </div>
    );
}

export default ProductInfo;