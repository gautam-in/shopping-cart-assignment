import React,{useEffect} from 'react'
import axios from 'axios'
import Navbar from "../Navbar/Navbar"
import {useDispatch,useSelector} from "react-redux"
import * as actions from "../../store/actions"
import "./Products.scss"
export default function Products() {
    const dispatch=useDispatch()
    const [products,setProducts]=React.useState([])
    const [productsCopy,setProductsCopy]=React.useState([])
    const apiCall=async()=>{
let res=await  axios.get('http://localhost:5000/products')
setProducts(res.data)
setProductsCopy(res.data)
    }
const filterProducts=(id)=>{
   const prds=productsCopy;
   const p=prds.filter(p=>p.category===id)
   setProducts(p)

}
    useEffect(()=>{
       apiCall()
    },[])
    return (
        <div>
           <div> <Navbar/></div>
            <div className="main2">
        <div className="left" >
        <div className="align" onClick={()=>filterProducts('5b6899953d1a866534f516e2')}>Fruits & Vegetables</div>
        <div className="align" onClick={()=>filterProducts("5b6899123d1a866534f516de")}>Bakery Cakes and Dairy</div>
        <div className="align" onClick={()=>filterProducts("5b675e5e5936635728f9fc30")}>Beverages</div>
        <div className="align" onClick={()=>filterProducts("5b68994e3d1a866534f516df")}>Beauty and Hygiene</div>
        <div className="align" onClick={()=>filterProducts("5b6899683d1a866534f516e0")}>Baby Care</div>

        </div>
        <div className="right"></div>
        {products.length>0&&products.map(prd=>{
             if(prd.hasOwnProperty('imageURL'))
             { const imageurl=prd.imageURL.split("/").reverse()
              const url1=imageurl[0]
              const url2=imageurl[1]
             
              return <div className="column">
                 <h3> {prd.name}</h3> 
                 <div >
                 <img className="product" src={require(`../../../static/images/products/${url2}/${url1}`).default}/>
                  </div>
                  <div className="description">{prd.description}</div>
                  <div className="wrapper">
                      <div className="mrp">MRP Rs.{prd.price}</div>
                      <div className="right"><button className="buynow" onClick={()=>dispatch(actions.addToCart(prd))}>Buy Now</button></div>
                  </div>
                 </div>}
        })}
            </div>
        </div>
    )
}
