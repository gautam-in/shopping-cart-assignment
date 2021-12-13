import styled, { css } from "styled-components";

const flexCss = css`
  display: flex;
`;

export const CardContainer = styled.div`
  ${flexCss}
  flex-direction: column;
  max-width: 300px;
  padding: 8px;
  margin: 8px;
  border-bottom: 2px dotted #cdc9c9;
`;

export const CardHeader = styled.div`
  ${flexCss}
  padding: 8px;
  height: 150px;
`;

export const CardDescription = styled.div`
  ${flexCss}
  background: #f8f8f8;
  margin: 4px 0;
  padding: 8px 8px 24px 8px;
  height: 120px;
`;

export const CardContent = styled.div`
  ${flexCss}
`;

export const CardFooter = styled.div`
  ${flexCss}
  padding: 8px;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 150px;
  height: 30px;
  padding: 8px;
  ${flexCss};
  color: #fff;
  justify-content: center;
  background: #e22145;
  line-height: 28px;
  cursor: pointer;
`;
