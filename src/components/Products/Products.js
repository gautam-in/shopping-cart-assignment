import React,{useEffect} from 'react'
import axios from 'axios'
import Navbar from "../Navbar/Navbar"
import "./Products.scss"
export default function Products() {
    const [products,setProducts]=React.useState([])
    const apiCall=async()=>{
let res=await  axios.get('http://localhost:5000/products')
setProducts(res.data)
    }
    useEffect(()=>{
       apiCall()
    },[])
    return (
        <div>
           <div> <Navbar/></div>
            <div className="main2">
        <div className="left">
        <div className="align">Fruits & Vegetables</div>
        <div className="align">Bakery Cakes and Dairy</div>
        <div className="align">Beverages</div>
        <div className="align">Beauty and Hygiene</div>
        <div className="align">Baby Care</div>

        </div>
        <div className="right"></div>
        {products.length>0&&products.map(prd=>{
            return <div className="column">{prd.name}</div>
        })}
            </div>
        </div>
    )
}
