import Products from "../components/Products";


export const getStaticProps =async()=>{
    const res = await fetch('http://localhost:5000/categories') 
    const data = await res.json()

    const respone = await fetch('http://localhost:5000/products')
    const products = await respone.json()
   
return {
    props:{
        products:products,
        categories:data
    }
}
    
   } 



export default function products({categories,products}) {
    
    return (
        <Products categories={categories} products={products}/>
    )
}
