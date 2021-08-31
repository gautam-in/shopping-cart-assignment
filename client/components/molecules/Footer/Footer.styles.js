import styled from "styled-components";
import { sizes } from "../../../global/styles/sizes";

export const FooterWrapper = styled.footer`
  background-color: var(--light-grey);
  position: sticky;
  margin-top: 40px;
  padding: 16px 72px;

  @media (max-width: ${sizes.mobileL}) {
    padding: 16px 16px;
  }
`;
