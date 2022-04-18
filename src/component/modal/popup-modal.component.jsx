import "./modal.styles.scss";
import { Modal } from "react-bootstrap";
const PopupModal = ({
  show,
  handleClose,
  modalFooter,
  modalHeader,
  children,
}) => {
  return (
    <Modal
      className="popup-modal-element"
      show={show}
      dialogClassName="dialog-modal"
      onHide={handleClose}
      backdrop="static"
    >
      <Modal.Header>
        <div>
          {modalHeader}
          <div className="close-btn" onClick={handleClose}>
            &#215;
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>{modalFooter}</Modal.Footer>
    </Modal>
  );
};
export default PopupModal;
