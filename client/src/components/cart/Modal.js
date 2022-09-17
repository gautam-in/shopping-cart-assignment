import ReactDom from "react-dom";
import styles from "./Modal.module.scss";

const Modal = ({ children }) => {
  // if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className={styles.overLayStyles} />
      <div className={styles.modalStyles}>{children}</div>
    </>,
    document.getElementById("portal")
  );
};
export default Modal;
