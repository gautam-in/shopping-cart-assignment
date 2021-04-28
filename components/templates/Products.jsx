import styled from 'styled-components';
import PageLayout from '../organisms/PageLayout'
import ProductsList from "../organisms/products/ProductsList";
import ProductsCategoryList from "../organisms/products/ProductsCategoryList";


export default function Products() {
    return (
        <PageLayout>
            <CategoryContainer>
                <ProductsCategoryList />
            </CategoryContainer>
            
            <ProductsListContainer>
                <ProductsList />
            </ProductsListContainer>
        </PageLayout>
    )
}


const CategoryContainer = styled.div`
    float: left;
    width: 15%;
`
const ProductsListContainer = styled.div`
    width: 80%;  
    float: right;
    margin: 0 20px;    
    background-color : #e8e6e64d;
`