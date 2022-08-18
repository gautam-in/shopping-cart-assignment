/**
 *
 * NavBar
 *
 */
import React, { memo } from 'react';
import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

import { CustomContainer } from '../Container';
import { messages } from './messages';

interface Props {}

export const NavBar = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();

  return (
    <Div>
      <CustomContainer>
        <RowWrapper>
          <Wrapper>
            <Link to="/">
              <Image
                width="200px"
                src="/static/images/logo.png"
                alt="green iguana"
                style={{
                  width: '150px',
                  marginRight: '10%',
                }}
              />
            </Link>
            <Text>
              <Link to="/">{t(...messages.home())}</Link>
            </Text>

            <Text>
              {' '}
              <Link to="/products"> {t(...messages.product())}</Link>
            </Text>
          </Wrapper>

          <ColWrapper>
            <Wrapper>
              <Link to="/signIn">
                <SignText>{t(...messages.signIn())}</SignText>
              </Link>
              <Link to="/signUp">
                {' '}
                <SignText>{t(...messages.register())}</SignText>
              </Link>
            </Wrapper>
            <CartWrapper>
              <img width="30px" src="/static/images/cart.svg" alt="cart" />
              <ItemsText>0 items</ItemsText>
            </CartWrapper>
          </ColWrapper>
        </RowWrapper>
      </CustomContainer>
    </Div>
  );
});

const Div = styled.div`
  height: 80px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5px;
`;

const ColWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.span`
  margin-left: 50px;
  display: flex;
  align-items: end;
  font-weight: bold;
  color: #a5a5a5;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SignText = styled.span`
  margin-left: 17px;
  display: flex;
  align-items: end;
  font-weight: bold;
  padding-bottom: 10px;
  font-size: 12px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ItemsText = styled.span`
  display: flex;
  align-items: end;
  font-weight: bold;
`;

const Image = styled.img`
  width: 14%;
`;

const CartWrapper = styled.div`
  display: flex;
  background-color: #d5d5d5;
  align-items: flex-end;
  justify-content: center;
  padding: 6px;
  width: 106px;
  text-align: center;
  @media (max-width: 768px) {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const Link = styled(RLink)`
  text-decoration: none;
  color: inherit;
`;
