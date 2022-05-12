import Styled from "styled-components";
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import H4 from "../Typography/H4";
import P from "../Typography/P";
import Button from "../Button/Button";
import HelpText from "../Typography/HelpText";
import { ROUTES,TRANSLATIONS } from '../../constants';

const HelpTextContainer = Styled.div`
    padding-bottom: 8px;
`;

const ButtonCartContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;        
    &:hover {
    color: #bf2957;
  }
`;

const Modal = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  z-index: 1000;

  @media(max-width: 770px){
    display: flex;
    justify-content: center;
    padding: 0;
  }
`;

const ModalContainer = Styled.div`
  background-color: #ffffff;
  max-width: 400px;
  width: 100%;
  border-radius: 0.2rem;
  box-shadow: 0 1px 10px #999;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  @media(max-width: 770px){
    max-width: none;
  }
`;

const ModalHeaderContainer = Styled.div`
      position: relative;
      background-color: black;
      color: #fff;
  @media(max-width: 770px){
      background-color: #fff;
  }
`;

const ModalTitle = Styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  & h4 {
  color: white;
  }
  @media(max-width: 770px){
     & h4,p {
       color: black !important;
     }
  }
`;

const ModalTitleWithItems = Styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  & h4 {
  color: white;
  }
  & p {
    margin-left:5px;
  }
  @media(max-width: 770px){
     & h4,p {
       color: black !important;
     }
  }
  @media(max-width: 480px){
    & p {
       line-height: 2em;
     }
  }
`;

const ModalBody = Styled.div`
  flex: 1;
  padding: 1rem;
  background-color: #eee;
  max-height: 600px;
  overflow: auto;
`;

const ModalBodyCenterAlignment = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem;
  background-color: #eee;
`;

const ModalCloseButton = Styled.div`
  position: absolute;
  font-size: 2rem;
  top: 0.2rem;
  right: 1rem;
  cursor: pointer;
  @media(max-width: 770px){
    color: black !important;
  }
`;

const ModalFooter = Styled.div`
  border-top: 1px solid lightgrey;
  padding: 0.4rem 0.8rem 0.8rem 0.8rem;
  text-align: center;
`;

const ModalFooterDefault = Styled.div`
    padding: 1rem;
`;
const ModalComponent = ({ modalState, handleModalClose, children, noItems,cartPrice,cartQuantity }) => {

  const history = useHistory();

  return modalState ? (
    <Modal>
      <ModalContainer>
        <ModalHeaderContainer>
          {noItems ? (
            <ModalTitle>
              <H4>{TRANSLATIONS.CART.HEADER}</H4>
            </ModalTitle>
          ) : (
            <ModalTitleWithItems>
              <H4 >{TRANSLATIONS.CART.HEADER}{' '}</H4>
              <P >{` (${cartQuantity} item)`}</P>
            </ModalTitleWithItems>
          )}
          <ModalCloseButton onClick={handleModalClose}>&times;</ModalCloseButton>
        </ModalHeaderContainer>
        {noItems ? (
          <ModalBodyCenterAlignment>{children}</ModalBodyCenterAlignment>
        ) : (
          <ModalBody>{children}</ModalBody>
        )}

        {noItems ? (
          <ModalFooterDefault>
            <Button onClick={() => {
              history.push(ROUTES.HOME)
              handleModalClose()
            }}>{TRANSLATIONS.CART.NO_ITEMS.CTA}</Button>
          </ModalFooterDefault>
        ) : (
          <ModalFooter>
            <HelpTextContainer>
              <HelpText>{TRANSLATIONS.CART.WITH_ITEMS.PROMO}</HelpText>
            </HelpTextContainer>
            <Button onClick={() => {
              history.push(ROUTES.HOME)
              handleModalClose()
            }}>
              <ButtonCartContainer>
                <span>{TRANSLATIONS.CART.WITH_ITEMS.CTA}</span>
                <span>{`Rs.${cartPrice} ${" "} >`}</span>
              </ButtonCartContainer>
            </Button>
          </ModalFooter>
        )}
      </ModalContainer>
    </Modal>
  ) : null;
};

ModalComponent.propTypes = {
  modalState: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func
  ]),
  handleModalClose: PropTypes.func,
  noItems: PropTypes.bool,
  cartPrice: PropTypes.number,
  cartQuantity: PropTypes.number
}

ModalComponent.defaultProps = {
  modalState: false,
  children: "Modal",
  handleModalClose: () => {},
  noItems: false,
  cartPrice: 0,
  cartQuantity: 0
}

export default ModalComponent;
