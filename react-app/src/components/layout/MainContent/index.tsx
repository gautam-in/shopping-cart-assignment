import React from "react";

import { MyGlobalContext } from "../../../context/myGLobalContext";

const MainContent: React.FC<React.PropsWithChildren> = ({ children = "" }) => {
  const { isAddToCartOpen } = React.useContext(MyGlobalContext);
  return (
    <main className={`${isAddToCartOpen && "hide-scroll"} main-content`}>
      {children}
    </main>
  );
};

export default MainContent;
