import ProductItem from "../productItems/productItem";
import './products.scss'
const Products=({allProducts=[]})=>{
    return <div className='d-flex flex-row products-main'>
        {
            allProducts.map(ele=>(
                <ProductItem item={ele} key={ele.id}/>
            ))
        }
    </div>
}
export default Products;