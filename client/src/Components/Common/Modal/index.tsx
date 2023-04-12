import { useEffect } from "react"
import ReactDOM from "react-dom"
import { AiOutlineClose } from "react-icons/ai"

import { Button } from "../Button"

import { ModalProps } from "./models"

import "./styles.scss"

export const Modal = ({
  show,
  title,
  children,
  footerText,
  actionText,
  classes,
  onClose,
}: ModalProps) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [show])

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown)

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown)
    }
  }, [])

  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  return ReactDOM.createPortal(
    <div className={`modal ${classes}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <Button type="button" variant="transparent" handleClick={onClose}>
            <AiOutlineClose />
          </Button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <div>{footerText}</div>
          <Button type="button" variant="primary" handleClick={onClose}>
            {actionText}
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-portal")!
  )
}
