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
            filteredKey : this.props?.query?.id||'',
            filteredName : ''
        }
    }
    
    componentDidMount(){
        const {productReducer,query,availableCategories}= this.props
        // filtering products based on id from url
        if (query?.id) {
            const filteredProducts = productReducer?.products.filter((product)=>product.category === query.id)
            const currentCategory = availableCategories.filter((category)=> category.id === query.id)
            this.setState({
                products:filteredProducts,
                filteredKey:query?.id,
                filteredName:currentCategory?.[0]?.name
            })
        }
        else{
        this.setState({
            products:productReducer.products
        })}
    }

    filterProductByType = (key,name) =>{
    const currentCategory =this.props?.availableCategories.filter((category)=> category.id === key)
    // filtering products based on key
    if (key == this.state.filteredKey) {
        this.setState({
            filteredKey:"",
            products:this.props?.productReducer?.products,
            filteredName:'All'
        }) 
        Router.push({pathname:"/products" })
    }
    // showing all products when same category is clicked
    else {
        const filteredproducts = filterProduct(key,this.props?.productReducer?.products)
        this.setState({
            filteredKey:key,
            products:filteredproducts,
            filteredName:currentCategory?.[0]?.name
        })  
        Router.push({pathname:"/products",query:{ id:key }})
    }
    }
render(){
    const {products,filteredKey,filteredName} = this.state;
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
            <option  selected={!filteredKey} value={filteredKey}>All</option>
            {availableCategories&&availableCategories.map((item)=>{
                        return <option selected={filteredKey === item.id} value={item.id}>{item.name}</option>
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