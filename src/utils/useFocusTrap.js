import React, { useState, useEffect } from "react";

export default function useFocusTrap(ref) {
  const modal = document.querySelector("#portal");

  const [elementRef, setElementRef] = useState(ref);

  const keyDownHandler = (e) => {
    const focusableElements = modal.querySelectorAll(
      `button, a[href], input, select, textarea`
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.key !== "Tab") return;

    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      e.preventDefault();
    }

    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  useEffect(() => {
    const focusableElements = `button, a[href], input, select, textarea`;
    const firstElement = modal.querySelectorAll(focusableElements)[0];
    firstElement.focus();

    elementRef?.current?.addEventListener("keydown", keyDownHandler);

    return () =>
      elementRef?.current?.removeEventListener("keydown", keyDownHandler);
  }, [elementRef]);

  return setElementRef;
}
