import { useEffect, useState } from "react";
 
function useDevice() {
  const mobileSize = 480;
  const tabletSize = 768;
 
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
 
  const handleWindowResize = () => {
    setIsMobile(window.innerWidth < mobileSize);
    setIsTablet(
      window.innerWidth > mobileSize && window.innerWidth <= tabletSize
    );
    setIsDesktop(window.innerWidth > tabletSize);
  };
 
  useEffect(() => {
    handleWindowResize();
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
 
  return { isMobile, isTablet, isDesktop };
}
 
export default useDevice;