import MenuList from  '../../molecules/Menu/MenuList'
import MobileMenu from  '../../molecules/Menu/MobileMenu'
import { ProductStyle ,Container} from './style'
import SingleProduct from '../../molecules/Product/Product'

function Products({products,menu}){
    console.log("products",products)

    const listItems = products.map((data) =>
         <SingleProduct key={data.id} data={data}/>
        // console.log("row",data)
    );
    
    return (
        <>
        <MobileMenu menuData={menu} dropDownTheme='mobile' />
        <Container>
            <MenuList menuData = {menu} />    
            <ProductStyle>
                {listItems}
            </ProductStyle>
        </Container>
        </>
    )
}


export default Products