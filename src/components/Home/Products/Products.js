import React, { useEffect, useState } from 'react'
import Gallery from "../Carousel/Carousel"
import "./Products.scss"
import { withRouter } from "react-router-dom"
import {getCategories} from "../../../apiCalls/restCalls"
function Products(props) {
    const [products, setProducts] = useState([])

const asyncCall=async()=>{
    const data= await getCategories()
      setProducts(data)

}
    useEffect(() => {
        
      asyncCall()
    }, [])
    const clickHandler = () => {
        props.history.push("/products")
    }
    return (
        <div>
            <Gallery />
            {products.length > 0 && <ul>{products.map((prd, index) => {
                console.log(prd, "../../../.." + prd.imageUrl)
                if (prd.hasOwnProperty('imageUrl'))
                    //if(index%2===0)
                    return <li key={index} style={{ listStyle: 'none' }}>
                        
                            <div className="product-detail">
                                <div className="product-image">
                                    <img className="img-class" alt={prd.name} src={prd.imageUrl} />
                                </div>

                                <div className="desc">
                                   <h3 aria-label={prd.name}>{prd.name}</h3>
                                    <p aria-label={prd.description}>{prd.description}</p>
                                    <button className="explore" onClick={clickHandler}>{`Explore ${prd.name}`}</button></div>
                            </div>
                            <div className="line"></div>
                       
                    </li>


            })}</ul>}
        </div>
    )
}

export default withRouter(Products)