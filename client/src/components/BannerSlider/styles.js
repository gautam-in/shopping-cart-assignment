import styled from "styled-components";

export const arrowStyles = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: "60px",
  height: "35px",
  cursor: "pointer",
  backgroundColor: "rgba(0, 0, 0, 0.60)",
  color: "#fff"
};

export const indicatorStyles = {
  background: "#aaa",
  width: "8px",
  height: "8px",
  display: "inline-block",
  margin: "0 8px",
  borderRadius: "10px",
  cursor: "pointer"
};

export const CarouselWrapper = styled.div`
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.2);
`;