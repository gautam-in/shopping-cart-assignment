import MenuList from  '../../molecules/Menu/MenuList'
import { ProductStyle ,Container} from './style'
import Product from '../../molecules/Product/Product'

function Products({products,menu}){
    

    const listItems = products.map((data,i) =>
        <Product key={i} product={data}/>
    );
    
    return (
        <Container>
            <MenuList menuData = {menu} />    
            <ProductStyle>
                {listItems}
            </ProductStyle>
        </Container>
    )
}


export default Products