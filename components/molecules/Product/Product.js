import {ProductStyled,TopSection,MiddleSection,BottomSection,Price,Buy,
    ProductDesc,ProductRow} from './style'
import HeadingH4 from '../../atoms/Heading/HeadingH4'
import TextP from '../../atoms/Text/TextP'
import Button from '../../atoms/Button/Button'
import Image from '../../atoms/Image/Image'

const SingleProduct = ({data})=>{
    const {name,imageURL,description,price} = data;
    return(
        <ProductStyled>
            <TopSection>
                <HeadingH4>
                    {name}
                </HeadingH4>
            </TopSection>
            <MiddleSection>
                <Image src={imageURL} classname='product' alt={name}/>
                <ProductDesc>
                    <TextP>{description}</TextP>
                </ProductDesc>
            </MiddleSection>
            <BottomSection>
                <Price><span>MRP Rs {price}</span></Price>
                <Buy><Button>Buy Now</Button></Buy>
            </BottomSection>
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

export default Product