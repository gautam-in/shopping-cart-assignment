/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { CustomContainer } from 'app/components/Container';

import { useTranslation } from 'react-i18next';
import { rgbToColorString } from 'polished';
import { messages } from './messages';

export const Footer = memo(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();

  return (
    <Wrapper>
      <CustomContainer fixed>
        <Div>{t(...messages.footerText())} </Div>
      </CustomContainer>
    </Wrapper>
  );
});

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width:100%;
  background-color: ${rgbToColorString({
    red: 128,
    blue: 128,
    green: 128,
    alpha: 0.3,
  })};
`;

const Div = styled.title`
  height: 40px;
  display: flex;
  align-items: center;
`;
