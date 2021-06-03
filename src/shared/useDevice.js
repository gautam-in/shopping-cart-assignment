import { useEffect, useState } from 'react';

function useDevice() {
  const tabletSize = 770;

  const [isDesktop, setIsDesktop] = useState(false);

  const handleWindowResize = () => {
    const width = self.innerWidth;
    setIsDesktop(width > tabletSize);
  };

  useEffect(() => {
    handleWindowResize();
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleWindowResize(), 150);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return { isDesktop };
}

export default useDevice;
