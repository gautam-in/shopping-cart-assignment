import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .inner {
    position: relative;
    white-space: nowrap;
    transition: transform 0.3s;
  }
`;

export const Indicator = styled.div`
  position: absolute;
  bottom: 10%;
  right: 50%;
  left: 50%;
  z-index: 5;
  text-align: "center";
  width: 100%;
`;

export const Dot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 4px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  &:hover {
    background-color: black;
  }

  @media screen and (min-width: 720px) {
    margin: 0 8px;
  }
`;
