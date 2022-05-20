import {useSelector} from 'react-redux';

import {ProductContainer,ProductHeaderContainer,ProductHeader,ProductImgContainer,ProductImg,ProductDescContainer,
    ProductDesc,ProductMetaContainer,ProductPrice,ProductCTA} from './Product.styles';

const Product = ({category}) => {
    const products = useSelector(state => state.data.products);
    let finalProductList;
    if(category !== ''){
        finalProductList = products.data.filter(prod => prod.category === category);
    } else {
        finalProductList = products.data;
    }
    return(
        <>
         {finalProductList && finalProductList.map(prod => (
            <ProductContainer key={prod.key}>
            <ProductHeaderContainer>
                <ProductHeader>
                        {prod.name}
                </ProductHeader>
            </ProductHeaderContainer>
            
            <ProductImgContainer>
                    <ProductImg src={prod.imageURL}/>
            </ProductImgContainer>

            <ProductDescContainer>
                    <ProductDesc>
                        {prod.description}
                    </ProductDesc>
            </ProductDescContainer>

            <ProductMetaContainer>
                <ProductPrice>
                       MRP Rs.{prod.price}
                </ProductPrice>

                <ProductCTA>
                        Buy Now
                </ProductCTA>
            </ProductMetaContainer>

        </ProductContainer>)) }
        </>
    )
}

export default Product;