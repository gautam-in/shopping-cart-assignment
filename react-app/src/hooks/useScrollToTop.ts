import { useLocation } from "react-router-dom";

import useFirstRender from "./useFirstRender";

const useScrollToTop = (): void => {
  const location = useLocation();

  useFirstRender(() => {
    window.scrollTo(0, 0);
  }, [location]);
};

export default useScrollToTop;
