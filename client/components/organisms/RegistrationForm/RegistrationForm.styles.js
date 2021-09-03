import styled from "styled-components";
import { sizes } from "../../../global/styles/sizes";

export const RegistrationFormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 72px;
  margin-top: 32px;
  gap: 1rem;

  @media (max-width: ${sizes.mobileL}) {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }

  @media (max-width: ${sizes.tablet}) {
    padding: 0 24px;
  }
`;

export const RegistrationFormHeading = styled.section`
  h1 {
    margin-top: 0;
  }
`;

export const Form = styled.form``;
