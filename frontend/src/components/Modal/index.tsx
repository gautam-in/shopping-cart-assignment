import { useEffect } from "react";
import Button from "../Button";
import { Portal } from "../Portal";
import styles from "./Modal.module.scss";

export interface ModalProps {
  show: boolean;
  title: React.ReactNode | string;
  className?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({
  show,
  title,
  children,
  className,
  onClose,
}: ModalProps) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return show ? (
    <Portal>
      <div className={styles["modal-container"]}>
        <div className={`${styles["modal"]} ${className}`}>
          <header className={styles["modal--header"]}>
            <h4 className={styles["modal--title"]}>{title}</h4>
            <Button
              className={styles["modal--close-btn"]}
              type="button"
              variant="transparent"
              onClick={onClose}
            >
              X
            </Button>
          </header>
          <article className={styles["modal--content"]}>{children}</article>
        </div>
      </div>
    </Portal>
  ) : null;
};
