import {useSelector,useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { cartActions } from '../../redux/slice/cartSlice';

import {ProductContainer,ProductHeaderContainer,ProductHeader,ProductImgContainer,ProductImg,ProductDescContainer,
    ProductDesc,ProductMetaContainer,ProductPrice,ProductCTA,ProductMetaDataContainer,ProductMobilePrice} from './Product.styles';

const Product = ({category}) => {
    const {categoryId} = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state.data.products);


    let finalProductList;
    if(category !== ''){
        finalProductList = products.data.filter(prod => prod.category === category);
    } else if(categoryId){
        finalProductList = products.data.filter(prod => prod.category === categoryId);
    }
    else finalProductList = products.data;

    const addtoCart = (item) => dispatch(cartActions.addtoCart(item));
    
    return(
        <>
         {finalProductList && finalProductList.map(prod => (
            <ProductContainer key={prod.id}>
            <ProductHeaderContainer>
                <ProductHeader>
                        {prod.name}
                </ProductHeader>
            </ProductHeaderContainer>
            
            <ProductMetaDataContainer>
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

                    <ProductCTA onClick={()=>addtoCart(prod)}>
                            Buy Now
                            <ProductMobilePrice>@ Rs {prod.price}</ProductMobilePrice>
                    </ProductCTA>
                </ProductMetaContainer>
            </ProductMetaDataContainer>


        </ProductContainer>)) }
        </>
    )
}

export default Product;