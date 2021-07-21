import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import {ProductStyled,TopSection,MiddleSection,BottomSection,Price,Buy,
    ProductDesc,ProductRow,ProductImage,ProductDescription,ProductPrice,ProductPriceMobile,PriceText} from './style'
import HeadingH4 from '../../atoms/Heading/HeadingH4'
import TextP from '../../atoms/Text/TextP'
import Button from '../../atoms/Button/Button'
import {subStr} from '../../../lib/lib'
import {filterProduct} from '../../../utils/utils'



const PriceTag = ({data})=>{
    
    const cartInfo = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const {cartData} = cartInfo;
    const {price,id} = data;
    
    const addToCart = ()=>{
        const filterData = filterProduct(cartData,data,false,false,price)
        dispatch({ type: 'ADD_TO_CART',payload:filterData })
        dispatch({ type: 'CART_OPEN',payload:true })
        // return addProductToCart(cartData)
    }
    return(
        <>
            <ProductPrice>
                <PriceText>MRP Rs.{price}</PriceText>
                <div onClick={() => addToCart() }><Button  cname='variant_category' btnTheme='product' >Buy Now</Button></div>
            </ProductPrice>
            <ProductPriceMobile>
                <Button cname='variant_product' btnTheme="product">Buy Now <span>@ Rs{price}</span></Button>
            </ProductPriceMobile>
        </>
    )
}


const SingleProduct = ({data})=>{
    
    const {name,imageURL,description,price} = data;
    
    return(
        <ProductStyled>
            <TopSection>
                <HeadingH4>
                    {name}
                </HeadingH4>
            </TopSection>
            <BottomSection>
                <ProductImage>
                    <img src={imageURL} classname='product' alt={name}/>    
                </ProductImage>
                <ProductDescription>
                    <TextP paraTheme="gray">{subStr(description,120)}</TextP>
                    {/* <Price>MRP Rs {price}</Price> */}
                    {/* <Button cname='variant_product' btnTheme="product">Buy Now <span>@ Rs{price}</span></Button> */}
                    <PriceTag data={data}/>
                </ProductDescription>
            </BottomSection>
            {/* <MiddleSection>
                <Image src={imageURL} classname='product' alt={name}/>
                <ProductDesc>
                    <TextP>{description}</TextP>
                </ProductDesc>
                <Price><span>MRP Rs {price}</span></Price>
                <Buy><Button cname='variant_category'>Buy Now</Button></Buy>
            </MiddleSection> */}
            {/* <BottomSection>
                <Price><span>MRP Rs {price}</span></Price>
                <Buy><Button cname='variant_category'>Buy Now</Button></Buy>
            </BottomSection> */}

        </ProductStyled>
    )
}

function Product({product}){
    const rowItems = product.map((data) =>
        <SingleProduct key={data.id} data={data}/>
    );
    return(
        <ProductRow>
            {rowItems}
        </ProductRow>
    )
}

export default SingleProduct