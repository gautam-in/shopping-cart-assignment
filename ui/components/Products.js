// import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useState } from 'react'
import prod from '../products.json'
import ProductCard from './ProductCard'
import catg from '../category.json'

function Products(props) {
    const [prodType, setprodType] = useState(props.prodType?props.prodType:'')
    // console.log(prod)
    return (
        <>
        <div style={{gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",paddingLeft:"1%"}} className="web">
            <ul style={{gridColumn:"1/2", backgroundColor:"lightgrey",padding:"1%",listStyle:"none",cursor:"pointer"}} onClick={(e)=>{return setprodType(e.target.getAttribute("value"))}}>
                <li value="">All</li><hr/>
                {catg.map((c)=>{
                    if(prodType==c.id){
                        return <>
                        <li key={c.id} value={c.id} style={{fontSize:"20px", fontWeight:"bold"}}>{c.name}</li><hr/>
                    </>
                    }
                    return <>
                        <li key={c.id} value={c.id}>{c.name}</li><hr/>
                    </>
                })}   
            </ul>
            <div style={{gridColumn:"2/6"}}>
                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                    {prod.filter((pr)=>{return prodType?pr.category==prodType:pr}).map((pd,index)=>{
                        return <div key={index} style={{padding:"1%"}}>
                            <ProductCard pdts={pd}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
        <div style={{ flexWrap:"wrap", justifyContent:"center"}} className="mobile" >
            
            <select id = "dropdown" style={{width:"75%", backgroundColor:"red",color:"white"}} onChange={e=>{return setprodType(e.target.value)}}>
                <option value="">select dropdown</option>
                {catg.map((c)=>{return <option key={c.id} value={c.id}>{c.name}</option>})}
                
            </select>
            {prod.filter((pr)=>{return prodType?pr.category==prodType:pr}).map((pd,index)=>{
                return <div key={pd.id} style={{padding:"1%"}}>
                    <ProductCard pdts={pd}/>
                </div>
            })}
        </div>
        </>
    )
}

export default Products
