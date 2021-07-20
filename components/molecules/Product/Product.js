import {ProductStyled,TopSection,MiddleSection,BottomSection,Price,Buy,
    ProductDesc,ProductRow,ProductImage,ProductDescription,ProductPrice,ProductPriceMobile,PriceText} from './style'
import HeadingH4 from '../../atoms/Heading/HeadingH4'
import TextP from '../../atoms/Text/TextP'
import Button from '../../atoms/Button/Button'
import Image from '../../atoms/Image/Image'
import {subStr} from '../../../lib/lib'

const PriceTag = ({price})=>{
    return(
        <>
            <ProductPrice>
                <PriceText>MRP Rs.150</PriceText>
                <div><Button cname='variant_category' btnTheme='product'>Buy Now</Button></div>
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
                    <PriceTag price={price}/>
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