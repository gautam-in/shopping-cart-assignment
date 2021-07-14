import React, { createContext, useContext, useEffect, useState } from "react";

const ViewportContext = createContext();

export const ViewportProvider = ({ children }) => {
  const mobileSize = 480;
  const tabletSize = 768;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileSize);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > mobileSize && window.innerWidth <= tabletSize
  );
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > tabletSize);

  const handleResize = () => {
    const width = window.innerWidth;
    setIsMobile(width <= mobileSize);
    setIsTablet(width > mobileSize && width <= tabletSize);
    setIsDesktop(width > tabletSize);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </ViewportContext.Provider>
  );
};

export function useViewport() {
  return useContext(ViewportContext);
}
