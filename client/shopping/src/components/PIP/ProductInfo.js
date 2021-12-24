import React from 'react';
import { useState, useEffect } from 'react';
import Cards from './Cards/Cards';
import Categories from './Categories/Categories';
import "./ProductInfo.css"
function ProductInfo(props) {
    let [Productdta, setData] = useState(null);
    let [ProductdtaCat, setDataCat] = useState({category:"all",products:[]});
    useEffect(()=>{
      fetch("/products").then((dta)=>dta.json()).then(dta=>{
        setData(dta);
        return setDataCat({...ProductdtaCat,products:dta})
      });
    },[])
    const setCategory = (data)=>{
      if(data.name !== ProductdtaCat.category){
        let filterdata = Productdta.filter((item)=>{
          return item.category === data.id
        
        })
        setDataCat({category:data.name,products:filterdata})
       }
       else{
        setDataCat({category:"all",products:Productdta})
       }
    }
    const addProdToCart = (item)=>{
      let products={};
      if(props.products[Object.keys(item)[0]]){
        products = props.products
        products[Object.keys(item)[0]].qty = products[Object.keys(item)[0]].qty + 1;
      }
      else{
        products = props.products
        products = {...products,...item}

      }
      props.addToCart(products);
    
    }
    return (
      <div className="container-sm">
          <div className="row center">
          <div className="prodContain row">
            <div className="col-sm-2 categoriesCol">
              <Categories categories={props.categories} setProdCategory={setCategory}/>
            </div>
            <div className="col-sm-10 ">
            <div className="row">
            {ProductdtaCat.products.length>0?ProductdtaCat.products.map((item)=>{
                return <Cards {...item} key={item.id} addToCart={addProdToCart}/>
            }):null}
            </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductInfo;