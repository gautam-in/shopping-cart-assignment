import { useHistory } from "react-router";
import styled from "styled-components";

const SECTION_WRAPPER = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 100%;
    height: 40vh;
    box-shadow: 0px 15px 10px -20px #111;   
    justify-items: center;
    align-items: center;
`

const DESCRIPTION_SECTION = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-template-rows: 59px 59px 59px;
`
const DESCRIPTION_HEADING = styled.h6`
    max-width: 250px;
    min-height: 3rem;
    text-align: center;
    font-size: 0.98rem;
`;

const PRODUCT_DESCRIPTION = styled.p`
    max-width: 545px;
    font-size: .7rem;
    font-size: 0.9rem;
    height: 1.8rem;
    overflow: hidden;
    padding: 5px 5px;
    justify-items: center;
    margin: 7px;
`;

const PRODUCT_IMG = styled.img`
    /* grid-area: product-img; */
    max-width: 250px;
    max-height: 150px;
`

const EXPLORE_BUTTON = styled.div`
    padding: 3px;
    box-sizing: border-box;
    height: 35px;
    background: #bf2957;
    color: white;
    text-align: center;
    line-height: 2;
    cursor: pointer;
    :active{
        color: black;
    }
`

export default function HomeSection({ product, index }) {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/products/${product.id}`)
    }
    return (
        <SECTION_WRAPPER>
            {
                product && index % 2 ? <><DESCRIPTION_SECTION>
                    <DESCRIPTION_HEADING>{product.name}</DESCRIPTION_HEADING>
                    <PRODUCT_DESCRIPTION>{product.description}</PRODUCT_DESCRIPTION>
                    <EXPLORE_BUTTON type="button" onClick={handleClick}>Explore {product.name}</EXPLORE_BUTTON>
                </DESCRIPTION_SECTION>
                    <PRODUCT_IMG src={product.imageUrl} alt="img" /></>
                    : <>
                        <PRODUCT_IMG src={product.imageUrl} alt="img" />
                        <DESCRIPTION_SECTION>
                            <DESCRIPTION_HEADING>{product.name}</DESCRIPTION_HEADING>
                            <PRODUCT_DESCRIPTION>{product.description}</PRODUCT_DESCRIPTION>
                            <EXPLORE_BUTTON type="button" onClick={handleClick}>Explore {product.name}</EXPLORE_BUTTON>
                        </DESCRIPTION_SECTION></>
            }
        </SECTION_WRAPPER>
    )
}