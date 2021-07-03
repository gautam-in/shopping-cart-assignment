import MenuList from  '../../molecules/Menu/MenuList'
import { ProductStyle ,Container} from './style'
import Product from '../../molecules/Product/Product'
import {FetchCategory,FetchProducts} from '../../../api/FetchCategory' 
import {arrayChunk} from '../../../lib/lib';

function Products({products,categories}){
    

    const listItems = products.map((data,i) =>
        <Product key={i} product={data}/>
    );
    
    return (
        <Container>
            <MenuList menuData = {categories} />    
            <ProductStyle>
                {listItems}
            </ProductStyle>
        </Container>
    )
}

Products.getInitialProps = async function () {
    const categories = await FetchCategory()
    const products = await FetchProducts()
    const productsChunk = arrayChunk(products)
    return {categories,products:productsChunk} 
 }

export default Products