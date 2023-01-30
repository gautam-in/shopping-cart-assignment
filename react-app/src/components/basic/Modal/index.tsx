import React from "react";

import { MyGlobalContext } from "../../../context/myGLobalContext";

export interface IModalProps {
  children: React.ReactNode;
  headerTitle: string | React.ReactElement;
  onCloseHandler: () => void;
  isModalOpen: boolean;
}

const Modal: React.FC<IModalProps> = ({
  children,
  headerTitle,
  onCloseHandler,
  isModalOpen,
}) => {
  const { isAddToCartOpen, setIsAddToCartOpen } =
    React.useContext(MyGlobalContext);

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const checkIfClickedOutside = (event: any) => {
      if (
        isAddToCartOpen &&
        ref.current &&
        !ref?.current?.contains(event.target)
      ) {
        setIsAddToCartOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isAddToCartOpen, setIsAddToCartOpen]);

  return isModalOpen ? (
    <div className="modal" ref={ref}>
      <div className="top-wrapper">
        <div className="modal__header">
          <h2 className="modal__header__title">{headerTitle}</h2>
          <div className="modal__close-wrapper__btn" onClick={onCloseHandler}>
            <svg
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div className="modal__content">{children}</div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
