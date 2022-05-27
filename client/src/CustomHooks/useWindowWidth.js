import React, { useState, useEffect } from "react";

//making an hook
export const useWindowWidth = () => {
  const [width, setWidth] = useState({
    windowWidth: 0,
  });

  const hasWindow = typeof window !== 'undefined';

  useEffect(() => {
    window.addEventListener("resize", updatePosition);
  }, []);

  const updatePosition = () => {
    setWidth({ windowWidth: window.innerWidth });
  };

  return width;
};