import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  cursor: pointer;
  width: 10.5em;
  height: 20em;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-left: 10px;
`;

export const Name = styled.h3`
  font-size: 14px;
`;

export const Image = styled.img`
  flex-grow: 1;
`;

export const Desc = styled.p`
  background-color: lightgray;
  font-size: 10px;
  max-height: 7vh;
  border-radius: 2px;
  overflow: auto;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    min-width: 7em !important;
    height: 2em;
    font-size: 10px;
    letter-spacing: normal;
    padding: 0;
    line-height: 0;
    align-items: center;
  }
`;

export const Price = styled.span`
  font-size: 10px;
`;
