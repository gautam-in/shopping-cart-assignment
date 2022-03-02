import styled from "styled-components";

export const Container = styled.div`
  min-height: 300px;
  width: 60%;
  margin: 0 150px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    width: 70%;
  }
`;

export const Content = styled.div`
  height: 100px;
  margin: 80px 40px 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

export const Form = styled.form`
  margin-top: 40px;
  min-height: 300px;
  width: 35%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Fields = styled.div`
  position: relative;
  margin: 20px 0;
  display: flex;
`;

export const Label = styled.label`
  position: absolute;
  font-size: 12px;
  top: 20px;
  color: grey;
  transition: 0.4s linear;
`;

export const Field = styled.input`
  height: 50px;
  width: 100%;
  border: none;
  border-bottom: ${(props) =>
    props.error ? "2px solid red" : "2px solid grey"};
  outline: none;
  font-size: 18px;
  &:focus,
  &:active {
    border-color: skyblue;
  }
  &:focus + Label {
    top: -10px;
    color: skyblue;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: rgb(237, 27, 62);
  font-size: 18px;
  color: white;
  margin: 15px 0;
`;
