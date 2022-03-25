import { useLayoutEffect } from "react";

// Hook
export function useLockBodyScroll({ disable = false } = {}) {
  useLayoutEffect(() => {
    if (disable) return;

    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [disable]); // Empty array ensures effect is only run on mount and unmount
}
