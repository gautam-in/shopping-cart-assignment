import styled from "styled-components";

export const CategoryContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  box-shadow: 0 -7px 6px -7px rgba(50, 50, 50, 0.2);

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

export const CategoryImage = styled.img`
  width: 30%;
`;
export const CategoryDetails = styled.div`
  text-align: center;
`;
export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
`;
export const Description = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 25px;
`;
export const StyledLink = styled.a`
  background: #bf2957;
  color: #ffffff;
  padding: 10px;
  white-space: nowrap;
  width: 50%;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.1s ease-in;

  &:hover {
    background: #ffffff;
    color: #bf2957;
    border: 0.1rem solid #bf2957;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background: #bf2957;
    color: #ffffff;
  }
`;
