import React from "react";
import Header from "../../../components/header";
import FormInfo from "../../../components/formInfo";
import Form from "./form";
import styled from "styled-components";
import Footer from "../../../components/footer";

const FormContainer = styled.section`
  display: flex;
  gap: 50px;
  justify-content: center;
  line-height: 2;
  margin-top: 50px;
  margin-bottom:20px;
  box-shadow: none;
`;

const Signup = () => {
  return (
    <>
      <Header />
      <FormContainer>
        <FormInfo
          name="Signup"
          description="Get Access to your orders, whishlist and Recommendations"
        />
        <Form />
      </FormContainer>
      <Footer/>
    </>
  );
};

export default Signup;
