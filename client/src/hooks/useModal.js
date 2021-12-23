import { useRef } from 'react';
import { Modal as BootstrapModal } from 'bootstrap';

function useModal() {
  const modalRef = useRef();

  const showModal = () => {
    const modalEle = modalRef.current;
    const bsModal = new BootstrapModal(modalEle, {
      backdrop: 'static',
      keyboard: false,
    });
    bsModal.show();
  };

  const hideModal = () => {
    const modalEle = modalRef.current;
    const bsModal = BootstrapModal.getInstance(modalEle);
    bsModal.hide();
  };
  return { modalRef, showModal, hideModal };
}

export default useModal;
