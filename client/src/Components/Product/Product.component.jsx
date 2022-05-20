import { useEffect,useState } from "react";
import axios from "axios";
import {ProductContainer,ProductHeaderContainer,ProductHeader,ProductImgContainer,ProductImg,ProductDescContainer,
    ProductDesc,ProductMetaContainer,ProductPrice,ProductCTA} from './Product.styles';

const Product = props => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/products').then(res=>setProducts(res.data))
      },[]);

    return(
        <>
         {products && products.map(prod => (
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