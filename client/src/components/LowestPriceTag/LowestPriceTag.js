import Styled from "styled-components";
import LowestPriceImage from "./Images/lowest-price.png";

const LowestPriceContainer = Styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  width: 100%;
`;

const LowestPriceImageTag = Styled.img`
  width: 30%;
  margin-right: 20px;
`;

const LowestPriceTag = () => {
  return (
    <>
      <LowestPriceContainer>
        <LowestPriceImageTag src={LowestPriceImage} alt="lowest-price-tag" />
        <span style={{ fontSize: "16px" }}>
          You won't find it cheaper anywhere
        </span>
      </LowestPriceContainer>
    </>
  );
};

export default LowestPriceTag;
