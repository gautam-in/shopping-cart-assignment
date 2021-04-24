import styled from 'styled-components';
import StickedHeader from '../components/StickedHeader'
import ProductsList from "../components/products/ProductsList";
import ProductsCategoryList from "../components/products/ProductsCategoryList";

export default function ProductsPage(){
    return (
            <div>
                <HeaderContainer>
                    <StickedHeader />
                </HeaderContainer>   

                <RootContainer>                                   
                    <CategoryContainer>
                        <ProductsCategoryList />
                    </CategoryContainer>
                    
                    <ProductsListContainer>
                        <ProductsList />
                    </ProductsListContainer>
                </RootContainer>
            </div>
)}


const HeaderContainer = styled.div`
    position : sticky; 
    z-index : 1; 
    top: 0;
`

const RootContainer = styled.div`
    margin: 0px auto;
    width: 80%;    
`

const CategoryContainer = styled.div`
    float: left;
    width: 15%;
`

const ProductsListContainer = styled.div`
    width: 80%;  
    float: right;
    margin: 0 20px;
`
