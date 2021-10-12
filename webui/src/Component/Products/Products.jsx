import {useQuery} from 'react-query';
import { useCategory } from '../../Hooks/hooks';
import {getProducts} from '../../Services';
import Button from '../Button/Button';
import CategoryList from '../Categories/CategoryList';
import css from './Products.module.css';

function Products(){
    let {data=[],isLoading,error}=useQuery("getProducts",getProducts);
    let {catIdSelected}=useCategory();
    if(catIdSelected){
        data=data.filter(product=>product.category===catIdSelected);
    }
    return <div className={css.ProductWrapper}>
        <aside className={css.Category}><CategoryList/></aside>
        <section className={css.ProductContainer}>
        {isLoading && <p>Loading products..</p>}
        {error && <p>{error.message}</p>}
        {
            data.map(product=><Product key={product.id} product={product}/>)
        }
        </section>
    </div>
}
export default Products;

const Product=({product})=>{
    let {name,imageURL,description,price,category,sku,stock}=product;
    return <div className={css.Product}>
                <div className={css.Name}><h3>{name}</h3></div>
                <div className={css.Image}><img src={imageURL} alt={imageURL} /></div>
                <div className={css.Info}><p>{description}</p></div>
                <div className={css.Footer}><span className={css.Price}>MRP Rs.{price}</span> <span><Button>Buy Now</Button></span></div>
                <div className={css.FooterMobile}><Button small>Buy Now@Rs.{price}</Button></div>
            </div>
}