import { useEffect, useState } from "react";

function useDevice() {
  const mobileSize = 600;
  const desktopSize = 992;

  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const handleWindowResize = () => {
    setIsMobile(window.innerWidth > mobileSize);
    setIsDesktop(window.innerWidth > desktopSize);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return { isMobile, isDesktop };
}

export default useDevice;
