
import {ProductPageContainer,ProductPageSidebar,
    ProductPageProductsContainer,SideBar,SideBarItem} from './ProductListing.styles';
import Product from "../../Components/Product/Product.component";

const ProductsListing = props => {
    return (
        <>
        <ProductPageContainer>
            <ProductPageSidebar>
                <SideBar>
                    <SideBarItem>Fruits & Vegetables</SideBarItem>
                    <SideBarItem>Fruits & Vegetables</SideBarItem>
                    <SideBarItem>Fruits & Vegetables</SideBarItem>
                    <SideBarItem>Fruits & Vegetables</SideBarItem>
                </SideBar>
            </ProductPageSidebar>

            <ProductPageProductsContainer>
                    <Product />
            </ProductPageProductsContainer>
        </ProductPageContainer>
        
        </>
    );
}

export default ProductsListing;