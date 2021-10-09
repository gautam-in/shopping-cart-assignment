import styled from "styled-components";

const Title = styled.h3`
  height: 20%;
  margin: 0;
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 22%;
  }
  @media (max-width: 480px) {
    height: 28%;
  }
`;

const ProductTileStyles = styled.section`
  width: 220px;
  height: 450px;
  padding: 0.5rem;
  margin: 1rem;
  margin-top: 10px;
  position: relative;
  box-shadow: 5px 5px 15px gray;
  border-bottom: 1px dotted grey;
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 350px;
    width: 250px;
    margin: 1rem;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 300px;
    margin: 0.5rem;
  }
`;

const ProductInfo = styled.div`
  height: 60%;
  img {
    width: 100%;
    height: 60%;
  }
  p {
    font-size: 10px;
    background-color: var(--light-grey);
    text-align: left;
    padding: 0.5rem;
    height: 40%;
    margin: 0;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    height: 58%;
    img {
      width: 50%;
      height: 100%;
    }
    p {
      width: 50%;
      height: 100%;
    }
  }
  @media (max-width: 480px) {
    display: flex;
    height: 70%;
    img {
      width: 50%;
      height: 100%;
    }
    p {
      width: 50%;
      height: 75%;
    }
  }
`;

const PaymentSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 0;
  height: 15%;
  button {
    background: var(--button-color);
    color: white;
    font-weight: 500;
    border: 0;
    border-radius: 0;
    text-transform: uppercase;
    display: inline-block;
    width: 100px;
    height: 50px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const PaymentSectionForMobilesandTablets = styled.button`
  display: none;
  @media (min-width: 768px) and (max-width: 1024px) {
    background: var(--button-color);
    color: white;
    font-weight: 500;
    border: 0;
    border-radius: 0;
    text-transform: uppercase;
    display: block;
    width: 100%;
    margin: 1rem 0;
    padding: 0.8rem;
  }
  @media (max-width: 480px) {
    background: var(--button-color);
    color: white;
    font-weight: 500;
    border: 0;
    border-radius: 0;
    text-transform: uppercase;
    display: block;
    position: absolute;
    right: 8px;
    top: 87%;
    width: 160px;
    padding: 0.5rem;
  }
`;

export {
  Title,
  ProductTileStyles,
  ProductInfo,
  PaymentSection,
  PaymentSectionForMobilesandTablets,
};
