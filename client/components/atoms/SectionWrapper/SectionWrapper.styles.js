import styled from "styled-components";
import { sizes } from "../../../global/styles/sizes";

export const SectionWrapper = styled.div`
  padding-left: 72px;
  padding-right: 72px;

  @media (max-width: ${sizes.mobileL}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
