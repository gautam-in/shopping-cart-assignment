import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

function useDevice() {
  const mobileSize = 600;
  const tabletSize = 768;

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth < mobileSize);
    setIsTablet(
      window.innerWidth > mobileSize && window.innerWidth < tabletSize
    );
    setIsDesktop(window.innerWidth > tabletSize);
  };

  useEffect(() => {
    handleWindowResize();
    // Debounce
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleWindowResize(), 150);
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  /* const savedDebounced = useCallback(
    debounce(() => handleWindowResize(), 100),
    []
  );

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", savedDebounced);
    return () => {
      window.removeEventListener("resize", savedDebounced);
    };
  }, []); */

  return { isMobile, isTablet, isDesktop };
}

export default useDevice;
