import { useContext } from 'react';
import { ModalContext } from '../store/modal-context';
import ReactDOM from 'react-dom';
import Cart from '../components/Cart';
import { ContainerStyles } from '../components/styles/globalStyles';

export default function Container({ children }) {
  const modalCtx = useContext(ModalContext);
  return (
    <ContainerStyles>
      {modalCtx.cartIsShown && ReactDOM.createPortal(<Cart />, document.getElementById('overlays'))}
      {children}
    </ContainerStyles>
  );
}