import styled from "styled-components";
import Image from "./image";

const PriceStyle =styled.div`
    display:flex;
    padding:'10px';
    margin:'10px 0';
    background-color:white;
`;

function LowPrice() {
    return (
        <PriceStyle>
            <Image src="static/images/lowest-price.png" />
            <span style={{ margin: 'auto' }}>You won't find  it cheaper anymore</span>
        </PriceStyle>
    );
}
export default LowPrice;