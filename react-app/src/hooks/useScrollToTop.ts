import { useLocation } from "react-router-dom";

import useFirstRender from "./useFirstRender";

const useScrollToTop = (): void => {
  const location = useLocation();

  useFirstRender(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
};

export default useScrollToTop;
