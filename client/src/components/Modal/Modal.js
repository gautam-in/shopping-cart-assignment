import Styled from "styled-components";
import { useHistory } from "react-router-dom";
import H4 from "../Typography/H4";
import P from "../Typography/P";
import Button from "../Button/Button";
import HelpText from "../Typography/HelpText";

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
`;

const ModalHeaderContainer = Styled.div`
      position: relative;
      background-color: black;
      color: #fff;
`;

const ModalTitle = Styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const ModalTitleWithItems = Styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  display: flex;

  & p{
    margin-left:5px;
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
              <H4 color="#ffff">My Cart</H4>
            </ModalTitle>
          ) : (
            <ModalTitleWithItems>
              <H4 color="#ffff">{`My Cart`}{' '}</H4>
              <P color="#ffff">{` (${cartQuantity} item)`}</P>
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
              history.push('/')
              handleModalClose()
            }}>Start Shopping</Button>
          </ModalFooterDefault>
        ) : (
          <ModalFooter>
            <HelpTextContainer>
              <HelpText>Promo code can be applied on payment page</HelpText>
            </HelpTextContainer>
            <Button onClick={() => {
              history.push('/')
              handleModalClose()
            }}>
              <ButtonCartContainer>
                <span>Proceed to Checkout</span>
                <span>{`Rs.${cartPrice} ${" "} >`}</span>
              </ButtonCartContainer>
            </Button>
          </ModalFooter>
        )}
      </ModalContainer>
    </Modal>
  ) : null;
};

export default ModalComponent;
