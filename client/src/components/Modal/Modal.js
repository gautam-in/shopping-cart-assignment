import Styled from "styled-components";
import H4 from "../Typography/H4";
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
  justify-content: center;
  align-items: center;
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
const ModalComponent = ({ shouldShow, onRequestClose, children, noItems }) => {
  return shouldShow ? (
    <Modal>
      <ModalContainer>
        <ModalHeaderContainer>
          <ModalTitle>
            <H4 color="#ffff">My Cart</H4>
          </ModalTitle>
          <ModalCloseButton onClick={onRequestClose}>&times;</ModalCloseButton>
        </ModalHeaderContainer>
        {noItems ? (
          <ModalBodyCenterAlignment>{children}</ModalBodyCenterAlignment>
        ) : (
          <ModalBody>{children}</ModalBody>
        )}

        {noItems ? (
          <ModalFooterDefault>
            <Button>Start Shopping</Button>
          </ModalFooterDefault>
        ) : (
          <ModalFooter>
            <HelpTextContainer>
              <HelpText>Promo code can be applied on payment page</HelpText>
            </HelpTextContainer>
            <Button>
              <ButtonCartContainer>
                <span>Proceed to Checkout</span>
                <span>{`Rs.${187} ${" "} >`}</span>
              </ButtonCartContainer>
            </Button>
          </ModalFooter>
        )}
      </ModalContainer>
    </Modal>
  ) : null;
};

export default ModalComponent;
