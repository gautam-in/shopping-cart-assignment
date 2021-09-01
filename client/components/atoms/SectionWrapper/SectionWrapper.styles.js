import styled from "styled-components";
import { sizes } from "../../../global/styles/sizes";

export const SectionWrapper = styled.div`
  margin: 40px 72px;

  @media (max-width: ${sizes.mobileL}) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;
