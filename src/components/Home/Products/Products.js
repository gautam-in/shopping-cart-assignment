import React, { useEffect, useState } from 'react'
import axios from "axios"
import Gallery from "../Carousel/Carousel"
import Logo from "../../../../static/images/logo.png"
import "./Products.scss"
import {withRouter} from "react-router-dom"
 function Products(props) {
    const [products, setProducts] = useState([])


    useEffect(() => {
        const apiCall = async () => {
            let result = await axios.get(`http://localhost:5000/categories`)
            setProducts(result.data.sort((a, b) => {
                if (a.order < b.order) return -1
                else if (a.order > b.order) return 1
                return 0
            }))

          

        }
        apiCall()
    }, [])
    const clickHandler=()=>{
        props.history.push("/products")
    }
    return (
        <div>
           <Gallery/>
            {products.length > 0 && <ul>{products.map((prd,index) => {
                console.log(prd, "../../../.." + prd.imageUrl)
                if (prd.hasOwnProperty('imageUrl')){
                const imageurl=prd.imageUrl.split("/").reverse()
                var imageurl1=imageurl[0]
                var imageurl2=imageurl[1]}

                if (prd.hasOwnProperty('imageUrl'))
                //if(index%2===0)
                    return <li key={prd.key} style={{ listStyle: 'none' }}>
                        <div style={{ textAlign: 'justify' }}>
                        <div className="product-detail">
                           <div className="image"> <img className="img-class" src={require(`../../../../static/images/${imageurl2}/${imageurl1}`).default} /></div>
                           
                            <div className="desc"> <h2>{prd.name}</h2>
                                <p>{prd.description}</p>
                                <button className="explore" onClick={clickHandler}>{`Explore ${prd.name}`}</button></div>
                               
                            {/* <div className="clear-fix"></div> */}
                            </div>
                            <div className="line"></div>
                            {/* eslint-disable-next-line import/no-dynamic-require */}
                            {/* <img src={ require(`../../../../static/images/category/${imageurl1}/${imageurl2}`).default}/> */}
                            {/* <img src={prd.imageUrl}/> */}
                            {/* <img src={require(`../../../..${prd.imageUrl}`).default}/> */}
                            {/* <img src={path+`${prd.imageUrl.default}`} />
                        <img src={require(`${path}${prd.imageUrl}`).default} /> */}</div>
                    </li>
               

            })}</ul>}
        </div>
    )
}

export default withRouter(Products)