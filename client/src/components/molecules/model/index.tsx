import { useEffect, useRef } from "react";

import { Box, Flex } from "../../atoms";
import { Portal } from "../../atoms/portal";

import "./model.scss";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  ariaLabel?: string;
  onOutsideClick: () => void;
  wrapperId: string;
  className?: string;
};

export function Modal({
  children,
  isOpen,
  ariaLabel,
  onOutsideClick,
  wrapperId = "modal",
  className,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // stop the body from scrolling when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // reset the overflow property when we close the modal
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return isOpen ? (
    <Portal wrapperId={wrapperId}>
      <Flex
        align="center"
        justify="center"
        className="model__overlay"
        aria-labelledby={ariaLabel ?? "model"}
        role="dialog"
        aria-modal="true"
        onClick={(event) => {
          if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
          ) {
            // If we click outside the modal close it
            onOutsideClick();
          }
        }}
      >
        <Box ref={modalRef} className={className}>
          {children}
        </Box>
      </Flex>
    </Portal>
  ) : null;
}
