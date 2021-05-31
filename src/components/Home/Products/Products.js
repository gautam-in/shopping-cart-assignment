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
                if (prd.hasOwnProperty('imageUrl')) {
                    const imageurl = prd.imageUrl.split("/").reverse()
                    var imageurl1 = imageurl[0]
                    var imageurl2 = imageurl[1]
                }

                if (prd.hasOwnProperty('imageUrl'))
                    //if(index%2===0)
                    return <li key={prd.key} style={{ listStyle: 'none' }}>
                        <div style={{ textAlign: 'justify' }}>
                            <div className="product-detail">
                                <div className="product-image">
                                    <img className="img-class" alt={imageurl2} src={require(`../../../../static/images/${imageurl2}/${imageurl1}`).default} />
                                </div>

                                <div className="desc"> <h2>{prd.name}</h2>
                                    <p>{prd.description}</p>
                                    <button className="explore" onClick={clickHandler}>{`Explore ${prd.name}`}</button></div>
                            </div>
                            <div className="line"></div>
                        </div>
                    </li>


            })}</ul>}
        </div>
    )
}

export default withRouter(Products)