import React, { Component } from 'react';
import ProductCard from './ProductCard';
import './productList.style.scss'

class Productlist extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         products:[],
    //         data_loadded:false
    //     }
    // }
    
    // componentDidMount(){
      
    //     fetch("http://localhost:5000/products")
    //     .then((res) => res.json())
    //     .then((json) => {
    //         //json.sort(this.sortByOrder)
    //         this.setState({
    //             products:json,
    //             data_loadded:true
    //         })
    //     })
        
    //     // catJson.sort(this.sortByOrder)
    //     // this.setState(catJson)   
    // }
    
    render() {
        const {products, data_loadded}= this.props
        const clss =this.props.clss
        console.log(clss);
        return (
            <main className=' pcard'>
            {
                products.map((prod) => {
                    return <ProductCard  product={prod}/> 
                })
                  
            }
            
        </main>
        );
    }
}

export default Productlist;