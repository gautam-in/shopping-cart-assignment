import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import CollectionPreview from '../../components/collection-preview/collection-preview-component'
import './products-page.scss'
const axios = require('axios');

class ProductsPage extends React.Component{
    constructor(props){
        super(props);
            this.state={
                products:[],
                loading:false,

                category:{
                    "5b6899953d1a866534f516e2":`fruits and vegitables`,
                    "5b6899123d1a866534f516de":`Bakery, Cakes and Diary`,
                    "5b675e5e5936635728f9fc30" :`Beverages`,
                    "5b68994e3d1a866534f516df" :`Beauty and Hygine`,
                    "5b6899683d1a866534f516e0" :`Baby care`
                } 
            }
}

getProducts=async()=>{
    return axios({
        method:'GET',
        url:'http://localhost:5000/products',
        headers: {"content-type": "application/json"}
    
    }
    )
    .then(function(response){
       return response.data;
    })
    .catch(function(err){console.log(err)})
}
async componentDidMount(){
    const products = await this.getProducts();
//     let category=this.state.category;
//     products.map(element => {
//    category.find((categoryid)=>element.id===categoryid[value])
//     });
    this.setState({products:products})
}
render(){
    const products=this.state.products;
    
  return(<div className="product-page"> 
 <div className="collection-preview">
  {products.map(({id,...otherProductsProps})=>(

      <CollectionItem key ={id} {...otherProductsProps}/>
  ))}
  </div>
  </div>)

}
}

export default ProductsPage;