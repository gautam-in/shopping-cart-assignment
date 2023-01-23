import React, { type EffectCallback, type DependencyList } from "react";

const useFirstRender = (
  effect: EffectCallback,
  deps?: DependencyList
): void => {
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      return effect();
    }
  }, deps);
};

export default useFirstRender;
