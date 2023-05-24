import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";

import Button from "../Button";

import "./styles.scss";

type ModalProps = {
  show: boolean;
  title: React.ReactNode | string;
  actionCopy?: React.ReactNode | string;
  footerCopy?: React.ReactNode | string;
  className?: string;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({
  show,
  title,
  children,
  footerCopy,
  actionCopy,
  className,
  onClose,
}: ModalProps) => {
  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = show ? "hidden" : "auto";
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  useEffect(() => {
    const handleEscapeKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (show) {
      document.body.addEventListener("keydown", handleEscapeKeyDown);
    }

    return () => {
      document.body.removeEventListener("keydown", handleEscapeKeyDown);
    };
  }, []);

  const handleModalClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return createPortal(
    <div className={`modal ${className}`} onClick={handleModalClick}>
      <div className="modal__content" onClick={handleContentClick}>
        <div className="modal__content-header">
          <h4 className="modal__content-title">{title}</h4>
          <Button
            type="button"
            variant="transparent"
            onClick={onClose}
            className="hidden@"
          >
            <MdOutlineClose />
          </Button>
        </div>
        <div className="modal__content-body">{children}</div>
        <div className="modal__content-footer">
          <p>{footerCopy}</p>
          <Button type="button" variant="primary" onClick={onClose}>
            {actionCopy}
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-portal")!
  );
};

export default Modal;
