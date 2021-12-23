import React from 'react';
import { useState, useEffect } from 'react';
import Cards from './Cards/Cards';
import Categories from './Categories/Categories';
import "./ProductInfo.css"
function ProductInfo(props) {
    let [Productdta, setData] = useState(null);
    useEffect(()=>{
      fetch("/products").then((dta)=>dta.json()).then(dta=>setData(dta));
    },[])
    return (
      <div className="container-sm">
          <div className="row center">
          <div className="prodContain row">
            <div className="col-sm-2 categoriesCol">
              <Categories categories={props.categories}/>
            </div>
            <div className="col-sm-10 ">
            <div className="row">
            {Productdta?Productdta.map((item)=>{
                return <Cards {...item}/>
            }):null}
            </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductInfo;