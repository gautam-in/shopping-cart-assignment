import styled from "styled-components";

export const AuthWrapper = styled.div`
display: flex;
margin: 50px 0;
justify-content: center;

@media (max-width: 767px) {
  flex-direction: column;
}
`;

export const Authleft = styled.div`
width: 40%;
@media (max-width: 767px) {
  width: 100%;
}
h1 {
  font-size: 2rem;
  margin: 20px 0;
}
`;

export const AuthForm = styled.form`
width: 40%;
display: flex;
flex-direction: column;
margin-left: 3%;
@media (max-width: 767px) {
  width: 100%;
  margin: 0;
}
`;

export const FormGroup = styled.div`
margin: 30px 0 0 0;
position: relative;

label {
  font-size: 12px;
  color: var(--colorBlue);
  opacity: 0;
  position: absolute;
  top: -15px;
  left: 0;
  transition: all 0.3s;
}

input {
  color: #444;
  border: 0;
  border-bottom: 1px solid currentColor;
  width: 100%;
  height: 38px;
  padding: 0 5px;
  transition: all 0.2s;

  &:focus {
    border-color: var(--colorBlue);
    outline: none;
  }

  &::placeholder {
    color: #999;
  }

  &:not(:placeholder-shown) + label {
    opacity: 1;
  }
}
`;

export const SubmitBtn = styled.button`
background: var(--colorPrimary);
color: #fff;
border: 0;
padding: 10px 20px;
transition: all 0.2s;
width: 100%;
margin-top: 40px;

&:hover {
  filter: brightness(0.9);
}
`;

export const FormError = styled.p`
color: var(--colorPrimary);
font-size: 14px;
margin: 10px 0 0 0;
`;
