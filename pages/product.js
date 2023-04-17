import React from 'react'
import CommonHead from '../Components/CommonHead'
import ProductListing from '../Components/ProductListingContainer/ProductListing'
import { apiCalls, serverFetchCall } from '../helper'

export default function product(props) {
  return (
    <>
    <CommonHead title={"Sabka Bazzar - Shop for Daily Essentials"} 
    description={"Sabka Bazzar - Buy fruits and vegetables,bakery-cakes-dairy,beverages,beauty-hygiene,baby care"} 
    keywords={"Buy fruits and vegetables,bakery-cakes-dairy,beverages,beauty-hygiene,baby care"}
    ></CommonHead>
    <ProductListing {...props}/>
    </>
  )
}
export async function getServerSideProps({query,res}) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
      )
    
    const apiArr=[
      serverFetchCall(`http://localhost:5000/products`),
      serverFetchCall(`http://localhost:5000/categories`)
    ]
    
    const apiRes=await apiCalls(apiArr)
    const [productListingData,categoriesData]=apiRes;
    let prdData=[];
    let notFound=true;
    let catorgorySelectedId=null;
    
    if(query && query.categoryId && productListingData){

        if( productListingData.length){
        prdData=productListingData.filter((product) => {
            if(product.category === query.categoryId ){
                notFound=false;
                catorgorySelectedId=query.categoryId;
                return product;
            }
            
        })
        }
        
        if(notFound){
            
            return {
                notFound: true,
              }
        }
    }else{
        prdData=productListingData;
    }
    return { props: { productListingData:prdData,categoriesData,catorgorySelectedId } }
  }
