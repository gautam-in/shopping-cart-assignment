import React from "react";
import Router  from "next/router";
import ProductItem from "../../organism/Product/ProductItem";
import PageLayout from '../../organism/layout/PageLayout'
import filterProduct from '../../../utils/lib/filterProduct'
import styles from './product.module.scss'

class Products extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            products:this.props?.products||[],
            filteredKey : this.props?.query?.id
        }
    }
    
    componentDidMount(){
        const {productReducer,query}= this.props
        // filtering products based on id from url
        if (query?.id) {
            const filteredProducts = productReducer?.products.filter((product)=>product.category === query.id)
            this.setState({
                products:filteredProducts,
                filteredKey:query?.id
            })
        }
        else{
        this.setState({
            products:productReducer.products
        })}
    }

    filterProductByType = (key) =>{
    // filtering products based on key
    if (key == this.state.filteredKey) {
        this.setState({
            filteredKey:"",
            products:this.props?.productReducer?.products
        }) 
        Router.push({pathname:"/products" })
    }
    // showing all products when same category is clicked
    else {
        const filteredproducts = filterProduct(key,this.props?.productReducer?.products)
        this.setState({
            filteredKey:key,
            products:filteredproducts
        })  
        Router.push({pathname:"/products",query:{ id:key }})
    }
    }
render(){
    const {products,filteredKey} = this.state;
    const{availableCategories,cartReducer,userReducer} = this.props;
    return(
        <PageLayout actions={this.props.actions}>
            <div className="empty" />
            <div>
        {/* dropdown only for mobile view */}
            <select
                className={styles.dropdown}
                onChange={(e)=>{
                    this.filterProductByType(e.target.value)
                }}
            >
            <option value={this.state.filteredKey}>All</option>
            {availableCategories&&availableCategories.map((item)=>{
                        return <option  value={item.id}>{item.name}</option>
                    })}
            </select>
            </div>
            <div className={styles.product_content}>
                <div className={styles.sidebar}>
                   <ul className={styles.filterlist}>
                    {availableCategories&&availableCategories.map((item)=>{
                        return <li onClick={()=>this.filterProductByType(item.id)} style={{background:filteredKey === item.id ?"#eee":""}} >
                                    {item.name}
                                </li>
                    })}
                    </ul> 
                </div>
                {products&&products.length &&
                <div className={styles.productitems}>
                    {products.map((product,index)=>{
                        return(
                            <ProductItem currentLogedInUser={userReducer?.currentLogedInUser}  key={index} product={product} actions={this.props.actions} cartData={cartReducer?.cartData} />
                        )
                    })}
                </div>}
            </div>
        </PageLayout>
    )}  
}
export default Products